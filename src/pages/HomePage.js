import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskList from "../components/TaskList";
import tasksData from '../data/taskData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


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
      <div>
      <Link to="/create" className="top-left-link">
      <FontAwesomeIcon icon={faPlus} />
    </Link>
    </div>
    </div>
  );
};

export default HomePage;
