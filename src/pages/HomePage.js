import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskList from "../components/TaskList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const HomePage = ({ toggleComplete }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_VIDAIA}/v1/tasks`);
        if (response.data && Array.isArray(response.data.tasks)) {
          setTasks(response.data.tasks);
        } else {
          console.error('Dados de resposta não são um array:', response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };

    fetchTasks();
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
