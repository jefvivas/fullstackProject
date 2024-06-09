import express from "express";
import routes from "./routes/router";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const port = 1111;

mongoose
  .connect("mongodb://mongo/clients")
  .then(() => console.log("DB ONLINE"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
