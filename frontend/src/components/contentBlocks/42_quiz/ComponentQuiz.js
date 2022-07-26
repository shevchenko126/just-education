import {useEffect, useRef, useState, useContext} from 'react';
import Question from './Question';
import CompleteNavigation from '../commonComponents/CompleteNavigation'
import FinishButton from '../commonComponents/FinishButton';
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
        return(
            <div className="wrapper__progress-nav">
                <div className="panel-override panel-sm-override drop-shadow-override">
                <div className="wrapper-progress">
                    <ProgressBar progress={progress}/>
                </div>
                <div className="wrapper-nav-buttons">
                    <NavigationButtons  pagesNumber = {pagesNumber}/>
                </div>
            </div>
        </div>
        )
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
                <div style={{display:"flex"}} >
                    <div className="wrapper__questions panel drop-shadow">
                        {questions.map((item, index) => 
                        <div ref={ref} key={index}>
                            <div 
                                className={
                                    index >= startIndex * shownQuestionsNumber &&
                                    index < (startIndex + 1) * shownQuestionsNumber ?
                                    "" : "visualy-hidden"
                                }                                
                                style={{marginBottom: "30px"}}>
                                    <Question 
                                        number = {index + 1} 
                                        item = {item} 
                                        elementWidth = {elementWidth}
                                    />
                            </div>
                        </div>
                        )}
                        <div style={{marginTop: "30px", textAlign: "right"}}>
                            <FinishButton/>  
                        </div>
                        <div className="wrapper__bottom-controls">
                            {arrowButton("backward-button", "Forum netiquette")} 
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
                            {arrowButton("forward-button", "Share examples of digital...")} 
                        </div>
                    </div>
                    <div className="wrapper__complete-navigation">
                        <CompleteNavigation progress="80" pagesNumber = {`${pagesNumber}`}/>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default ComponentQuiz;