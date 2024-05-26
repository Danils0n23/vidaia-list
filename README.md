# Gerenciador de Tarefas

## Objetivo do Projeto

Desenvolver uma aplicação web para gerenciar tarefas, permitindo ao usuário criar, editar, excluir e visualizar uma lista de tarefas existentes.

## Tecnologias Utilizadas

- **Frontend:**
  - React
  - Styled-Components
- **Backend:**
  - Node.js
  - ExpressJS
- **Banco de Dados:**
  - PostgreSQL
  - ORM: Prisma (preferencialmente), Knex, Sequelize ou TypeORM

## Descrição do Projeto

A aplicação será uma lista de tarefas simples, com as seguintes funcionalidades:

### Funcionalidades

1. **Página Inicial:**
   - Exibe uma lista de todas as tarefas existentes.
   - Permite que o usuário visualize e marque as tarefas como concluídas.
   - Inclui um botão "Adicionar Tarefa" que leva o usuário à página de criação de tarefas.

2. **Página de Criação de Tarefas:**
   - Permite ao usuário adicionar uma nova tarefa à lista.
   - Inclui um formulário com campos para:
     - Título da tarefa
     - Descrição
     - Data de conclusão
     - Prioridade (alta, média, baixa)

3. **Página de Edição de Tarefas:**
   - Permite ao usuário editar uma tarefa existente.
   - Inclui um formulário com os mesmos campos da página de criação de tarefas.

4. **Página de Exclusão de Tarefas:**
   - Permite ao usuário excluir uma tarefa existente da lista.

5. **API RESTful:**
   - O backend fornece endpoints para todas as operações CRUD (Create, Read, Update, Delete) nas tarefas.
   - É possível criar, ler, atualizar e excluir tarefas por meio da API.

## Requisitos Técnicos

- A aplicação deve ser desenvolvida usando:
  - **Frontend:** React e Styled-Components para a interface do usuário.
  - **Backend:** Node.js, ExpressJS, PostgreSQL e uma ORM (preferencialmente Prisma, mas pode ser Knex, Sequelize ou TypeORM).
- O projeto deve ser acessível online, mas o deploy pode ser feito como achar melhor, não necessitando subir os contêineres.

## Extensões do Projeto

O projeto pode ser estendido com outras funcionalidades, tais como:
- Autenticação de usuários e permissões de acesso.
- Notificações por e-mail.
- Integração com outras ferramentas, como o Google Agenda.

Ponto extra para o uso de Docker (e Docker Compose) para empacotar e distribuir a aplicação.

## Estrutura do Projeto

```bash
.
├── backend
│   ├── controllers
│   │   └── taskController.js
│   ├── models
│   │   └── Task.js
│   ├── routes
│   │   └── taskRoutes.js
│   ├── app.js
│   └── server.js
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   └── TaskItem.js
│   │   ├── pages
│   │   │   ├── HomePage.js
│   │   │   ├── CreateTaskPage.js
│   │   │   ├── EditTaskPage.js
│   │   │   └── DeleteTaskPage.js
│   │   ├── App.js
│   │   ├── GlobalStyles.js
│   │   └── index.js
├── README.md
└── package.json
```

### Backend

1. **app.js**: Configurações e middlewares do Express.
2. **server.js**: Inicializa o servidor.
3. **controllers/taskController.js**: Lógica das operações CRUD para as tarefas.
4. **models/Task.js**: Definição do modelo de tarefa usando a ORM escolhida.
5. **routes/taskRoutes.js**: Define as rotas da API.

### Frontend

1. **public/index.html**: Arquivo HTML principal.
2. **src/components/TaskItem.js**: Componente para exibir uma tarefa.
3. **src/pages/HomePage.js**: Página inicial que exibe a lista de tarefas.
4. **src/pages/CreateTaskPage.js**: Página para criação de tarefas.
5. **src/pages/EditTaskPage.js**: Página para edição de tarefas.
6. **src/pages/DeleteTaskPage.js**: Página para exclusão de tarefas.
7. **src/App.js**: Componente principal que define as rotas.
8. **src/GlobalStyles.js**: Estilos globais da aplicação.
9. **src/index.js**: Ponto de entrada do React.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e configurado

### Backend

1. Navegue até o diretório `backend` e instale as dependências:
   ```bash
   cd backend
   npm install
   ```
2. Configure o banco de dados no arquivo `.env`:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/todoapp
   ```
3. Rode as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```
4. Inicie o servidor:
   ```bash
   npm start
   ```

### Frontend

1. Navegue até o diretório `frontend` e instale as dependências:
   ```bash
   cd frontend
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

### Docker (Opcional)

Se desejar usar Docker, crie os arquivos `Dockerfile` e `docker-compose.yml` para o frontend e backend, e inicie os contêineres usando Docker Compose.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Para isso, faça um fork deste repositório, crie uma nova branch com suas alterações e abra um pull request.

---

**Observação:** Este projeto é um exemplo simples de gerenciamento de tarefas e pode ser expandido conforme necessário.