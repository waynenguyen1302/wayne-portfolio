 import React from "react";
 import "./index.scss";
 import Loader from "react-loaders";
 import AnimatedLetters from "../AnimatedLetters";
 import { useState, useEffect } from "react";
 import Portfolios from "./portfolios";


 const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate') ;


    useEffect(() => {
        return  () => setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, []);
    
    // const renderPortfolio = (portfolio) => {
    //     return (
    //         <div className="images-container">
    //             {
    //                 portfolio.map((port, idx) => {
    //                     return (
    //                         <div className="image-box" key={idx}>
    //                             <img 
    //                             src={port.image}
    //                             className="portfolio-image" 
    //                             alt="portfolio"
    //                             />
    //                             <div className="content">
    //                                 <p className="title">{port.title}</p>
    //                                 <h4 className="description">{port.description}</h4>
    //                                 <button className="btn" onClick={() => setButtonPopup(true)}>View</button>          
    //                             </div>     
    //                             <div className="full-image">
    //                                 <img 
    //                                     src = {port.image}
    //                                 />    
    //                             </div>                     
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     );
    // }  

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
                {/* <div>{renderPortfolio(portfolioData.portfolio)}</div> */}
                <Portfolios />  
                
            </div>
            <Loader type="ball-grid-pulse" />
        </>
        
    )
 }

 export default Portfolio