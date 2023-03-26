import Board from "../models/board.js";

const createTask = async (req, res) => {
  try {
    const url = `${req.protocol}://${req.get("host")}`;

    const imageUrl = req.file ? `${url}/uploads/${req.file.filename}` : null;

    const board = new Board({
      user_id: req.user._id,
      name: req.body.name,
      status: "to-do",
      image_url: imageUrl,
      description: req.body.description,
    });

    const result = await board.save();
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error interno del servidor" });
  }
};

export default { createTask };
