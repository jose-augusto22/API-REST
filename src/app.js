import express from "express";
import { createTable, insertTarefas } from "./controler/Tarefas.js";

const app = express();
app.use(express.json());

// Cria a tabela ao iniciar o servidor
createTable();

// Rota de teste
app.get("/", (req, res) => {
  res.send("Olá Mundo");
});

// Rota para inserir uma nova tarefa
app.post("/tasks", async (req, res) => {
  try {
    await insertTarefas(req.body);
    res.json({
      statusCode: 200,
      message: "Tarefa inserida com sucesso.",
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: "Erro ao inserir tarefa.",
      error: err.message,
    });
  }
});

// Inicia o servidor
app.listen(3000, () => console.log("API rodando na porta 3000."));
