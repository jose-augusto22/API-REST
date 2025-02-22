API REST de Gerenciamento de Tarefas

Esta é uma API REST simples para gerenciamento de tarefas, construída com Node.js, Express e SQLite. A API permite criar, ler, atualizar e excluir tarefas, além de suportar conexões HTTP e HTTPS.

Estrutura do Projeto
API REST/
├── node_modules/ # Dependências do projeto
├── src/ # Código-fonte da aplicação
│ ├── controller/ # Controladores (lógica de negócio)
│ │ └── Tarefas.js # Controlador de tarefas
│ ├── SSL/ # Certificados SSL
│ │ ├── code.crt # Certificado SSL
│ │ └── code.key # Chave privada SSL
│ ├── app.js # Ponto de entrada da aplicação
│ └── configDB.js # Configuração do banco de dados SQLite
├── .gitignore # Arquivos e pastas ignorados pelo Git
├── database.db # Banco de dados SQLite
├── package-lock.json # Versões exatas das dependências
└── package.json # Metadados e dependências do projeto

Requisitos
Node.js (v16 ou superior)

npm (gerenciador de pacotes do Node.js)

Instalação
Clone o repositório:
git clone https://github.com/jose-augusto22/API-REST/tree/f2a2eb863cf1b1e0316d2dd2d6c401e7b19f9249
cd api-rest-tarefas

Instale as dependências:
npm install

Configure os certificados SSL (opcional):

Coloque os arquivos code.crt e code.key na pasta src/SSL/.

Se não tiver certificados SSL, você pode gerar certificados autoassinados para desenvolvimento.

Inicie o servidor:
npm start

O servidor estará disponível em:

HTTP: http://localhost:3000

HTTPS: https://localhost:3001

Rotas da API
Listar todas as tarefas
GET /tasks

Resposta de sucesso:
{
"statusCode": 200,
"tarefas": [
{
"id": 1,
"titulo": "Fazer compras",
"descricao": "Comprar itens essenciais",
"status": 1,
"data_de_criacao": "2025-02-22" <-- data gerada no dia atual
}
]
}

Obter uma tarefa por ID
GET /tasks/:id

Resposta de sucesso:
{
"statusCode": 200,
"tarefa": {
"id": 1,
"titulo": "Fazer compras",
"descricao": "Comprar itens essenciais",
"status": 1,
"data_de_criacao": "2023-10-01"
}
}

Criar uma nova tarefa
POST /tasks

Corpo da requisição:
{
"titulo": "Estudar Node.js",
"descricao": "Aprender sobre APIs REST",
"status": 0
}

Resposta de sucesso:
{
"statusCode": 200,
"message": "Tarefa inserida com sucesso."
}

Atualizar uma tarefa existente
PUT /tasks/:id

Corpo da requisição:
{
"titulo": "Estudar Node.js e Express",
"descricao": "Aprofundar conhecimentos em APIs REST",
"status": 1
}

Resposta de sucesso:
{
"statusCode": 200,
"message": "Tarefa com ID 1 atualizada com sucesso."
}

Excluir uma tarefa
DELETE /tasks/:id

Resposta de sucesso:
{
"statusCode": 200,
"message": "Tarefa com ID 1 excluída com sucesso."
}

Dependências
express: Framework para criar o servidor HTTP/HTTPS.

sqlite: Biblioteca para interagir com o banco de dados SQLite.

cors: Middleware para habilitar CORS (Cross-Origin Resource Sharing).

https: Módulo nativo do Node.js para criar servidor HTTPS.

fs: Módulo nativo do Node.js para manipulação de arquivos.

Contribuição
Contribuições são bem-vindas! Siga os passos abaixo:

Faça um fork do projeto.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas mudanças (git commit -m 'Adiciona nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.
