import React, { useState, useEffect } from 'react';

const ScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      // Check if the scroll position is beyond 180vh and screen width is larger than 768px (non-mobile)
      if (scrollPosition > 1.5 * viewHeight && screenWidth > 768) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button className='btn'
        onClick={scrollToTop} 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          cursor: 'pointer',
          zIndex: '99999',
        }}
      >
        <i className="bi bi-arrow-up back-arrow bg-primary"></i>
      </button>
      )}
    </>
  );
};

export default ScrollBtn;



