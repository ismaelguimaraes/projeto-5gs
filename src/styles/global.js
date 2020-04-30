import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle `
  *{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      max-width: 100%;
  }

  html, body, #root {
      min-height: 100%;
  }

  body{
      background: #fff;
      -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
      color: #000;
      font-size: 14px;
      font-family: Roboto, sans-serif;
  }

  button {
      cursor: pointer;
  }

  a {
      text-decoration: none;
      color: #222;
      letter-spacing: 0.05rem
  }
`;

