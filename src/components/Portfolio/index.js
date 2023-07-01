 import React from "react";
 import "./index.scss";
 import Loader from "react-loaders";
 import AnimatedLetters from "../AnimatedLetters";
 import { useState, useEffect } from "react";
 import Portfolios from "./portfolios";


 const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate') ;


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
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <Portfolios />               
            </div>
            <Loader type="ball-grid-pulse" />
        </>
        
    )
 }

 export default Portfolio