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
    Image,
} from '@chakra-ui/react';
import {Slider} from '../Slider/Slider';
import './WorkInfo.scss'
export const WorkInfo = ({project, isOpen, onClose}) => {
    const {id, name, brief, date, images, url, type, sourceCode, technologies, detail} = project;
    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size="full">
            <ModalContent>

                <ModalHeader>
                    {name}
                </ModalHeader>

                <ModalCloseButton />
                <ModalBody className="body">

                        <Slider items={images} className="slider" />

                        <Box gridArea="content">
                            {name}
                        </Box>
                        <Box className='info'>
                            <Text gridArea="date">Date: {date}</Text>
                            <Text gridArea="category">Category: {type.join(', ')}</Text>
                            <Text gridArea="tech">Technologies: {technologies.join(', ')}</Text>
                            <Button gridArea="project-btn">Visit Project</Button>
                        </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
