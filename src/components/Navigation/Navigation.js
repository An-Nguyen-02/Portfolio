import react from "react";
import './Navigation.css'


const Navigation = () => {
    const openMenu = () => {
        document.getElementById("side-menu").style.width = '210px';
        document.getElementById("menu-icon").style.display = 'none';
    }
    const closeMenu = () => {
        document.getElementById("side-menu").style.width = '0px';
        document.getElementById("menu-icon").style.display = 'initial';
    }
    return (
        <div className="Navigation">
            <nav className="navbar">
                <span className="open-slide">
                    <button id="menu-icon" onClick={openMenu}>
                        <svg width={30} height={30} >
                            <path d="M0,5 30,5" stroke="#000" strokeWidth={5}/>
                            <path d="M0,14 30,14" stroke="#000" strokeWidth={5}/>
                            <path d="M0,23 30,23" stroke="#000" strokeWidth={5}/>
                        </svg>
                    </button>
                </span>
            </nav>
            <div id="side-menu" className="side-nav">
               
                <ul className="no-bullets" aria-hidden="true">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#portfolio">Portfolio</a> </li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact me</a> </li> 
                </ul>
                <button className="btn-close" onClick={closeMenu}>&times;</button>
            </div>
        </div>
    )
}

export default Navigation;