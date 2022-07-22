import Context from '../../42_quiz/Context'
import { useContext, useState } from 'react'

const NavigationButtons = ({pagesNumber}) => {

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
                    className={
                        index === activeIndex ?
                        "button nav-button p button-active" : 
                        "button nav-button p"
                    }
                    key={index}
                    onClick={()=>handlerButtonClick(index)}
                    >{index + 1}
                </button>
            )}     
        </>

    )
}

export default NavigationButtons;
