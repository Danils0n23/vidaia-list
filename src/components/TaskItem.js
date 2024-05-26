import React from 'react';
import styled from 'styled-components';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Importe o Link do React Router

const TaskContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const TaskItem = ({ task }) => {
  const handleEditClick = () => {
    // Lógica para lidar com o clique no ícone de edição
    console.log('Editar tarefa:', task.id);
  };

  const handleDeleteClick = () => {
    // Lógica para lidar com o clique no ícone de exclusão
    console.log('Excluir tarefa:', task.id);
  };

  return (
    <TaskContainer>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.dueDate}</p>
        <p>{task.priority}</p>
      </div>
      <IconsContainer>
        {/* Link para a página de edição com o ícone de lápis */}
        <Link to={`/edit/${task.id}`}>
          <BsPencilSquare size={24} color="#007bff" onClick={handleEditClick} />
        </Link>
        {/* Link para a página de exclusão com o ícone de lixeira */}
        <Link to={`/delete/${task.id}`}>
          <BsTrash size={24} color="#dc3545" onClick={handleDeleteClick} />
        </Link>
      </IconsContainer>
    </TaskContainer>
  );
};

export default TaskItem;
