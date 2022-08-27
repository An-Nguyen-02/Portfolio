import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Flex
} from '@chakra-ui/react';
import {Navigation} from './components/Navigation/Navigation'
import {Home} from './components/Home/Home'
import {About} from './components/About/About'
import {ColorModeSwitcher} from './components/ColorModeSwitcher/ColorModeSwitcher'
import {Portfolio} from './components/Portfolio/Portfolio'
import {Bio} from './components/Bio/Bio'
import {Contact} from './components/Contact/Contact'
import {Footer} from './components/Footer/Footer'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" overflowX="hidden" fontSize="xl">
        <Flex width="100%" flexDirection="row">
              <Navigation />
              <Box marginLeft="15%" width="85%">
                  <Home />
                  <About />  
                  <Portfolio />   
                  <Bio />
                  <Contact />
                  <Footer />
              </Box>
              <ColorModeSwitcher />
          </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
