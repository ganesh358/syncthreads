import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Allroutes from './Routes/Allroutes';


function App() {
  return (
    <ChakraProvider theme={theme}>
         <Allroutes/>
    </ChakraProvider>
  );
}

export default App;
