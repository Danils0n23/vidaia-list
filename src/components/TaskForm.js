import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

const CreateTaskPage = ({ onCreate }) => {
  const navigate = useNavigate();

  const handleCreate = (task) => {
    const newTask = { id: Date.now(), ...task };
    onCreate(newTask);
    navigate('/');
  };

  return (
    <div>
      <h1>Create Task</h1>
      <TaskForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateTaskPage;
