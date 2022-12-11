import React, { useState } from "react";
import './index.scss';
import portfolioData from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Portfolios = () => {
    const [slideNumber,setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    // Close image
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // Previous image
    const prevImage = () => {
        slideNumber === 0 
        ? setSlideNumber( portfolioData.length -1 ) 
        : setSlideNumber(slideNumber - 1)
    }
    // next image
    const nextImage = () => {
        slideNumber + 1 === portfolioData.length 
        ? setSlideNumber(0) 
        : setSlideNumber(slideNumber + 1)
    }

    return (
            <div>
                 {openModal && 
                    <div className='galleryWrap'>
                        <div class="all-btn">
                            <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}  font-size="3em"/>
                            <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevImage} font-size="3em"/>
                            <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextImage} font-size="3em"/>
                        </div>
                                                    
                        <div                           
                            className='fullScreenImage'
                        >
                            <motion.img 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition = {{ duration: 1 }} 
                                src={portfolioData[slideNumber].image} alt='' />
                        </div>      
                                        
                    </div>
                }
                <div className='images-container'>
                {
                    portfolioData && portfolioData.map((port, idx) => {
                        return(
                            <div className="image-box" key={idx}>
                                <img 
                                    src={port.image}
                                    className="portfolio-image" 
                                    alt="portfolio"
                                    onClick={ () => handleOpenModal(idx)}
                                />
                                <div className="content" key={idx}>
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <h4 className="url">{port.url}</h4>
                                    <button className="btn" onClick={ () => handleOpenModal(idx)}>View</button>          
                                </div>     
                                {/* <div className="full-image">
                                    <img 
                                        src = {port.image}
                                        alt='portfolio'
                                    />    
                                </div>                      */}
                            </div>
                        )
                    })
                }  
                </div>              
                          
            </div>
    )
}

export default Portfolios