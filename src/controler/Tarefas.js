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

//selecionar tabela
export async function selectTarefas() {
  try {
    const db = await openDb();
    const tarefas = await db.all("SELECT * FROM Tarefas");
    return tarefas;
  } catch (err) {
    console.error("Erro ao buscar tarefas:", err.message);
    throw err;
  }
}

// Seleciona uma tarefa específica por ID
export async function selectTarefaById(id) {
  try {
    const db = await openDb();
    const tarefa = await db.get("SELECT * FROM Tarefas WHERE id = ?", [id]);
    return tarefa;
  } catch (err) {
    console.error("Erro ao buscar tarefa por ID:", err.message);
    throw err;
  }
}

// Insere uma nova tarefa
export async function insertTarefas(tarefas) {
  try {
    const db = await openDb();
    const dataAtual = new Date().toISOString().split("T")[0];
    await db.run(
      "INSERT INTO Tarefas (titulo, descricao, status, data_de_criacao) VALUES (?, ?, ?, ?)",
      [tarefas.titulo, tarefas.descricao, tarefas.status, dataAtual] // Usa a data atual
    );
    console.log("Tarefa inserida com sucesso.");
  } catch (err) {
    console.error("Erro ao inserir tarefa:", err.message);
    throw err;
  }
}

// Atualiza uma tarefa existente
export async function updateTarefa(id, tarefas) {
  try {
    const db = await openDb();

    // Verifica se a tarefa existe
    const tarefaExistente = await db.get(
      "SELECT id FROM Tarefas WHERE id = ?",
      [id]
    );
    if (!tarefaExistente) {
      throw new Error(`Tarefa com ID ${id} não encontrada.`);
    }

    await db.run(
      "UPDATE Tarefas SET titulo = ?, descricao = ?, status = ? WHERE id = ?",
      [tarefas.titulo, tarefas.descricao, tarefas.status, id]
    );
    console.log(`Tarefa com ID ${id} atualizada com sucesso.`);
  } catch (err) {
    console.error("Erro ao atualizar tarefa:", err.message);
    throw err; // Lança o erro para ser tratado no chamador
  }
}

// Exclui uma tarefa
export async function deleteTarefa(id) {
  try {
    const db = await openDb();
    await db.run("DELETE FROM Tarefas WHERE id = ?", [id]);
    console.log(`Tarefa com ID ${id} excluída com sucesso.`);
  } catch (err) {
    console.error("Erro ao excluir tarefa:", err.message);
    throw err;
  }
}
