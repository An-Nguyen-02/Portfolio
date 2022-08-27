import {Box, Text, Heading, Flex, Link} from "@chakra-ui/react";
import './Footer.scss'
import {AiFillHome} from 'react-icons/ai';
import {SiTelegram} from 'react-icons/si'
import {ImPhone} from 'react-icons/im'
import {FaFacebook, FaLinkedin, FaGithubSquare} from 'react-icons/fa'
export const Footer = () => {

    return (
        <Flex id="footer">

                <Flex padding="80px 0" borderBottom="2px solid rgba(255,255,255,.8 )">
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
                        <FaFacebook />
                        <FaLinkedin  />
                        <FaGithubSquare />
                    </Flex>
                    <Text fontSize="xs" whiteSpace="nowrap">Copyright 2022 by An Nguyen. All Rights Reserved</Text>
                </Flex>

        </Flex>
    )
}