import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import TextSphere from './TextSphere'
import Resume from '../../assets/Wayne_Nguyen_Resume.pdf'

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
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
            <div className='container skills-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"My Skills".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm well equipped with front-end technologies such as <a>HTML, CSS, JavaScript, jQuery, React, Bootstrap, Sass,</a> etc. 
                    </p>
                    <p>
                        My experience in the marketing and communications world also allow me to understand the customer insights, to communicate and deliver the best customer service! 
                    </p>
                    <p>
                        Visit my <a href="https://www.linkedin.com/in/wayne-d-nguyen/" target="_blank">LinkedIn</a> to learn more about me. You can check out my cv via this <a href={Resume} target="_blank">link</a>, or feel free to get in touch <a href="https://waynenguyen1302.github.io/wayne-portfolio/#/contact" target="_blank">here</a>.
                    </p>
                </div>
                <TextSphere />
                
            </div>
            <Loader type="ball-grid-pulse" />
        </>
    )
}

export default Skills