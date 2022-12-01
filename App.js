import React from 'react';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Filme from './src/pages/Filme';

import {Provider as PaperProvider} from 'react-native-paper';

import {StatusBar} from 'react-native';

const App = () => {
  return (
    <PaperProvider>
      <StatusBar backgroundColor={"#000"}></StatusBar>
      <Filme />
    </PaperProvider>
  );
};

export default App;