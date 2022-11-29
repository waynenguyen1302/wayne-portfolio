import { motion } from 'framer-motion'
import { React } from 'react'
import LogoW from '../../../assets/images/logo-w2.png'
import './index.scss'

// const svgVariants = {
//     hidden: { rotate: -180 },
//     visible: {
//         rotate: 0,
//         transition: { duration: 3}
//     }
// } 
const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 5,
            ease: "easeInOut"
        }
    }
}

const Logo2 = () => {

    return (
        <div className='container svg'>
            
            <motion.svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.99 374.07"
  
                initial="hidden"
                animate="visible"
            >
                <motion.path variants={pathVariants} class="cls-1" d="M0.64 3.36 91.05 373.57 129.13 373.57 38.87 3.36 0.64 3.36z"/>
                <motion.path variants={pathVariants} class="cls-2" d="M55.05 3.36 145.31 373.57 235.05 373.57 145.05 3.36 55.05 3.36z"/>
                <motion.path variants={pathVariants} class="cls-1" d="M197.48 153.89 242.35 339.63 278.87 188.47 235.05 3.36 197.48 153.89z"/>
                <motion.path variants={pathVariants} class="cls-2" d="M324.4 0.5 414.53 373.57 324.4 373.57 236.35 0.5 324.4 0.5z"/>
                <motion.path variants={pathVariants} class="cls-1" d="M414.53 3.36 376.96 154.41 422.35 339.63 503.35 3.36 414.53 3.36z"/>
            </motion.svg>
            <img  className='solid-logo' src={LogoW} alt="logo" />
        </div>        
    )
}

export default Logo2 