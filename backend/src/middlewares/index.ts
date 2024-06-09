import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const tokenAuthorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      res.status(401).send({ message: "Login Required" });
    }

    const token = authorization?.split(" ")[1] || "";

    if (!token) {
      res.status(401).send({ message: "Login Required" });
    }
    jwt.verify(token, "secret");

    next();
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

export default tokenAuthorization;
