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
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const WinWidthChange = 980;
  const PhoneWidthChange = 760;
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])

  useEffect(()=>{
    const pageContent = document.getElementById("pageContent");
    const flexContainer = document.getElementById("flexContainer")
    if (windowDimension.winWidth > WinWidthChange){
      pageContent.setAttribute("style","margin-left:15%; width:85%;")
      flexContainer.setAttribute("style","flex-direction: row")
    }
    else {
      pageContent.setAttribute("style","margin-left:0%; width: 100%")
      flexContainer.setAttribute("style","flex-direction: column")
    }
  },[windowDimension])

  return (
    <WindowContext.Provider value={{windowDimension, WinWidthChange, PhoneWidthChange}} >
      <ChakraProvider theme={theme}>

          <Flex width="100%" flexDirection="row" textAlign="center" fontSize="xl" id="flexContainer" overflowX="hidden">
                <Navigation />
                <Box id="pageContent">
                    <Home />
                    <About />  
                    <Portfolio />   
                    <Bio />
                    <Contact />
                    <Footer />
                </Box>
                {/* <ColorModeSwitcher /> */}
            </Flex>

      </ChakraProvider>
    </WindowContext.Provider>
  );
}

export default App;
