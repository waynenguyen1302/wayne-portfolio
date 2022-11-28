import React, { useState } from "react";
import './index.scss';
import porfolioData from '../../data/portfolio';

const Portfolio2 = (portfolioData) => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)




    return (
        <div>
            <div className="galleryWrap">
                {
                    portfolioData && portfolioData.map((slide, index) =>{
                        return(
                            <div className='single' key={index}>
                                <img src={slide.imgage} alt ="portfolio image" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio2