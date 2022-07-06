import { useState, useEffect } from 'react'

export default function ScreenSize() {

    const hasWindow = typeof window !== 'undefined';
  
    const getWindowDimensions = () => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
            width,
            height,
        };
    }
  
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      if (hasWindow) {
        const handleResize = () => {
          setWindowDimensions(getWindowDimensions());
        }
  
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
    });
  
    return windowDimensions;
  }