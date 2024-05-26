import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalSyles'; // Verifique se o caminho está correto

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);