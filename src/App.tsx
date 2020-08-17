import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import light from './assets/styles/themes/light';

import Routes from './routes';
import GlobalStyle from './assets/styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <Router>
        <Routes />

        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
};

export default App;
