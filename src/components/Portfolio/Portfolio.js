import {React, useState, useEffect} from "react";
import { data } from "../../data/projects";
import './Portfolio.css';
import CustomButton from "../CustomButton/CustomButton";
import WorkCard from "../WorkCard/WorkCard";
import {motion, AnimatePresence} from 'framer-motion'
const Portfolio = () => {
    const [filtered, setFiltered] = useState(data);
    const [activeType, setActiveType] = useState("All");

    useEffect(()=>{
        if (activeType === "All"){
            setFiltered(data);
        } else {
            setFiltered(data.filter((project)=>project.type.includes(activeType)))
        }
    },[activeType])
    return (
        <div id="portfolio">
            <div className="portfolio-head">
                <h1>Portfolio</h1>
                <p>Showcasing my work</p>
            </div>
            <div className="sorting">
                <CustomButton className={activeType==="All"?"active":""} onClick={()=>{setActiveType("All")}}>All</CustomButton>
                <CustomButton className={activeType==="Web development"?"active":""} onClick={()=>{setActiveType("Web development")}}>Web development</CustomButton>
                <CustomButton className={activeType==="Other"?"active":""} onClick={()=>{setActiveType("Other")}}>Other</CustomButton>
            </div>
            <motion.div layout className="work-container">
                <AnimatePresence >
                {filtered.map(project=>(
                    <WorkCard key={project.id}
                        project = {project}
                    />
                ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default Portfolio;
