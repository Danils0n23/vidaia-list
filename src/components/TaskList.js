// src/components/TaskList.js
import React from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
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
