import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import HomePage from './pages/HomePage';
import CreateTaskPage from './pages/CreateTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import DeleteTaskPage from './pages/DeleteTaskPage';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage tasks={tasks} />} />
          <Route path="/create" element={<CreateTaskPage onCreate={addTask} />} />
          <Route path="/edit/:id" element={<EditTaskPage tasks={tasks} onEdit={editTask} />} />
          <Route path="/delete/:id" element={<DeleteTaskPage tasks={tasks} onDelete={deleteTask} />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
