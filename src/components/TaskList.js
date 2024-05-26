import React from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; /* Adiciona um espaçamento entre os itens */
`;

const TaskList = ({ tasks }) => {
  return (
    <ListContainer>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ListContainer>
  );
};

export default TaskList;
