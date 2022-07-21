import Context from '../../42_quiz/Context'
import { useContext, useState } from 'react'

const NavigationButtons = ({pagesNumber}) => {

    const className = "button nav-button p";

    const {startIndex, setStartIndex} = useContext(Context);
    const {activeIndex, setActiveIndex} = useContext(Context);

    const handlerButtonClick = (i) => {
        setStartIndex(i);
        setActiveIndex(i);
    }

    return (
        <>
            {Array.from({length: pagesNumber}).map((item, index) => 
                <button 
                    className={index === activeIndex ? className + " button-active" : className}
                    key={`nb${index}`}
                    onClick={()=>handlerButtonClick(index)}
                    >{index + 1}
                </button>
            )}     
        </>

    )
}

export default NavigationButtons;
