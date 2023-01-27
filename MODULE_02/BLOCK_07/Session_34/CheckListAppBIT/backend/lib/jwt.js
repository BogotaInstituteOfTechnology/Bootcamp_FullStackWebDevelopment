import jwt from "jsonwebtoken";

const generateJwt = (data) => {
  let jwToken = "";
  try {
    return jwt.sign(
      {
        _id: data._id,
        email: data.email,
      },
      process.env.CLTOKEN23
    );
  } catch (e) {
    return jwToken;
  }
};

export default { generateJwt };
