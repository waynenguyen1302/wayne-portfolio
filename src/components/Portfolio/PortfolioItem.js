import React from 'react';

const PortfolioItem = React.memo(({ port, idx, handleOpenModal, cdnUrl }) => (
  <div className="image-box" key={idx}>
    <img
      src={`https://waynebuildsweb.b-cdn.net/${port.image}?width=300&height=200`}
      className="portfolio-image"
      alt="portfolio"
      onClick={() => handleOpenModal(idx)}
    />
    <div className="content">
      <p className="title">{port.title}</p>
      <h4 className="description">{port.description}</h4>
      <a href={port.url} target="_blank" rel="noopener noreferrer">
        <h4 className="description">{port.url}</h4>
      </a>
      <button className="btn" onClick={() => handleOpenModal(idx)}>
        View
      </button>
    </div>
  </div>
));

export default PortfolioItem;
