//import { openDb } from "./configDB.js";
import createTable from "./controler/Tarefas.js";
import insertTarefas from "./controler/Tarefas.js";

import express from "express";
const app = express();
app.use(express.json());

createTable();

app.get("/", (req, res) => {
  res.send("Olá Mundo");
});

app.post("/tasks", (req, res) => {
  insertTarefas(req.body);
  res.json({
    statusCode: 200,
  });
});

app.listen(3000, () => console.log("api rodando."));
