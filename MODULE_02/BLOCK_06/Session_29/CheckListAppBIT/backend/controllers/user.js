import jwt from "../lib/jwt.js";
import userService from "../services/user.js";

const registerUser = async (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).send({ response: "Datos incompletos" });

  const existingUser = await userService.getUserByEmail(req.body.email);
  if (existingUser)
    return res.status(400).send({ response: "El usuario ya existe" });

  const user = await userService.registerUser(req.body);
  if (!user) return res.status(500).send({ response: "Error en el registro" });

  const CLTOKEN23 = jwt.generateJwt(user);
  return !CLTOKEN23
    ? res.status(500).send({ response: "Error registrando el usuario" })
    : res.status(200).send({ CLTOKEN23 });
};

export default { registerUser };
