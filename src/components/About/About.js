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
    const currentDate = new Date()
    return (
        <Box id="about">
            <Box textAlign="left">
                <Heading as="h1" size="3xl" marginLeft="10%" whiteSpace="nowrap">About me</Heading>
            </Box>
            <Box id="about-body">
                <Image id="my-img" src={myImage} alt="An Nguyen" />
                <Box gridArea="title">
                    <Text as="b" id="title">I'm a tech enthusiast, web developer, and magician</Text>
                </Box>
                <Box gridArea="content" borderBottom="2px solid rgba(0,0,0,.08)">
                    <Text textAlign="left"id="content">I am a student studying Master's degree in Software, Web, and Cloud at Tampere University who loves to try out new things, learn new technologies. I've been working with ReactJS, Ruby on Rails, Docker, PostgreSQL for {(currentDate.getFullYear() + (currentDate.getMonth()+1)/12 - 2023 - 5/12).toFixed(1)} years.
                        Other than that, I've worked with Java, AWS for backend development. Besides from studying, I like gaming, hit the gym, play badminton, and doing some magic.
                    </Text>
                </Box>
                <Box id="my-info">
                    <Flex gridArea="name">
                        <Text as="b">Name:</Text>
                        <Text marginLeft="10px" whiteSpace="nowrap">An Nguyen</Text>
                    </Flex>
                    <Flex gridArea="email">
                        <Text as="b">Email:</Text>
                        <Link href="mailto:nhatan020902@gmail.com">
                            <Text marginLeft="10px" color="#CD001A">nhatan020902@gmail.com</Text>
                        </Link>
                    </Flex>
                    <Flex gridArea="age">
                        <Text as="b">Age:</Text>
                        <Text marginLeft="10px">{new Date().getFullYear()-2002}</Text>   
                    </Flex>
                    <Flex gridArea="address">
                        <Text as="b">Address:</Text>
                        <Text marginLeft="5px">Tampere, Finland</Text> 
                    </Flex>
                    <Button gridArea="cv" alignSelf="flex-end" borderRadius="30px" size="lg" colorScheme="red" id="buttonCV"><LinkOverlay href={CVfile}>Download CV</LinkOverlay></Button>
                </Box>
            </Box>
        </Box>
    )
}