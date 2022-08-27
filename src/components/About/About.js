import {
    Box,
    Text,
    Button,
    Heading,
    Image,
    LinkOverlay,
  } from '@chakra-ui/react';
  import CVfile from './An_Nguyen_CV.pdf';
  import './About.scss'
  export const About = () => {
    return (
        <Box id="about">
            <Box textAlign="left">
                <Heading as="h1" size="4xl">About me</Heading>
                <Text>About me</Text>
            </Box>
            <Box id="about-body">
                <Image id="my-img" src="" alt="An Nguyen" />
                <Box gridArea="title">
                    <Text>Content Title</Text>
                </Box>
                <Box gridArea="content" borderBottom="2px solid rgba(0,0,0,.08)">
                    <Text>Main Content</Text>
                </Box>
                <Box id="my-info">
                    <Text gridArea="name">Name:</Text>
                    <Text gridArea="email">Email:</Text>
                    <Text gridArea="age">Age:</Text>
                    <Text gridArea="address">Address:</Text>
                    <Button gridArea="cv" alignSelf="flex-end"><LinkOverlay href={CVfile}>Download CV</LinkOverlay></Button>
                    <Button gridArea="work" alignSelf="flex-end"><LinkOverlay href="#portfolio">My Work</LinkOverlay></Button>
                </Box>
            </Box>
        </Box>
    )
  }