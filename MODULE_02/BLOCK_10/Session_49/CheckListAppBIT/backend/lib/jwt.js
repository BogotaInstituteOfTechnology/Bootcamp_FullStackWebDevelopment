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

const verifyToken = (token) => {
  let verify = "";
  try {
    return (verify = jwt.verify(token, process.env.CLTOKEN23));
  } catch (e) {
    return verify;
  }
};

export default { generateJwt, verifyToken  };
