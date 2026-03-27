# 📝 API REST de Gerenciamento de Tarefas

## 🎯 O Problema
O gerenciamento de rotinas em aplicações web muitas vezes carece de um back-end simples, rápido de configurar e que suporte conexões seguras sem depender de infraestruturas complexas logo de cara. Organizar o fluxo de criar, ler, atualizar e excluir atividades (CRUD) de forma padronizada é essencial para não perder o controle das informações.

## 💡 A Solução
Este projeto fornece uma API REST direta e funcional construída em Node.js para o gerenciamento de tarefas. Ela atua como um motor de persistência local utilizando SQLite, com suporte nativo a requisições seguras via HTTPS e regras de CORS já configuradas, pronta para ser consumida por qualquer front-end.

## 🛠️ Tecnologias Utilizadas
* **Linguagem:** JavaScript (Node.js v16+)
* **Framework:** Express
* **Banco de Dados:** SQLite (persistência em arquivo local `database.db`)
* **Segurança e Arquitetura:** Módulos nativos `https` e `fs` para manipulação de certificados SSL.

## 🚀 Como testar localmente
1. Clone este repositório: `git clone https://github.com/jose-augusto22/API-REST.git`
2. Acesse o diretório do projeto: `cd api-rest-tarefas`
3. Instale as dependências com o gerenciador de pacotes: `npm install`
4. (Opcional) Adicione seus certificados SSL (`code.crt` e `code.key`) na pasta `src/SSL/`.
5. Execute o comando no terminal: `npm start`
6. O servidor estará ativo. Você pode realizar requisições nas rotas `/tasks` (GET, POST, PUT, DELETE) acessando `http://localhost:3000` ou `https://localhost:3001`.

---
*Projeto base de estudos de APIs REST. Sinta-se à vontade para fazer um fork e abrir um Pull Request com melhorias!*
