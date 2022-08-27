import {
    Link,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
  import { Logo } from '../Logo/Logo';


export const Navigation = () => {
    const textColor = useColorModeValue('white', 'gray.800')
    const bgColor = useColorModeValue('black','white')
    return (

    <VStack width="15%" textColor={textColor} bgColor={bgColor} gap="5%" zIndex="3" position="fixed" height="100vh" overflowX="hidden">
        <Logo />
        <Link href="#home">Home</Link>
        <Link href='#about'>About</Link>
        <Link href='#portfolio'>Portfolio</Link>
        <Link href='#bio'>Bio</Link>
        <Link href='#contact'>Contact</Link>
    </VStack>
    )
}