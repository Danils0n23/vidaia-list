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

  input, textarea, select, button {
    font-family: inherit;
  }
`;

export default GlobalStyles;
