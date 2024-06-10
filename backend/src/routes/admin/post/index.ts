import { Request, Response, Router } from "express";
import getAdminByEmail from "../../../services/getAdminByEmail";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import emailValidator from "../../../utils/emailValidator";

const route = Router();

route.post("/admin", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .send({ message: "email or password is not valid." });
    }

    if (!emailValidator(email)) {
      return res.status(400).send({ message: "Email is not valid." });
    }

    if (password.length < 3) {
      return res
        .status(400)
        .send({ message: "Password must be at least 6 characters long." });
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

    const token = jwt.sign({ _id, email }, "secret", { expiresIn: "1d" });

    return res.send({ token });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});

export default route;
