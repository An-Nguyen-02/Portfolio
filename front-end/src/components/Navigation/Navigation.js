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
        <div>
            <nav className="navbar">
                <span className="open-slide">
                    <a href="#" id="menu-icon" onClick={openMenu}>
                        <svg width={30} height={30} >
                            <path d="M0,5 30,5" stroke="#000" strokeWidth={5}/>
                            <path d="M0,14 30,14" stroke="#000" strokeWidth={5}/>
                            <path d="M0,23 30,23" stroke="#000" strokeWidth={5}/>
                        </svg>
                    </a>
                </span>
            </nav>
            <div id="side-menu" className="side-nav">
               
                <ul className="no-bullets" aria-hidden="true">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Experience</a> </li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Contact me</a> </li> 
                </ul>
                <a href="#" className="btn-close" onClick={closeMenu}>&times;</a>
            </div>
        </div>
    )
}

export default Navigation;