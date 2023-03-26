import mongoose from "mongoose";

const dbConnection = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB_CONNECTION);
    console.log("Connection with MongoDB: Succesfull");
  } catch (e) {
    console.log("Error connecting to MongoDB");
  }
};

export default { dbConnection };
