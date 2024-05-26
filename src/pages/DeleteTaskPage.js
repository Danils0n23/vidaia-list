import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DeleteTaskPage = ({ tasks, onDelete }) => {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === Number(id));
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(task.id);
    navigate('/');
  };

  return (
    <DeleteContainer>
      <h1>Delete Task</h1>
      {task ? (
        <>
          <p>Are you sure you want to delete the task: {task.title}?</p>
          <button onClick={handleDelete}>Yes, Delete</button>
        </>
      ) : (
        <p>Task not found</p>
      )}
    </DeleteContainer>
  );
};

export default DeleteTaskPage;
