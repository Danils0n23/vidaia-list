import React, { useState } from 'react';
import styled from 'styled-components';
import { BsPencilSquare, BsTrash, BsEye } from 'react-icons/bs'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

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
  max-width: 600px; 
  width: 80%;
  position: relative;
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

  const handleDeleteClick = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_VIDAIA}/v1/task/${task.id}`;
      await axios.delete(apiUrl);
      console.log('Tarefa excluída:', task.id);
      // Atualizar a lista de tarefas após a exclusão
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
  
    return formattedDate;
  };

  return (
    <>
      <TaskContainer>
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{ formatDate(task.completion_date) }</p>
          <p>{task.priority}</p>
        </div>
        <IconsContainer>
          <Link to={`/edit/${task.id}`}>
            <BsPencilSquare size={24} color="#007bff" />
          </Link>
          <Link to={`/delete/${task.id}`}>
            <BsTrash size={24} color="#dc3545" />
          </Link>
          <BsEye size={24} color="#28a745" onClick={handleModalOpen} />
        </IconsContainer>
      </TaskContainer>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleModalClose}>X</CloseButton>
            <h2>{task.title}</h2>
            <p>Descrição: {task.description}</p>
            <p>Data de Conclusão:  {formatDate(task.completion_date) }</p>
            <p>Prioridade: {task.priority}</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default TaskItem;
