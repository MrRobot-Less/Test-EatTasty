import React from 'react';
import Home from './pages/Home';
import GlobalStyles from './globalStyle';
import {FoodContextProvider} from './components/Context'
import './App.css';

import {ChakraProvider} from '@chakra-ui/react'
import FoodList from './components/FoodList';

function App() {
  return (
    <>
      <FoodContextProvider>
        <ChakraProvider>
          <GlobalStyles/>
          <Home/>
        </ChakraProvider>
      </FoodContextProvider>
    </>
  );
}

export default App;
