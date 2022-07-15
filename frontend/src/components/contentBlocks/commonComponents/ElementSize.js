import {useEffect, useRef, useState} from 'react';

export default function ElementSize(element) {

    
    // const element = useelement();


  

    const getElementDimensions = () => {
        const elementWidth = element ? element.current.offsetWidth : null;
        const elementHeight = element ? element.current.offsetHeight : null;
        return {
            elementWidth,
            elementHeight
        };        
    }

    const [elementDimensions, setElementDimensions] = useState(getElementDimensions());

    useEffect(() => {
        getElementDimensions();
    }, [element]);

    useEffect(() => {
        window.addEventListener("resize", getElementDimensions);
        return () => {
            window.removeEventListener("resize", getElementDimensions);
        } 
    }, [])

    return elementDimensions;
  }