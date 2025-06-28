import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform-gpu origin-left z-50 transition-transform duration-150 ease-out"
      style={{ transform: `scaleX(${scrollProgress / 100})` }}
    />
  );
};

export default ScrollProgress;