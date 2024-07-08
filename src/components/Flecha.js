import React from 'react';

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 text-gray-700 w-1 h-12 flex items-center justify-center cursor-pointer z-10 left-0 -ml-16"
      style={{ fontSize: '3rem' }} 
      onClick={onClick}
    >
      &lt;
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 text-gray-700 w-1 h-12 flex items-center justify-center cursor-pointer z-10 right-0 -mr-16"
      style={{ fontSize: '3rem' }} 
      onClick={onClick}
    >
      &gt;
    </div>
  );
};

export { PrevArrow, NextArrow };
