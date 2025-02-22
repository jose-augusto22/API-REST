import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";
import {
  createTable,
  insertTarefas,
  updateTarefa,
  selectTarefas,
  selectTarefaById,
  deleteTarefa,
} from "./controler/Tarefas.js";

const app = express();
app.use(express.json());
app.use(cors());

// Cria a tabela ao iniciar o servidor
createTable();

// Rota de teste
app.get("/", (req, res) => {
  res.send("API OK");
});

//Rota para selecionar
app.get("/tasks", async (req, res) => {
  try {
    const tarefas = await selectTarefas();
    res.json({
      statusCode: 200,
      tarefas: tarefas,
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: "Erro ao buscar tarefas.",
      error: err.message,
    });
  }
});

// Rota para selecionar uma tarefa
app.get("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const tarefa = await selectTarefaById(id);
    if (tarefa) {
      res.json({
        statusCode: 200,
        tarefa: tarefa,
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        message: `Tarefa com ID ${id} não encontrada.`,
      });
    }
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: "Erro ao buscar tarefa por ID.",
      error: err.message,
    });
  }
});

// Rota para inserir uma nova tarefa
app.post("/tasks", async (req, res) => {
  try {
    // Validação básica
    if (!req.body.titulo || !req.body.status) {
      return res.status(400).json({
        statusCode: 400,
        message: "Título e status são obrigatórios.",
      });
    }

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

// Rota para atualizar uma tarefa existente
app.put("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await updateTarefa(id, req.body);
    res.json({
      statusCode: 200,
      message: `Tarefa com ID ${id} atualizada com sucesso.`,
    });
  } catch (err) {
    if (err.message.includes("não encontrada")) {
      res.status(404).json({
        statusCode: 404,
        message: err.message,
      });
    } else {
      res.status(500).json({
        statusCode: 500,
        message: "Erro ao atualizar tarefa.",
        error: err.message,
      });
    }
  }
});

// Rota para excluir uma tarefa
app.delete("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await deleteTarefa(id);
    res.json({
      statusCode: 200,
      message: `Tarefa com ID ${id} excluída com sucesso.`,
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: "Erro ao excluir tarefa.",
      error: err.message,
    });
  }
});

// Inicia o servidor
app.listen(3000, () => console.log("API rodando na porta 3000."));

https
  .createServer(
    {
      cert: fs.readFileSync("./src/SSL/code.crt"),
      key: fs.readFileSync("./src/SSL/code.key"),
    },
    app
  )
  .listen(3001, () => console.log("Rodando em HTTPs"));
