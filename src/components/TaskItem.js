import React, { useState } from 'react';
import styled from 'styled-components';
import { BsPencilSquare, BsTrash, BsEye } from 'react-icons/bs'; 
import { Link } from 'react-router-dom';

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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  max-width: 600px; /* Aumenta o tamanho máximo da modal */
  width: 80%; /* Define a largura da modal */
  position: relative; /* Permite posicionar o botão "Close" */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: black;

`;

const TaskItem = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDeleteClick = () => {
    console.log('Excluir tarefa:', task.id);
    // Adicione aqui a lógica para excluir a tarefa
  };

  return (
    <>
      <TaskContainer>
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.dueDate}</p>
          <p>{task.priority}</p>
        </div>
        <IconsContainer>
          <Link to={`/edit/${task.id}`}>
            <BsPencilSquare size={24} color="#007bff" />
          </Link>
          <BsTrash size={24} color="#dc3545" onClick={handleDeleteClick} />
          <BsEye size={24} color="#28a745" onClick={handleModalOpen} />
        </IconsContainer>
      </TaskContainer>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleModalClose}>X</CloseButton>
            <h2>{task.title}</h2>
            <p>Descrição: {task.description}</p>
            <p>Data de Conclusão: {task.dueDate}</p>
            <p>Prioridade: {task.priority}</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default TaskItem;
