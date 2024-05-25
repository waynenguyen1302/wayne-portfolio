import React from 'react';
import PortfolioItem from './PortfolioItem';

const ImageContainer = ({ portfolioData, handleOpenModal, cdnUrl }) => (
  <div className="images-container">
    {portfolioData.map((port, idx) => (
      <PortfolioItem
        key={idx}
        port={port}
        idx={idx}
        handleOpenModal={handleOpenModal}
        cdnUrl={cdnUrl}
      />
    ))}
  </div>
);

export default ImageContainer;
