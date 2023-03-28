import user from "../models/user.js";

const registerUser = async (userData) => {
  const userSchema = new user({
    email: userData.email.toLowerCase(),
    password: userData.password,
  });

  const result = await userSchema.save();
  return result;
};

const getUserByEmail = async (email) => {
  const result = await user.findOne({
    email: email.toLowerCase(),
  });
  return result;
};

const getUserById = async (id) => {
  const result = await user.findById({
    _id: id,
  });
  return result;
};


export default { registerUser, getUserByEmail, getUserById };
