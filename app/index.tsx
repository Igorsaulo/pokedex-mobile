import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from '@/shared/styles/theme';
import { Welcome } from './pages/welcome';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
};

export default App;