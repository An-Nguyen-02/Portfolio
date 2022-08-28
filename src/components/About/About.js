import {
    Box,
    Text,
    Button,
    Heading,
    Image,
    LinkOverlay,
    Flex,
    Link,
  } from '@chakra-ui/react';
  import CVfile from './An_Nguyen_CV.pdf';
  import './About.scss'
  import myImage from './MyImage.jpg'
  export const About = () => {
    return (
        <Box id="about">
            <Box textAlign="left">
                <Heading as="h1" size="3xl">About me</Heading>
            </Box>
            <Box id="about-body">
                <Image id="my-img" src={myImage} alt="An Nguyen" />
                <Box gridArea="title">
                    <Text as="b" fontSize="4xl">I'm a tech enthusiast, web developer, magician</Text>
                </Box>
                <Box gridArea="content" borderBottom="2px solid rgba(0,0,0,.08)">
                    <Text textAlign="left">I am a Software Engineering student at Tampere University who loves to try out new things, learn new technologies. I've been learning React and now looking for a Junior, intern position with it.
                        Besides from studying, I like gaming, hit the gym, play badminton, and doing some magic.
                    </Text>
                </Box>
                <Box id="my-info">
                    <Flex gridArea="name">
                        <Text as="b">Name:</Text>
                        <Text marginLeft="10px">An Nguyen</Text>
                    </Flex>
                    <Flex gridArea="email">
                        <Text as="b">Email:</Text>
                        <Link href="mailto:nhatan020902@gmail.com">
                            <Text marginLeft="10px" color="#CD001A">nhatan020902@gmail.com</Text>
                        </Link>
                    </Flex>
                    <Flex gridArea="age">
                        <Text as="b">Age:</Text>
                        <Text marginLeft="10px">20</Text>   
                    </Flex>
                    <Flex gridArea="address">
                        <Text>Address:</Text>
                        <Text marginLeft="5px">Tampere, Finland</Text> 
                    </Flex>
                    <Button gridArea="cv" alignSelf="flex-end" borderRadius="30px" size="lg" colorScheme="red"><LinkOverlay href={CVfile}>Download CV</LinkOverlay></Button>
                    <Button gridArea="work" alignSelf="flex-end" borderRadius="30px" size="lg"><LinkOverlay href="#portfolio">My Work</LinkOverlay></Button>
                </Box>
            </Box>
        </Box>
    )
  }