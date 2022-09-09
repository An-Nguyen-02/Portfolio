import React, {useEffect} from "react";
import {
    Box,
    Link,
    Heading,
    Flex,
    Text,
    Spacer,
    Container,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useColorModeValue,
    Button,
    VStack,
  } from '@chakra-ui/react';
  import './Home.scss'

  export const Home = () => {
    useEffect(()=>{
        const jobTitles = ['Developer','Student'];
        // Current sentence being processed
        var _PART = 0;

        // Character number of the current sentence being processed 
        var _PART_INDEX = 0;

        // Holds the handle returned from setInterval
        var _INTERVAL_VAL;

        // Element that holds the text
        var _ELEMENT = document.querySelector("#jobTitle");
        // Implements typing effect
        function Type() { 
            var text =  jobTitles[_PART].substring(0, _PART_INDEX + 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX++;

            // If full sentence has been displayed then start to delete the sentence after some time
            if(text === jobTitles[_PART]) {
                clearInterval(_INTERVAL_VAL);
                setTimeout(function() {
                    _INTERVAL_VAL = setInterval(Delete, 50);
                }, 1000);
            }
        }

        // Implements deleting effect
        function Delete() {
            var text =  jobTitles[_PART].substring(0, _PART_INDEX - 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX--;

            // If sentence has been deleted then start to display the next sentence
            if(text === '') {
                clearInterval(_INTERVAL_VAL);

                // If last sentence then display the first one, else move to the next
                if(_PART === (jobTitles.length - 1))
                    _PART = 0;
                else
                    _PART++;
                _PART_INDEX = 0;

                // Start to display the next sentence after some time
                setTimeout(function() {
                    _INTERVAL_VAL = setInterval(Type, 100);
                }, 200);
            }
        }
        // Start the typing effect on load
        _INTERVAL_VAL = setInterval(Type, 100);
    },[])

    return (
        <Flex id='home' flexDirection="column" justifyContent="space-between" alignItems="center" height="100vh">
            <Box paddingTop="40vh" id="homeInner">
                <Flex>

                    <Heading size="4xl">An</Heading>
                    <Heading size="4xl" textColor="red.500" marginLeft="10px">Nguyen</Heading>
                </Flex>
                <Flex margin="20px 0 0 0" gap="10px" justifyContent="center" fontSize="3xl">
                    <Text>I'm a </Text>
                    <Text as='b' id='jobTitle' borderRight="3px solid #2980b9" color="#2980b9" />
                </Flex>
            </Box>
            <Link href='#about' paddingBottom="3%">
                <Box className="mouse">
                    <Box className="scroller"></Box>
                </Box>
            </Link>
        </Flex>
    )
  }