import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  html, body {
  height: 100vh;
  width: 100vw;

  font-size: 60%;
}

  body, input, button, textarea {
    font: 500 16px Poppins;
    color: ${props => props.theme.colors.textBase}
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
