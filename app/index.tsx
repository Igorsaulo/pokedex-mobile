import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from '@/app/shared/styles/theme';
import { Routes } from './routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;