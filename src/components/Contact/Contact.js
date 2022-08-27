import {Box, Text, Heading, Input, Textarea} from "@chakra-ui/react";
import './Contact.scss'
export const Contact = () => {

    return (
        <Box id="contact" padding="85px 40px" backgroundColor="#f7f7f7">
            <Box textAlign="left" marginBottom="48px">
                <Heading as="h1" size="2xl">Get in touch</Heading>
                <Text>Feel free to contact me</Text>
            </Box>
            <form className="content">
                <Input placeholder="Name" variant="filled" gridArea="name" className="input" width="auto" htmlSize={40} isRequired />
                <Input placeholder="Email" variant="filled" gridArea="email" className="input" width="auto" htmlSize={40} isRequired />
                <Input placeholder="Subject" variant="filled" gridArea="subject" width="auto" htmlSize={94} className="input" />
                <Textarea placeholder="Message" variant="filled" gridArea="message" width="auto" height="70%" className="input message" isRequired />
            </form>
        </Box>
    )
}