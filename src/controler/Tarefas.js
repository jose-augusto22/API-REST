import { openDb } from "../configDB.js";

// Cria a tabela (se não existir)
export async function createTable() {
  try {
    const db = await openDb();
    await db.exec(
      "CREATE TABLE IF NOT EXISTS Tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, descricao TEXT, status INTEGER, data_de_criacao TEXT)"
    );
    console.log("Tabela Tarefas criada ou já existente.");
  } catch (err) {
    console.error("Erro ao criar tabela:", err.message);
  }
}

// Insere uma nova tarefa
export async function insertTarefas(tarefas) {
  try {
    const db = await openDb();
    await db.run(
      "INSERT INTO Tarefas (titulo, descricao, status, data_de_criacao) VALUES (?, ?, ?, ?)",
      [
        tarefas.titulo,
        tarefas.descricao,
        tarefas.status,
        tarefas.data_de_criacao,
      ]
    );
    console.log("Tarefa inserida com sucesso.");
  } catch (err) {
    console.error("Erro ao inserir tarefa:", err.message);
  }
}
