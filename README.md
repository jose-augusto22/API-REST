📝 Task Management API RESTUma API REST robusta e simples para gerenciamento de tarefas, desenvolvida para demonstrar conceitos de CRUD, persistência local e segurança com protocolos de transferência.✨ FuncionalidadesCRUD Completo: Criação, leitura, atualização e exclusão de tarefas.Dual Protocol: Suporte nativo para conexões HTTP (porta 3000) e HTTPS (porta 3001).Persistência: Utilização de SQLite para armazenamento leve e eficiente.CORS: Já configurado para permitir integrações com front-ends variados.📂 Estrutura do ProjetoPlaintextAPI-REST/
├── src/
│   ├── controller/   # Lógica de negócio e manipulação de rotas
│   ├── SSL/          # Certificados para conexão segura (HTTPS)
│   ├── app.js        # Entry point da aplicação
│   └── configDB.js   # Setup do banco de dados SQLite
├── database.db       # Arquivo de dados (gerado automaticamente)
├── package.json      # Dependências e scripts
└── .gitignore        # Arquivos ignorados pelo controle de versão
🚀 Como IniciarPré-requisitosNode.js (v16 ou superior)npmInstalaçãoClone o repositório:Bashgit clone https://github.com/jose-augusto22/API-REST.git
cd api-rest-tarefas
Instale as dependências:Bashnpm install
Configuração SSL (Opcional):Para utilizar HTTPS, insira seus arquivos code.crt e code.key na pasta src/SSL/.Rodar a aplicação:Bashnpm start
🛠️ Documentação da APIEndpointsMétodoEndpointDescriçãoGET/tasksRetorna todas as tarefas cadastradasGET/tasks/:idRetorna os detalhes de uma única tarefaPOST/tasksCria uma nova tarefaPUT/tasks/:idAtualiza os dados de uma tarefa existenteDELETE/tasks/:idRemove uma tarefa do sistemaExemplo de Payload (POST/PUT)JSON{
  "titulo": "Estudar Node.js",
  "descricao": "Aprender sobre APIs REST e SSL",
  "status": 0
}
📦 Tecnologias UtilizadasExpress: Framework web minimalista.SQLite/SQLite3: Banco de dados relacional embutido.CORS: Middleware para segurança de requisições.FS & HTTPS: Módulos nativos para manipulação de arquivos e segurança.🤝 ContribuiçãoFaça um Fork do projeto.Crie uma Branch para sua feature (git checkout -b feature/nova-feature).Dê um Commit nas suas alterações (git commit -m 'Adiciona nova feature').Dê um Push para a Branch (git push origin feature/nova-feature).Abra um Pull Request.Desenvolvido por José Augusto
