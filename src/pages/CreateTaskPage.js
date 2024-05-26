import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../api';

const CreateTaskPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      priority
    };
    addTask(newTask); // Adiciona a nova tarefa no arquivo JSON
    navigate('/');
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
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
          </select>
        </label>
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </div>
  );
};

export default CreateTaskPage;