import {React, useState, useEffect} from 'react';
import {data} from '../../data/projects'
import './Portfolio.scss'
import {motion, AnimatePresence} from 'framer-motion';
import {Box, Heading, Text, Button, Flex} from '@chakra-ui/react';
import {WorkCard} from '../WorkCard/WorkCard';

const PREDEFINED_FILTERS = ['Web development', 'Backend',]
export const Portfolio = () => {
    const [filtered, setFiltered] = useState(data);
    const [activeType, setActiveType] = useState("All");

    useEffect(()=>{
        if (activeType === "All"){
            setFiltered(data);
        } else if (PREDEFINED_FILTERS.includes(activeType)){
            setFiltered(data.filter((project)=>project.type.includes(activeType)))
        } else {
            setFiltered(data.filter((project)=>!project.type.includes(activeType)))
        }
    },[activeType])

    return (
        <Box id="portfolio">
            <Box marginBottom="20px">
                <Heading as="h1" size="3xl">Portfolio</Heading>
                <Text>Showcasing my work</Text>
            </Box>
            <Flex columnGap="10px">
                <Button className={activeType==="All"?"active":""} onClick={()=>{setActiveType("All")}}>All</Button>
                <Button className={activeType==="Web development"?"active":""} onClick={()=>{setActiveType("Web development")}}>Web development</Button>
                <Button className={activeType==="Backend"?"active":""} onClick={()=>{setActiveType("Backend")}}>Backend development</Button>
                <Button className={activeType==="Other"?"active":""} onClick={()=>{setActiveType("Other")}}>Other</Button>
            </Flex>
            <motion.div layout className="work-container">
                <AnimatePresence >
                {filtered.map(project=>(
                    <WorkCard key={project.id}
                        project = {project}
                    />
                ))}
                </AnimatePresence>
            </motion.div>
        </Box>
    )
}