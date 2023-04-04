import Board from "../models/board.js";
import fs from "fs";
import path from "path";

const createTask = async (userId, taskData, img) => {
  const board = new Board({
    user_id: userId,
    name: taskData.name,
    status: "to-do",
    image_url: img,
    description: taskData.description,
  });

  const result = await board.save();
  return result;
};

const listTask = async (userId) => {
  const result = await Board.find({ user_id: userId });
  return result;
};

const deleteTask = async (id) => {
  const result = await Board.findByIdAndDelete(id);
  await deleteImgForTask(result.image_url);
  return result;
};

const deleteImgForTask = async (img) => {
  const rutaCompleta = img;
  const ultimaBarra = rutaCompleta.lastIndexOf("/");
  const rutaFinal = rutaCompleta.substring(ultimaBarra);

  const rutaArchivo = path.join("../", "backend/uploads", rutaFinal);

  fs.unlink(rutaArchivo, (error) => {
    if (error) {
      console.error(`Error al eliminar el archivo ${rutaFinal}: ${error}`);
    } else {
      console.log(`Archivo ${rutaFinal} eliminado correctamente`);
    }
  });
};

const updateTask = async (taskId, userId, taskData) => {
  const result = await Board.findByIdAndUpdate(
    taskId,
    {
      userId,
      ...taskData,
    },
    {
      new: true,
    }
  );
  return result;
};

export default { createTask, listTask, deleteTask, updateTask };
