import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 14px;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #FFFFFF;
    font-weight: 300;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none; 
    padding: 0;  
    margin: 0;  
  }

  li {
    padding: 0;   
    margin: 0;        
  }
`;
