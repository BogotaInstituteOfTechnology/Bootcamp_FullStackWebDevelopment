import jwt from "../lib/jwt.js";

const auth = async (req, res, next) => {
  let token = req.header("Authorization");
  if (!token)
    return res.status(400).send({ response: "Usuario no autenticado" });

  token = token.split(" ")[1];
  if (!token)
    return res.status(400).send({ response: "Usuario no autorizado" });

  try {
    req.user = jwt.verifyToken(token);
    next();
  } catch (e) {
    return res.status(400).send({ response: "Usuario no autorizado" });
  }
};

export default auth ;