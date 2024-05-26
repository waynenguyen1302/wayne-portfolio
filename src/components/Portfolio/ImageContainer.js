import React from 'react';
import PortfolioItem from './PortfolioItem';

const MemorizedPortfolioItem = React.memo(PortfolioItem);

const ImageContainer = ({ portfolioData, handleOpenModal, cdnUrl }) => (
  <div className="images-container">
    {portfolioData.map((port, idx) => (
      <MemorizedPortfolioItem
        key={port.desc}
        port={port}
        idx={idx}
        handleOpenModal={handleOpenModal}
        cdnUrl={cdnUrl}
      />
    ))}
  </div>
);

export default ImageContainer;
