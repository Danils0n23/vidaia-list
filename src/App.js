// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateTaskPage from './pages/CreateTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import DeleteTaskPage from './pages/DeleteTaskPage';


const App = () => {
  const [tasks, setTasks] = useState([]);

  // Função para adicionar uma nova tarefa à lista de tarefas
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Função para editar uma tarefa existente na lista de tarefas
  const editTask = (id, updatedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Função para excluir uma tarefa da lista de tarefas
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage tasks={tasks} />} />
        <Route path="/create" element={<CreateTaskPage addTask={addTask} />} />
        <Route path="/edit/:id" element={<EditTaskPage tasks={tasks} editTask={editTask} />} />
        <Route path="/delete/:id" element={<DeleteTaskPage tasks={tasks} deleteTask={deleteTask} />} />

      </Routes>
    </Router>
  );
};

export default App;
