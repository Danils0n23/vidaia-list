import React from 'react';
import styled from 'styled-components';
import { BsPencilSquare, BsTrash } from 'react-icons/bs'; // Importando os ícones do pacote react-icons/bs

const TaskContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Centraliza os ícones verticalmente */
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 10px; /* Espaçamento entre os ícones */
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
      <IconsContainer>
        {/* Ícone de editar com tamanho e cor personalizados */}
        <BsPencilSquare size={24} color="#007bff" />
        {/* Ícone de excluir com tamanho e cor personalizados */}
        <BsTrash size={24} color="#dc3545" />
      </IconsContainer>
    </TaskContainer>
  );
};

export default TaskItem;
