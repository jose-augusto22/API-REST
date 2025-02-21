import { openDb } from "../configDB.js";

export default async function createTable() {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS Tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, descricao TEXT, status INTEGER, data_de_criação TEXT)"
    );
  });
}
export async function insertTarefas(tarefas) {
  openDb().then((db) => {
    db.run(
      "INSERT INTO Tarefas (titulo, descricao, status, data_de_criacao) VALUES (?, ?, ?, ?)",
      [
        tarefas.titulo,
        tarefas.descricao,
        tarefas.status,
        tarefas.data_de_criacao,
      ]
    );
  });
}
