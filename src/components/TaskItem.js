// src/components/TaskItem.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TaskContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const TaskItem = ({ task }) => {
  return (
    <TaskContainer>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.dueDate}</p>
        <p>{task.priority}</p>
      </div>
      <div>
        <Link to={`/edit/${task.id}`}>Editar</Link>
        <Link to={`/delete/${task.id}`}>Excluir</Link>
      </div>
    </TaskContainer>
  );
};

export default TaskItem;
