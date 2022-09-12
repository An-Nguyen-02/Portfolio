import {
  ChakraProvider,
  Box,
  theme,
  Flex
} from '@chakra-ui/react';
import {useState, createContext, useEffect} from 'react'
import {Navigation} from './components/Navigation/Navigation'
import {Home} from './components/Home/Home'
import {About} from './components/About/About'
import {ColorModeSwitcher} from './components/ColorModeSwitcher/ColorModeSwitcher'
import {Portfolio} from './components/Portfolio/Portfolio'
import {Bio} from './components/Bio/Bio'
import {Contact} from './components/Contact/Contact'
import {Footer} from './components/Footer/Footer'

export const WindowContext = createContext();

function App() {

  return (

    <ChakraProvider theme={theme}>

        <Flex width="100%" flexDirection={{base: 'column', lg: 'row'}} textAlign="center" fontSize="xl" id="flexContainer" overflowX="hidden" backgroundColor="#f7f7f7">
              <Navigation />
              <Box id="pageContent" marginLeft={{base: '0%', lg: '15%'}} width={{base:'100%', lg: '85%'}}>
                  <Home />
                  <Box marginRight="2%">
                    <About />  
                    <Portfolio />   
                  </Box>
                  <Bio />
                  <Contact />
                  <Footer />
              </Box>
              {/* <ColorModeSwitcher /> */}
          </Flex>

    </ChakraProvider>

  );
}

export default App;
