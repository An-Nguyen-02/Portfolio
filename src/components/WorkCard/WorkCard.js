import {React, useState} from 'react';
import './WorkCard.scss';
import {WorkInfo} from '../WorkInfo/WorkInfo';
import { motion } from 'framer-motion';
import {Text, Button, Box} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
export const WorkCard = ({project}) => {
    const {id, name, images} = project;
    // const [showWork, setShowWork] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
    <motion.div layout animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} className="collection-item" id={id} >
        <Box
            className="image"
            style={{
                backgroundImage: `url(${images[0]})`
            }}
            />
            <Text className='name'>{name}</Text>
            <Button onClick={onOpen} className='more-info-btn'>More info</Button>
            <WorkInfo isOpen={isOpen} onClose={onClose} project={project} />
    </motion.div>
    )
}
