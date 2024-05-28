import React from 'react';
import { motion } from 'framer-motion';
import ModalControls from './ModalControls';

const Modal = ({
  slideNumber,
  portfolioData,
  cdnUrl,
  handleCloseModal,
  prevImage,
  nextImage,
}) => (
  <div className="galleryWrap">
    <ModalControls
      handleCloseModal={handleCloseModal}
      prevImage={prevImage}
      nextImage={nextImage}
    />
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
          frameBorder="0"
          allowFullScreen
          className="portfolio-video"
        />
      ) : (
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src={`https://waynebuildsweb.b-cdn.net/${portfolioData[slideNumber].image}`}
          alt=""
          loading='lazy'
        />
      )}
    </div>
  </div>
);

export default Modal;
