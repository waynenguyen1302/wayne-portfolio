import React, { useState } from 'react'
import './index.scss'
import portfolioData from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const Portfolios = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
    window.scrollTo(0, 0)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const prevImage = () => {
    slideNumber === 0
      ? setSlideNumber(portfolioData.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  const nextImage = () => {
    slideNumber + 1 === portfolioData.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }

  return (
    <div className="portfolio-list">
      {openModal && (
        <div className="galleryWrap">
          <div class="all-btn">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="btnClose"
              onClick={handleCloseModal}
              font-size="3em"
            />
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className="btnPrev"
              onClick={prevImage}
              font-size="3em"
            />
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="btnNext"
              onClick={nextImage}
              font-size="3em"
            />
          </div>
          {/* If there is video, when clicked open, the background overlay is hidden, play video instead of image */}
          <div
            className={`fullScreenImage ${
              portfolioData[slideNumber].video ? 'videoPresent' : ''
            }`}
          >
            {portfolioData[slideNumber].video ? (
              <motion.iframe
                title="Video"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                width="560"
                height="315"
                src={`${portfolioData[slideNumber].video}?autoplay=1&mute=1`}
                frameborder="0"
                allowfullscreen
                className="portfolio-video"
              />
            ) : (
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                src={portfolioData[slideNumber].image}
                alt=""
              />
            )}
          </div>
        </div>
      )}
      <div className="images-container">
        {portfolioData &&
          portfolioData.map((port, idx) => {
            return (
              <div className="image-box" key={idx}>
                <img
                  src={port.image}
                  className="portfolio-image"
                  alt="portfolio"
                  onClick={() => handleOpenModal(idx)}
                />

                <div className="content" key={idx}>
                  <p className="title">{port.title}</p>
                  <h4 className="description">{port.description}</h4>
                  <a href={port.url} target="_blank">
                    <h4 className="description">{port.url}</h4>
                  </a>
                  <button className="btn" onClick={() => handleOpenModal(idx)}>
                    View
                  </button>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Portfolios
