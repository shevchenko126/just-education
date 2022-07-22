import Question from './Question';
import CompleteNavigation from '../commonComponents/CompleteNavigation'
import ScreenSize from "../commonComponents/ScreenSize";
import {useEffect, useRef, useState, useContext} from 'react';
import FinishButton from '../commonComponents/FinishButton';
// import NavigationButtons from '../commonComponents/NavigationButtons';
import ProgressBar from '../commonComponents/ProgessBar';
import Context from './Context'
import NavigationButtons from '../commonComponents/NavigationButtons';

const ComponentQuiz = (props) => {
    const questions = props.dataQuestions.questions;
    const shownQuestionsNumber = parseInt(props.dataQuestions.shownQuestionsNumber);

    const pagesNumber = Math.ceil(questions.length/shownQuestionsNumber);

    const {startIndex} = useContext(Context);
    const {setStartIndex} = useContext(Context);
    const {setActiveIndex} = useContext(Context);

    // INIT ARRAY FOR PAGE SELECT
    const selectOptions = Array.from({length: pagesNumber}).map((option, index) => `Page-${(index + 1)}`); 
    // 
      
    // NAVIGATION ARROW BUTTONS HANDLER
    const handlerArrowButtonCLick =(direction_button)=> {
        let i = 0;

        if (direction_button === "backward-button" && startIndex > 0)
            i = startIndex - 1;
        else if(direction_button === "forward-button" && startIndex < pagesNumber - 1)
            i = startIndex + 1;

        if( i >= 0){
            setStartIndex(i); 
            setActiveIndex(i);
            setSelectedValue(selectOptions[i]);
        }           
    }
    //

    // NAVIGATION SELECT HANDLER
    const [selectedValue, setSelectedValue] = useState("");

    const handlerSelectionChange =(e)=> {
        setStartIndex(e.target.selectedIndex - 1);
        setActiveIndex(e.target.selectedIndex - 1); 
        setSelectedValue(e.target.value); 
    }
    //
   
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

    const arrowButton = (direction_button, content_text) => {
        return <button className={elementWidth > 700 ?
            `${direction_button}` :
            `${direction_button} minimal-button`}
            onClick={()=>handlerArrowButtonCLick(direction_button)}>
            <span>{content_text}</span>
        </button>;
    }

    const progressNavBar = (progress) => {
        if(width - 300 <= 1050 && width > 758){         
            return (
            <>
                <div className="wrapper__complete panel panel-sm drop-shadow"
                    style={{
                        paddingTop: "0px",
                        paddingBottom: "10px",
                        width: "fit-content",
                        height: "fit-content"
                    }}>
                    <div style={{
                        display: "inline-block",
                        margin: "10px 0 10px 0",
                        width: "175px"
                    }}>
                        <ProgressBar progress={progress} showTytle="true"/>
                    </div>
                    <div style={{
                        marginLeft: "30px",
                        width: "fit-content",
                        display: "inline-block"
                    }}>
                        <NavigationButtons  pagesNumber = {pagesNumber}/>
                    </div>
                </div>
            </>
            );
        }
        else if(width <= 758 && width > 576){
            return (
                <>
                <div className="wrapper__complete panel panel-sm drop-shadow"
                    style={{
                        paddingTop: "0px",
                        paddingBottom: "10px",
                        width: "fit-content",
                        height: "fit-content"
                    }}>
                    <div style={{
                        margin: "10px 0 10px 0",
                        width: "100%",
                        maxWidth: "215px"
                    }}>
                        <ProgressBar progress={progress} showTytle="false"/>
                    </div>
                    <div style={{
                        width: "fit-content",
                        minWidth: "215px",
                        textAlign: "right"
                    }}>
                        <NavigationButtons  pagesNumber = {pagesNumber}/>
                    </div>
                </div>
            </>
            )
        }
        else if(width <= 576){
            return (
            <div 
                style={{
                    margin: "10px 0 10px 0",
                    width: "fit-content"
                }}>
                <div style={{
                    width: "100%",
                    marginBottom: "10px"
                }}>
                    <ProgressBar progress={progress} showTytle="false"/>
                </div>
                <div style={{
                    width: "fit-content",
                    minWidth: "215px",
                    textAlign: "right"
                }}>
                    <NavigationButtons  pagesNumber = {pagesNumber}/>
                </div>
            </div>
            )
        }
    }

     return(
        <>
            <div className="wrapper__quiz">
                <div className="wrapper__quiz-title">
                    <div style = {{flexGrow: "1"}}>
                        <div className="quiz__title h-1">Quiz</div>
                        <div className="quiz__subtitle p">Ready to go?</div>
                    </div>
                    {progressNavBar("80")}
                </div>
                <div className="wrapper__questions panel drop-shadow"                            
                    style={{position: "relative"}}>
                    {questions.map((item, index) => 
                    <div ref={ref}>
                        <div 
                            className={
                                index >= startIndex * shownQuestionsNumber &&
                                index < (startIndex + 1) * shownQuestionsNumber ?
                                "" : "visualy-hidden"
                            }
                            key={index} 
                            style={{marginBottom: "30px"}}>
                                <Question 
                                    number = {index + 1} 
                                    item = {item} 
                                    elementWidth = {elementWidth}
                                />
                        </div>
                    </div>
                    )}
                    {width - 300 > 1050 ? <CompleteNavigation progress="80" pagesNumber = {`${pagesNumber}`}/> : <></>}
                    <div style={{marginTop: "30px", textAlign: "right"}}>
                        <FinishButton/>  
                    </div>
                    <div className="bottom-controls__wrapper">
                        {arrowButton("backward-button", "Forum netiquette")} 
                        {/* PAGE SELECT */}
                        <select className="jump-to-select drop-shadow" 
                            value={selectedValue}
                            onChange={handlerSelectionChange}>
                                <option disabled={true} value="">Jump to..</option>
                                {selectOptions.map((item, index) => 
                                <option value={`Page-${index + 1}`} 
                                    key={index}>
                                        {`Page-${index + 1}`}
                                </option>)}
                        </select>
                        {/*  */}
                        {arrowButton("forward-button", "Share examples of digital...")} 
                    </div>
                </div>
            </div>        
        </>
    )
}

export default ComponentQuiz;