import './styles.css';
import Question from './Question';
import QuizComplete from '../commonComponents/QuizComplete'
import ScreenSize from "../commonComponents/ScreenSize";
import {useEffect, useRef, useState} from 'react';



const Quiz = (props) => {
    const questions = props.questions;

    // STORE SCREEN(WINDOW) WIDTH
    var width = ScreenSize().width;

	const [value, setValue] = useState("");

	const handlerChange = (e) => {
		setValue(e.target.value);

		console.log(e.target.value);
	};
    // 
    
    // GETTING ELEMENT WIDTH
    const ref = useRef(null);

    const [elementWidth, setWidth] = useState(0);
    const [elementHeight, setHeight] = useState(0);

    const getElemSize =() => {
        const newWidth = ref.current.offsetWidth;
        setWidth(newWidth);
        const newHeight = ref.current.offsetHeight;
        setHeight(ref.current.offsetHeight);
    };

    useEffect(() => {
        getElemSize();
    }, [ref]);

    useEffect(() => {
        window.addEventListener("resize", getElemSize);
        return () => {
            window.removeEventListener("resize", getElemSize);
        } 
    }, []);
    // 

     return(
        <>
            <div style={{display:"flex", overflowX: "hidden"}}>
                <div style={{width: "300px"}}></div>
                <div style={{flexGrow: "1"}}>
                    <div className="wrapper__quiz">
                        <div className="quiz__title h-1">Quiz</div>
                        <div className="quiz__subtitle p">Ready to go?</div>
                        <div className="wrapper__questions panel drop-shadow"
                            style={{position: "relative"}}>
                            {questions.map((item, index) => 
                            <Question number = {index + 1} item = {item} key = {index}/>)}
                            {width > 1350 ? <QuizComplete progress="80"/> : <div></div>}
                            <div style={{marginTop: "30px", textAlign: "right"}}>
                                <button className="submit-button p">Finish attempt ...</button>     
                            </div>
                            <div ref={ref} style={{marginTop: "50px", 
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
                            {/* <div style={{textAlign: "center", display: "block"}}>{elementWidth}</div>                                 */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Quiz; //{elementWidth > 700 ? "Share examples of digital..." : ""}