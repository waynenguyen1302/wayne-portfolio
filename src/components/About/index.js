import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import ScrollToReadMore from './ScrollToReadMore';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [showScrollToReadMore, setShowScrollToReadMore] = useState(true);
    const textZoneRef = useRef(null);

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        const handleScroll = () => {
            if (textZoneRef.current) {
                setShowScrollToReadMore(textZoneRef.current.scrollTop === 0);
            }
        };

        const textZone = textZoneRef.current;
        if (textZone) {
            textZone.addEventListener('scroll', handleScroll);
        }

        return () => {
            clearTimeout(timeoutId);
            if (textZone) {
                textZone.removeEventListener('scroll', handleScroll);
            }
        }
    }, []);

    return (
        <>
            <div className='container about-page' >
                <div className='text-zone' ref={textZoneRef}>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Hello, this is Wayne, an aspiring full-stack developer with a passion for crafting digital solutions to real-world challenges. I've embarked on an exciting journey, expanding my skills from front-end development into the realms of full-stack development. My goal is to create elegant, user-centric solutions that not only look great but also function seamlessly.
                    </p>
                    <h2>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', ' ', 'C', 'r', 'e', 'a', 't', 'i', 'v', 'e', ' ', 'J', 'o', 'u', 'r', 'n', 'e', 'y']}
                            idx={15}
                        />
                    </h2>
                    <p>
                        My fascination with technology began back in the days of Windows 96, where I first explored creating graphics using Microsoft Paint. This early interest in technology grew into a passion for web development as I embraced new tools and techniques to stay at the forefront of the digital landscape. Over the years, I've transitioned from designing in Photoshop and Illustrator to building interactive websites with HTML, CSS, and JavaScript. My journey has taken me from simple static pages to dynamic, responsive web applications using modern frameworks like React and Next.js. This diverse experience has not only sharpened my design skills but also my ability to create websites that seamlessly blend aesthetics with functionality.
                    </p>
                    <h2>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['V', 'a', 'l', 'u', 'e', 's', ' ', 'T', 'h', 'a', 't', ' ', 'D', 'r', 'i', 'v', 'e', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h2>
                    <p>
                        In my work, I hold three core values close to heart:
                    </p>
                    <p>
                        <span>1. Teamwork:</span> I thrive in collaborative environments where ideas flourish, and creativity knows no bounds. I value the unique perspectives that each team member brings to the table, as I believe that the most innovative solutions are born from collective effort.
                    </p>
                    <p>
                        <span>2. Efficiency:</span> I'm dedicated to optimizing processes and workflows to maximize efficiency. In the fast-paced world of technology, time is a valuable resource, and I'm committed to delivering solutions that respect both your time and the end user's experience.
                    </p>
                    <p>
                        <span>3. Customer Service:</span> Ultimately, the success of any project hinges on the satisfaction of its users. I'm driven by a commitment to providing top-notch customer service, ensuring that the end product not only meets but exceeds expectations.
                    </p>
                    <p>
                        Thank you for taking the time to get to know me. I'm excited to continue my journey as a full-stack developer, tackling new challenges, and creating meaningful digital experiences.
                    </p>

                    <div className={`scroll-to-read-more ${showScrollToReadMore ? 'visible' : 'hidden'}`}>
                        <ScrollToReadMore />
                    </div>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPhp} color="#DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFDA1E" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>

            <Loader type="ball-grid-pulse" />
        </>
    )
}

export default About