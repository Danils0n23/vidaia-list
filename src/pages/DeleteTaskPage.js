// DeleteTaskPage.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteTaskPage = ({ deleteTask }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    deleteTask(parseInt(id));
    navigate('/');
  };

  return (
    <div>
      <h1>Excluir Tarefa</h1>
      <p>Tem certeza de que deseja excluir esta tarefa?</p>
      <button onClick={handleDelete}>Confirmar Exclusão</button>
    </div>
  );
};

export default DeleteTaskPage;
