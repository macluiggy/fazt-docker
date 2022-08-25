//@ts-check
import express, { Request, Response } from "express";
import db from "./db";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.get("/", (_req: Request, _res: Response) => {
  _res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  db.runMigrations();
});
