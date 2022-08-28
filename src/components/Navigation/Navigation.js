import {
    Link,
    useColorModeValue,
    Flex,
    Image,
    Text
  } from '@chakra-ui/react';
  import myHypeImage from './MyHypeImage.png'

export const Navigation = () => {
    const textColor = useColorModeValue('white', 'gray.800')
    const bgColor = useColorModeValue('black','white')
    return (

    <Flex flexDirection="column" alignItems="center" justifyContent="center" width="15%" textColor={textColor} bgColor={bgColor} zIndex="3" position="fixed" height="100vh" overflowX="hidden">
        <Flex flexDirection="column" marginBottom="30%">
            <Image src={myHypeImage} width="120px" alt="An Nguyen" borderRadius="50%" border="5px solid #484848" marginBottom="15px"/>
            <Text fontSize="xl" marginBottom="10px" as='bold'>An Nguyen</Text>
            <Text fontSize="sm" color="#8a8a8a">Open to work</Text>
        </Flex>

        <Flex flexDirection="column" rowGap="20px">
            <Link href="#home">Home</Link>
            <Link href='#about'>About</Link>
            <Link href='#portfolio'>Portfolio</Link>
            <Link href='#bio'>Bio</Link>
            <Link href='#contact'>Contact</Link>
        </Flex>
    </Flex>
    )
}