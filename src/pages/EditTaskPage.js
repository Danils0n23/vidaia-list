import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditTaskPage = ({ tasks, onEdit }) => {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === Number(id));
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
  const [priority, setPriority] = useState(task ? task.priority : 'low');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = { ...task, title, description, dueDate, priority };
    onEdit(updatedTask);
    navigate('/');
  };

  return (
    <FormContainer>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Update Task</button>
      </form>
    </FormContainer>
  );
};

export default EditTaskPage;
