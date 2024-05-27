import React from 'react';
import './ScrollToReadMore.scss';

const ScrollToReadMore = () => {
    return (
        <div className={`wrapper`}>
            <div className='arrows'>
                <span>&#8595;</span>
            </div>
            <p style={{ color: 'gray', textTransform: 'capitalize' }}>More About Me</p>
            <div className='arrows'>
                <span>&#8595;</span>
            </div>
        </div>
    );
};

export default ScrollToReadMore;
