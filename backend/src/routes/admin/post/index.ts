import { Request, Response, Router } from "express";
import getAdminByEmail from "../../../services/getAdminByEmail";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const route = Router();

route.post("/admin", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .send({ message: "email or password is not valid." });
    }

    const user = await getAdminByEmail(email);
    if (!user) {
      return res.status(400).send({ message: "Admin not found." });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res
        .status(401)
        .send({ message: "email or password is not valid." });
    }

    const { _id } = user;

    const token = jwt.sign({ _id, email }, password, { expiresIn: "1d" });

    return res.send({ token });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});

export default route;
