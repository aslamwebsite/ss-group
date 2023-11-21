import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
     <div className='manageloader position-relative overflow-hidden'>
     <div className="loadingtext">
        <span className="fade-up-loader transform-up">SS GROUP</span>
        <span className="fade-down transform-down">built on values</span>
      </div>
      <div className="border"></div>
     </div>
    </div>
  );
};

export default Loader;
