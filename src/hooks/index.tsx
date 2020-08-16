import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from '../assets/styles/themes/light';

const AppProvider: React.FC = () => {
  return <ThemeProvider theme={light} />;
};

export default AppProvider;
