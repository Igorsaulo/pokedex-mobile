import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from '@/app/shared/styles/theme';
import { Welcome } from './pages/welcome';
import { Home } from './pages/home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Welcome /> */}
      <Home />
    </ThemeProvider>
  );
};

export default App;