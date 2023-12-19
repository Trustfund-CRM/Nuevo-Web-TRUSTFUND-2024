'use client'
import { useState, useEffect } from 'react';
export function useWindowWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  console.log(screenWidth)

  useEffect(() => {
    if (window !== 'undefined') {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return screenWidth;
}