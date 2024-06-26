import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    padding: 20px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 20px;
    color: #333;
  }

  h1 {
    text-align: center;
  }

  input, textarea, select, button {
    font-family: inherit;
  }

  form {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  input, textarea, select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  input:focus, textarea:focus, select:focus {
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }

   .button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }


  button {
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007BFF;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .top-left-link {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007BFF;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}

.top-left-link {
  position: absolute;
  top: 10px;
  right: 10px;
  margin-top:30px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, transform 0.3s;
}

.top-left-link:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .top-left-link {
      top: 5px;
      right: 5px;
      padding: 8px;
      font-size: 14px;
  }
}

@media (max-width: 480px) {
  .top-left-link {
      top: 3px;
      right: 3px;
      padding: 6px;
      font-size: 12px;
  }
}

`;

export default GlobalStyles;
