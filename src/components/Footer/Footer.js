import { useContext, useEffect } from "react";
import {Text, Flex, Link} from "@chakra-ui/react";
import './Footer.scss'
import {AiFillHome} from 'react-icons/ai';
import {SiTelegram} from 'react-icons/si'
import {ImPhone} from 'react-icons/im'
import {FaFacebookSquare, FaLinkedin, FaGithubSquare} from 'react-icons/fa'
import { IconContext } from "react-icons";
import { WindowContext } from '../../App';
export const Footer = () => {
    const {windowDimension, PhoneWidthChange} = useContext(WindowContext);
    

    useEffect(()=>{
        const infoContainer = document.getElementById("info-container");
        if (windowDimension.winWidth <= PhoneWidthChange){
            infoContainer.setAttribute("style","flex-direction:column; row-gap:50px")
        }

    },[windowDimension])

    return (
        <Flex id="footer">

                <Flex padding="80px 0" borderBottom="2px solid rgba(255,255,255,.8 )" id="info-container">
                    <Flex flexDirection="column" padding="0 15px" alignItems="center" width="100%">
                        <AiFillHome size="46px"/>
                        <Text fontSize="15px">
                            Insinöörinkatu 60 A 68, 33720 Tampere, Finland
                        </Text>
                    </Flex>
                    <Flex flexDirection="column" padding="0 15px" alignItems="center" width="100%">
                        <ImPhone size="46px"/>
                        <Text fontSize="15px">
                            (+358) 417 283 306
                        </Text>
                    </Flex>
                    <Flex flexDirection="column" padding="0 15px" alignItems="center" width="100%">
                        <SiTelegram size="46px"/>
                        <Link fontSize="15px" href="https://t.me/AnNguyen02">
                            Telegram me
                        </Link>
                    </Flex>
                </Flex>

                <Flex paddingBottom="25px" paddingTop="25px">
                    <Flex gap="10px" width="100%">
                        
                        <Link href="https://www.facebook.com/nhatan0209">
                            <IconContext.Provider value={{color:"#4267B2"}}>
                                <FaFacebookSquare />
                            </IconContext.Provider>
                        </Link>
                        
                        <Link href="https://www.linkedin.com/in/an-nhat-nguyen/">
                            <IconContext.Provider value={{color:"#0A66C2"}}>
                                <FaLinkedin  />
                            </IconContext.Provider>
                        </Link>

                        <Link href="https://github.com/An-Nguyen-02">
                            <IconContext.Provider value={{color:"#fafafa"}}>
                                <FaGithubSquare />
                            </IconContext.Provider>
                        </Link>

                        
                    </Flex>
                    <Text fontSize="xs" whiteSpace="nowrap">Copyright 2022 by An Nguyen. All Rights Reserved</Text>
                </Flex>

        </Flex>
    )
}