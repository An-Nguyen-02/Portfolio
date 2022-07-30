import {React, useState} from 'react';
import './WorkCard.css';
import '../WorkInfo/WorkInfo'
import WorkInfo from '../WorkInfo/WorkInfo';
import { motion } from 'framer-motion';
const WorkCard = ({project}) => {
    const {id, name, images} = project;
    const [showWork, setShowWork] = useState(false)

    return (
    <motion.div layout animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} className="collection-item" id={id} >
        <div
            className="image"
            style={{
                backgroundImage: `url(${images[1]})`
            }}
            />
            <p className='name'>{name}</p>
            <button onClick={()=>{setShowWork(true)}} className='more-info-btn'>More info</button>
            <WorkInfo showWork={showWork} setShowWork={setShowWork} project={project} />
    </motion.div>
    )
}

export default WorkCard;