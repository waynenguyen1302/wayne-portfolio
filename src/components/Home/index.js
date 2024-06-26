import LogoTitle from '../../assets/images/logo-w2.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import 'loaders.css/src/animations/ball-grid-beat.scss';
import Particle from './Particles/Particles';
import Logo2 from './Logo2';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'y', 'n', 'e']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {

        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
            <Particle />
            <div className="container home-page">

                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={19} />
                    </h1>
                    <h2>Fullstack Developer / Software Developer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>

                </div>
                <Logo2 />
                <div className="bottom-nav">
                    <div className='link-list'>
                        <><Link to="/about">About Me</Link></>
                        <><Link to="/portfolio">Portfolio</Link></>
                        <><Link to="/skills">Skills</Link></>
                    </div>
                </div>
            </div>

            <Loader type="ball-grid-pulse" />
        </>

    )
}

export default Home

// git add .     
// >> git commit -m "setup gh-pages"
// >> git push
// npm run deploy