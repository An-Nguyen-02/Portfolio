import {
    Link,
    useColorModeValue,
    Flex,
    Image,
    Text,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react';
import myHypeImage from './MyHypeImage.png'
import ScrollMagic from 'scrollmagic';
import {useContext, useEffect } from 'react';
import './Navigation.scss'
import { WindowContext } from '../../App';


export const Navigation = () => {
    const {windowDimension, WinWidthChange} = useContext(WindowContext);
    let controller = new ScrollMagic.Controller({globalSceneOptions: {duration: windowDimension.winHeight}});
    const textColor = useColorModeValue('white', 'gray.800')
    const bgColor = useColorModeValue('black','white')



    useEffect(() => {
        if (windowDimension.winWidth > WinWidthChange){

            new ScrollMagic.Scene({triggerElement:"#home"})
                            .setClassToggle("#homeLink",'sectionActive')
                            .addTo(controller)
            new ScrollMagic.Scene({triggerElement: "#about"})
                            .setClassToggle("#aboutLink",'sectionActive')
                            .addTo(controller)
            new ScrollMagic.Scene({triggerElement: "#portfolio"})
                            .setClassToggle("#portfolioLink",'sectionActive')
                            .addTo(controller)
            new ScrollMagic.Scene({triggerElement: "#bio"})
                            .setClassToggle("#bioLink",'sectionActive')
                            .addTo(controller)
            new ScrollMagic.Scene({triggerElement: "#contact"})
                            .setClassToggle("#contactLink",'sectionActive')
                            .addTo(controller)
        }

    }, [windowDimension])
    


    return (
        <Box>
            {windowDimension.winWidth > WinWidthChange ?
                    (<Flex id="Navigation" textColor={textColor} bgColor={bgColor}>
                    <Flex flexDirection="column" marginBottom="30%">
                        <Image id="myHypeImage" src={myHypeImage} alt="An Nguyen" />
                        <Text fontSize="xl" marginBottom="10px" as='b'>An Nguyen</Text>
                        <Text fontSize="sm" color="#8a8a8a">Open to work</Text>
                    </Flex>
            
                    <Flex flexDirection="column" rowGap="20px">
                        <Link href='#home' id="homeLink">Home</Link>
                        <Link href='#about' id="aboutLink">About</Link>
                        <Link href='#portfolio' id="portfolioLink">Portfolio</Link>
                        <Link href='#bio' id="bioLink">Bio</Link>
                        <Link href='#contact' id="contactLink">Contact</Link>
                    </Flex>
                </Flex>) :
                    (
                        <Flex id="menu" justifyContent="start" flexDirection="row" >
                            <Menu>
                                <MenuButton as={Button} 
                                    size = "md"
                                    margin = "10px 0 0 20px"           
                                    backgroundColor="#333" 
                                    borderColor="#333" 
                                    _hover={{
                                        backgroundColor: "#555"}}
                                    _expanded={{
                                        backgroundColor: "#555"}}>
                                    Menu
                                </MenuButton>
                                <MenuList backgroundColor="#222" borderColor="#222">
                                    <MenuItem as={Link} href="#home" _focus={{backgroundColor: "#555"}}>Home</MenuItem>
                                    <MenuItem as={Link} href="#about" _focus={{backgroundColor: "#555"}}>About</MenuItem>
                                    <MenuItem as={Link} href="#portfolio" _focus={{backgroundColor: "#555"}}>Portfolio</MenuItem>
                                    <MenuItem as={Link} href="#bio" _focus={{backgroundColor: "#555"}}>Bio</MenuItem>
                                    <MenuItem as={Link} href="#contact" _focus={{backgroundColor: "#555"}}>Contact</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    )
            }
        </Box>

    )


}