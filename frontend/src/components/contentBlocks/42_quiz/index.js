import './styles.css';
import Question from './Question';
import {useState} from 'react';


const Quiz = (props) => {
    const questions = props.questions;

    const [value, setValue] = useState();
    
    const handlerChange = (e) => {
        setValue(e.target.value);
	};
    
    
    const radioQuestions = ["A tweet", "A hashtag", "A tag"];
    const [checked, setChecked] = useState(null);

    return(
        <div className="container__quiz">
            <div className="quiz__title h-1">Quiz</div>
            <div className="quiz__subtitle p">Ready to go?</div>
            <div className="container__questions">
                {questions.map((item, index) => 
                <Question number = {index + 1} item = {item} key = {index}/>)}
                {/* <div className="question__item">
                    <div className="question__item-question">
                        <div className="question__attributes">
                            <div className="question__attributes-title h-3">Question #</div>
                            <div className="question__attributes-interact p">
                                <div>Flag Question</div>
                                <div>Edit Question</div>
                            </div>
                        </div>
                        <div className="question_properties p">
                            <div>Not yet answered</div>
                            <div>Marked out of 1.00</div>
                        </div>
                        <div className="question__subject h-2">You are watching the TV news and see this appear on the screen:</div>
                    </div>
                    <div className="question__item-unswer">
                        <div className="list__title p">Select one:</div>
                        <ul class="list__style-none">                          
                        {radioQuestions.map((item, index)=>(
                            <li className="list__item" key={item}>
                                <label>
                                    <input
                                        type="radio" name="222" id={index + 1} key={item}
                                        checked={checked === item}
                                        onChange={() => setChecked(item)
                                        }
                                    />
                                </label>
                                <p className="h-3">{String.fromCharCode(97 + index)}.</p>
                                <p className="p">{item}</p> 
                            </li>
                        ))}
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Quiz;