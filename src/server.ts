import express, { Request, Response } from "express";
import itemRouter from "./routes/items.routes";
import { connectDB } from "./utils/database";
import { logger } from "./middlewares/logger";

const app = express();
const port = 8080;

connectDB();

app.use(express.json());

app.use(logger)

app.use("/items", itemRouter);

app.listen(port, () => {
  console.log("app funcionando en http://localhost:" + port);
});
