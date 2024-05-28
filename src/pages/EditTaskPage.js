import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditTaskPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('BAIXA');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_VIDAIA}/v1/task/${id}`;
        const response = await axios.get(apiUrl);
        const task = response.data?.task;
        setTitle(task.title);
        setDescription(task.description);
        setDueDate(task.completion_date);
        setPriority(task.priority);
        setLoading(false); // Indicate that data has been loaded
      } catch (error) {
        console.error('Erro ao buscar tarefa:', error);
      }
    };
  
    fetchTask();
  }, [id]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = {
      title,
      description,
      completion_date: dueDate,
      priority
    };

    try {
      const apiUrl = `${process.env.REACT_APP_VIDAIA}/v1/task/${id}`;
      await axios.put(apiUrl, updatedTask);
      navigate('/');
    } catch (error) {
      console.error('Erro ao editar tarefa:', error);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

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
            <option value="ALTA">Alta</option>
            <option value="MEDIA">Média</option>
            <option value="BAIXA">Baixa</option>
          </select>
        </label>
        <div className='button-container'>
          <button type="submit">Salvar Alterações</button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskPage;
