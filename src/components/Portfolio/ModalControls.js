import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

const ModalControls = ({ handleCloseModal, prevImage, nextImage }) => (
  <div className="all-btn">
    <FontAwesomeIcon
      icon={faCircleXmark}
      className="btnClose"
      onClick={handleCloseModal}
      fontSize="3em"
    />
    <FontAwesomeIcon
      icon={faCircleChevronLeft}
      className="btnPrev"
      onClick={prevImage}
      fontSize="3em"
    />
    <FontAwesomeIcon
      icon={faCircleChevronRight}
      className="btnNext"
      onClick={nextImage}
      fontSize="3em"
    />
  </div>
);

export default ModalControls;
