import React, { useState, useCallback, memo } from 'react';
import './index.scss';
import portfolioData from './data';
import Modal from './Modal';
import ImageContainer from './ImageContainer';

const PortfolioList = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const cdnUrl = process.env.REACT_APP_CDN_URL;

  if (!cdnUrl) {
    console.error('CDN URL is not defined. Please set REACT_APP_CDN_URL in your environment variables.');
  }

  const handleOpenModal = useCallback((index) => {
    setSlideNumber(index);
    setOpenModal(true);
    window.scrollTo(0, 0);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const prevImage = useCallback(() => {
    setSlideNumber((prev) =>
      prev === 0 ? portfolioData.length - 1 : prev - 1
    );
  }, []);

  const nextImage = useCallback(() => {
    setSlideNumber((prev) =>
      prev + 1 === portfolioData.length ? 0 : prev + 1
    );
  }, []);

  return (
    <div className="portfolio-list">
      {openModal && (
        <Modal
          slideNumber={slideNumber}
          portfolioData={portfolioData}
          cdnUrl={cdnUrl}
          handleCloseModal={handleCloseModal}
          prevImage={prevImage}
          nextImage={nextImage}
        />
      )}
      <ImageContainer
        portfolioData={portfolioData}
        handleOpenModal={handleOpenModal}
        cdnUrl={cdnUrl}
      />
    </div>
  );
};

export default PortfolioList;
