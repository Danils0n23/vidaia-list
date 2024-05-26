// EditTaskPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditTaskPage = ({ tasks, editTask }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');

  useEffect(() => {
    const task = tasks.find(task => task.id === parseInt(id));
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
      setPriority(task.priority);
    }
  }, [tasks, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(parseInt(id), { title, description, dueDate, priority });
    navigate('/');
  };

  return (
    <div>
      <h1>Editar Tarefa</h1>
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
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditTaskPage;
