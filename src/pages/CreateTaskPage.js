import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateTaskPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('BAIXA');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      completion_date: dueDate,
      priority
    };

    try {
      const apiUrl = `${process.env.REACT_APP_VIDAIA}/v1/task`;
      await axios.post(apiUrl, newTask); // Adiciona a nova tarefa usando a API real
      navigate('/');
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  return (
    <div>
      <h1>Adicionar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Descrição:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Data de Conclusão:
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </label>
        <label>
          Prioridade:
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="BAIXA">Baixa</option>
            <option value="MEDIA">Média</option>
            <option value="ALTA">Alta</option>
          </select>
        </label>
        <div className='button-container'>
          <button type="submit">Adicionar Tarefa</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskPage;
