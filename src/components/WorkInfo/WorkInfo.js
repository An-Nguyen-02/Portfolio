// import './WorkInfo.css'
import {
    Modal,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Button,
    Text,
    Box,
    ModalHeader,
    Heading,
    Link
} from '@chakra-ui/react';
import {Slider} from '../Slider/Slider';
import './WorkInfo.scss'
export const WorkInfo = ({project, isOpen, onClose}) => {
    const { name, brief, date, images, url, type, sourceCode, technologies, detail} = project;
    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size="full">
            <ModalContent>

                <ModalHeader>
                <Heading as="h2">{name}</Heading>
                </ModalHeader>

                <ModalCloseButton />
                <ModalBody className="body">

                        <Slider items={images} className="slider" />

                        <Box gridArea="content" marginLeft="10px">
                            <Text fontSize="2xl" as="b">{brief}</Text>
                            <Text fontSize="md" marginTop="10px">{detail}</Text>
                        </Box>
                        <Box className='info'>
                            <Text gridArea="date">Date: {date}</Text>
                            <Text gridArea="category">Category: {type.join(', ')}</Text>
                            <Text gridArea="tech">Technologies: {technologies.join(', ')}</Text>
                            <Link href={url} target="_blank" gridArea="project-btn">
                                <Button>Visit Project</Button>
                            </Link>
                            <Link href={sourceCode} target="_blank" gridArea="source-code-btn">
                                <Button>See source code</Button>
                            </Link>
                        </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
