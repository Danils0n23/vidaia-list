// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TaskList from '../components/TaskList';

const PageContainer = styled.div`
  padding: 20px;
`;

const HomePage = ({ tasks, onToggleComplete }) => {
  return (
    <PageContainer>
      <h1>Lista de Tarefas</h1>
      <TaskList tasks={tasks} onToggleComplete={onToggleComplete} />
      <Link to="/create">
        <button>Adicionar Tarefa</button>
      </Link>
    </PageContainer>
  );
};

export default HomePage;
