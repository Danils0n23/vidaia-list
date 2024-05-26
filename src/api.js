// api.js

// Função para buscar as tarefas do armazenamento local
const getTasksFromLocalStorage = () => {
  const tasksData = localStorage.getItem('tasksData');
  return tasksData ? JSON.parse(tasksData) : [];
};

// Função para atualizar o armazenamento local com as novas tarefas
const updateLocalStorage = (tasks) => {
  localStorage.setItem('tasksData', JSON.stringify(tasks));
};

// Função para adicionar uma nova tarefa
const addTask = (newTask) => {
  const tasks = getTasksFromLocalStorage();
  const updatedTasks = [...tasks, newTask];
  updateLocalStorage(updatedTasks);
  return newTask;
};

export { addTask };
