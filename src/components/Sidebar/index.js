import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoW from  '../../assets/images/logo-w2.png'
import LogoSubtitle from  '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faLightbulb, faUser, faWandMagicSparkles, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () =>  {
    const [showNav, setShowNav] = useState(false); 

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoW} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="wayne" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="skills-link" to="/skills">
                    <FontAwesomeIcon icon={faWandMagicSparkles} color="#4d4d4e" />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink> 
                <FontAwesomeIcon 
                    icon={faClose} 
                    onClick={() => setShowNav(false)}
                    color="#e88607"
                    size="3x"
                    className='close-icon'
                />           
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/wayne-d-nguyen/">
                        <FontAwesomeIcon icon = {faLinkedin} color="#4d4d4e" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/waynenguyen1302">
                        <FontAwesomeIcon icon = {faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon 
                onClick = {() => setShowNav(true)}
                icon ={faBars}
                color = "#e88607"
                size="3x"
                className='menu-icon'
            />
        </div>
    )
}

export default Sidebar