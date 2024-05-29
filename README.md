# Gerenciador de Tarefas

## Objetivo do Projeto

Desenvolver uma aplicação web para gerenciar tarefas, permitindo ao usuário criar, editar, excluir e visualizar uma lista de tarefas existentes.

## Tecnologias Utilizadas

- **Frontend:**
  - React
  - Styled-Components

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

## Estrutura do Projeto

```bash
frontend
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── TaskItem.js
│   ├── pages
│   │   ├── HomePage.js
│   │   ├── CreateTaskPage.js
│   │   ├── EditTaskPage.js
│   │   └── DeleteTaskPage.js
│   ├── App.js
│   ├── GlobalStyles.js
│   └── index.js
├── README.md
└── package.json
```

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

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Para isso, faça um fork deste repositório, crie uma nova branch com suas alterações e abra um pull request.

---

**Observação:** Este projeto é um exemplo simples de gerenciamento de tarefas e pode ser expandido conforme necessário.
