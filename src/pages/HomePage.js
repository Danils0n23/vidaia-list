import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskList from "../components/TaskList";
import tasksData from '../data/taskData.json';

const HomePage = ({ toggleComplete }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Carrega os dados do arquivo JSON quando o componente é montado
    setTasks(tasksData);
  }, []);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TaskList tasks={tasks} toggleComplete={toggleComplete} />
      <Link to="/create">Adicionar Tarefa</Link>
    </div>
  );
};

export default HomePage;
