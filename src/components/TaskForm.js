import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: #555;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 12px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const TaskForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, dueDate, priority });
    navigate('/');
  };

  return (
    <FormContainer>
      <Title>Adicionar Tarefa</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Título:
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Label>
        <Label>
          Descrição:
          <TextArea value={description} onChange={(e) => setDescription(e.target.value)} />
        </Label>
        <Label>
          Data de Conclusão:
          <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </Label>
        <Label>
          Prioridade:
          <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
          </Select>
        </Label>
        <Button type="submit">Adicionar Tarefa</Button>
      </Form>
    </FormContainer>
  );
};

export default TaskForm;
