import './styles.css';
import Question from './Question';
import CompleteNavigation from '../commonComponents/CompleteNavigation'
import ScreenSize from "../commonComponents/ScreenSize";
import {useEffect, useRef, useState} from 'react';



const Quiz = (props) => {
    const questions = props.questions;
    
	const [value, setValue] = useState("");
    
	const handlerChange = (e) => {
        setValue(e.target.value);
        
		console.log(e.target.value);
	};
    
    // GETTING SCREEN(WINDOW) WIDTH
    var width = ScreenSize().width;
    // 

    // GETTING ELEMENT WIDTH
    const ref = useRef();
    
    const [elementWidth, setWidth] = useState(0);

    const getElemWidth =() => {
        setWidth(ref.current.offsetWidth);
    };

    useEffect(() => {
        getElemWidth();
    }, [ref]);

    useEffect(() => {
        window.addEventListener("resize", getElemWidth);
        return () => {
            window.removeEventListener("resize", getElemWidth);
        } 
    }, []);
    // 

     return(
        <>
            <div className="wrapper__quiz">
                <div className="quiz__title h-1">Quiz</div>
                <div className="quiz__subtitle p">Ready to go?</div>
                <div className="wrapper__questions panel drop-shadow"                            
                    style={{position: "relative"}}>
                    {questions.map((item, index) => 
                    <div ref={ref} key={index}>
                        <Question 
                        number = {index + 1} 
                        item = {item} 
                        elementWidth = {elementWidth}
                        />
                    </div>
                    )}
                    {width - 300 > 1050 ? <CompleteNavigation progress="80"/> : <></>}
                    <div style={{marginTop: "30px", textAlign: "right"}}>
                        <button className="submit-button p">Finish attempt ...</button>     
                    </div>
                    <div style={{marginTop: "50px", 
                            display: "flex",
                            justifyContent: "space-between"}}>
                        <button className={elementWidth > 700 ? 
                            "backward-button" : 
                            "backward-button minimal-button"}>
                            <span >Forum netiquette</span>
                        </button> 
                        <select className="jump-to-select drop-shadow" value={value} onChange={handlerChange}>
                            <option disabled={true} value="">Jump to..</option>
                            {Array.from({length: 6}).map((item, index) => 
                            <option value={`Page-${index + 1}`} key={index}>{`Page-${index + 1}`}</option>)}
                        </select>
                        <button className={elementWidth > 700 ? 
                                "forward-button" : 
                                "forward-button minimal-button"}>
                            <span >Share examples of digital...</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz;