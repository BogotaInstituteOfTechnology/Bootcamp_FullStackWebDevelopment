import BoardServices from "../services/board.js";
import UserServices from "../services/user.js";
import httpStatus from "http-status";

// Antiguo

// const createTask = async (req, res) => {
//   try {
//     const url = `${req.protocol}://${req.get("host")}`;

//     const imageUrl = req.file ? `${url}/uploads/${req.file.filename}` : null;

//     const board = await BoardServices.createTask(
//       req.user._id,
//       req.body,
//       imageUrl
//     );
//     if (!board) return res.status(400).send("No se pudo crear la tarea");

//     return res.status(200).send({ board });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: "Error interno del servidor" });
//   }
// };

// optimizado
const createTask = async (req, res) => {
  try {
    const imageUrl = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : null;

    const board = await BoardServices.createTask(
      req.user._id,
      req.body,
      imageUrl
    );

    if (!board) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ error: "No se pudo crear la tarea" });
    }

    return res.status(httpStatus.OK).send({ board });
  } catch (error) {
    console.error(error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ error: "Error interno del servidor" });
  }
};

//Optimizado
const listTask = async (req, res) => {
  try {
    const user = await UserServices.getUserById(req.user._id);

    if (!user) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ error: "Usuario no está en Base de Datos" });
    }

    const tasks = await BoardServices.listTask(req.user._id);

    return res.status(httpStatus.OK).send(tasks);
  } catch (error) {
    console.error(error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ error: "Error interno del servidor" });
  }
};

const deleteTask = async (req, res) => {
  const user = await UserServices.getUserById(req.user._id);
  if (!user) return res.status(400).send("No hay usuario");

  const task = await BoardServices.deleteTask(req.params._id);
  if (!task) {
    return res.status(404).send("No hay tarea, no ser ha podido borrar");
  }
  res.status(200).send({ message: "borrado" });
};

const updateTask = async (req, res) => {
  const user = await UserServices.getUserById(req.user._id);
  if (!user) return res.status(400).send("No hay usuario");
  const task = await BoardServices.updateTask(
    req.body._id,
    req.user._id,
    req.body
  );
  if (!task) {
    return res.status(404).send("no hay tarea");
  }

  res.status(200).send(task);
};

export default { createTask, listTask, deleteTask, updateTask };
