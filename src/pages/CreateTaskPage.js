import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CreateTaskPage = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title, description, dueDate, priority };
    onCreate(newTask);
    navigate('/');
  };

  return (
    <FormContainer>
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </FormContainer>
  );
};

export default CreateTaskPage;
