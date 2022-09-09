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
import {useContext, useEffect} from 'react'
import CVfile from './An_Nguyen_CV.pdf';
import './About.scss'
import myImage from './MyImage.jpg'
import { WindowContext } from '../../App';
export const About = () => {
    const {windowDimension, WinWidthChange, PhoneWidthChange} = useContext(WindowContext);

    useEffect(()=>{
        const myImage = document.getElementById("my-img")
        const aboutBody = document.getElementById("about-body")
        const myInfo = document.getElementById("my-info")
        const buttonCV = document.getElementById("buttonCV")
        const title = document.getElementById("title")
        const content = document.getElementById("content")
        if (windowDimension.winWidth > WinWidthChange){
            myImage.setAttribute("style","border-radius:0%")
            aboutBody.setAttribute("style",`
            grid-template-columns: 40% 60%; 
            grid-template-rows: 10% 20% 40% 30%;
            grid-template-areas: 
            ". . "
            "img title"
            "img content"
            "img info";`)
            myInfo.setAttribute("style",`
            grid-template-columns: 30% 20% 30% 10%;
            grid-template-rows: 20% 20% 50%;
            grid-template-areas: 
            "name . email ."
            "age . address ."
            "cv . . ."`)
            title.setAttribute("style","font-size: 35px")
            content.setAttribute("style","font-size: 25px")
        }
        else if (PhoneWidthChange < windowDimension.winWidth && windowDimension.winWidth < WinWidthChange) {
            myImage.setAttribute("style","border-radius:50%; width: 240px")
            aboutBody.setAttribute("style",`
            grid-template-columns: 100%;
            grid-template-rows: 40% 10% 25% 30%;
            grid-template-areas: 
            "img"
            "title"
            "content"
            "info";`)
            myInfo.setAttribute("style",`
            margin-top: 5px;
            grid-template-columns: 50% 50%;
            grid-template-rows: 30% 30% 40%;
            grid-template-areas: 
            "name email" 
            "age address"
            "cv ."`)
            buttonCV.setAttribute("style",`
            margin-top: 20px;
            width: 200px`)
            title.setAttribute("style","font-size: 34px")
            content.setAttribute("style","font-size: 20px")
        } else {
            myImage.setAttribute("style","border-radius:50%; width: 240px")
            aboutBody.setAttribute("style",`
            grid-template-columns: 100%;
            grid-template-rows: 40% 10% 25% 30%;
            grid-template-areas: 
            "img"
            "title"
            "content"
            "info";`)
            myInfo.setAttribute("style",`
            margin-top: 5px;
            row-gap: 10px;
            grid-template-columns: 100%;
            grid-template-rows: 20% 20% 20% 20% 20%;
            grid-template-areas: 
            "name" 
            "email"
            "age"
            "address"
            "cv"`)
            buttonCV.setAttribute("style",`
            margin-top: 20px;
            width: 200px`)
            title.setAttribute("style","font-size: 25px")
            content.setAttribute("style","font-size: 16px")
        }
    },[windowDimension])

    return (
        <Box id="about">
            <Box textAlign="left">
                <Heading as="h1" size="3xl">About me</Heading>
            </Box>
            <Box id="about-body">
                <Image id="my-img" src={myImage} alt="An Nguyen" />
                <Box gridArea="title">
                    <Text as="b" id="title">I'm a tech enthusiast, web developer, magician</Text>
                </Box>
                <Box gridArea="content" borderBottom="2px solid rgba(0,0,0,.08)">
                    <Text textAlign="left"id="content">I am a Software Engineering student at Tampere University who loves to try out new things, learn new technologies. I've been learning React and now looking for a Junior, intern position with it.
                        Besides from studying, I like gaming, hit the gym, play badminton, and doing some magic.
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
                        <Text marginLeft="10px">20</Text>   
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