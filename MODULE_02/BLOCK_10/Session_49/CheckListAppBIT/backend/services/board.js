import Board from "../models/board.js";

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

export default { createTask, listTask };
