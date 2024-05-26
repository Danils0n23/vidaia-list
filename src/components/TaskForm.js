import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled-components for enhanced styling
const PageContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const AddTaskButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

// Componente para exibir o título da tarefa com cor dinâmica com base na prioridade
const TaskTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => {
    switch (props.priority) {
      case 'low':
        return '#00bfff'; // Azul para baixa prioridade
      case 'medium':
        return '#ffbf00'; // Amarelo para média prioridade
      case 'high':
        return '#ff4500'; // Laranja para alta prioridade
      default:
        return '#333'; // Cor padrão para outras prioridades
    }
  }};
`;

const TaskItem = ({ task, onToggleComplete }) => {
  const { id, title, priority, completed } = task;

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={() => onToggleComplete(id)} />
      <TaskTitle priority={priority}>{title}</TaskTitle>
    </div>
  );
};

const TaskList = ({ tasks, onToggleComplete }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} />
      ))}
    </div>
  );
};

const HomePage = ({ onToggleComplete }) => {
  // Array de tarefas dinâmicas
  const tasks = [
    { id: 1, title: 'Fazer compras', priority: 'low', completed: false },
    { id: 2, title: 'Estudar React', priority: 'medium', completed: true },
    { id: 3, title: 'Fazer exercícios', priority: 'high', completed: false },
  ];

  return (
    <PageContainer>
      <Title>Gerencie Suas Tarefas</Title>
      <TaskList tasks={tasks} onToggleComplete={onToggleComplete} />
      <Link to="/create">
        <AddTaskButton>Adicionar Tarefa</AddTaskButton>
      </Link>
    </PageContainer>
  );
};

export default HomePage;
