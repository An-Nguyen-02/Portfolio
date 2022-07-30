import './WorkInfo.css'

const WorkInfo = ({children, showWork, project, setShowWork}) => {
    const {id, name, brief, date, images, url, type, sourceCode, technologies, detail} = project;
    return (showWork) ? (
        <div className='WorkInfo'>
            <button className='close-btn' onClick={()=>{setShowWork(false)}}>&times;</button>
            {children}
        </div>
    ): ""
}

export default WorkInfo;