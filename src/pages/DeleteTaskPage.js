import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteTaskPage = ({ deleteTask }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(true);

  const handleDelete = () => {
    deleteTask(parseInt(id));
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirmação de Exclusão</h2>
            <p>Tem certeza de que deseja excluir esta tarefa?</p>
            <button onClick={handleDelete}>Sim, excluir</button>
            <button onClick={handleCancel}>Cancelar</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
        }

        .modal-content {
          background-color: #fefefe;
          padding: 20px;
          border: 1px solid #888;
          width: 300px;
          text-align: center;
        }

        .modal-content button {
          margin: 10px;
        }
      `}</style>
    </>
  );
};

export default DeleteTaskPage;
