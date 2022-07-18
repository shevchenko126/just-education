import '../styles.css';
import {useState} from 'react';


const MatchQuestion = (props) => {
    var inputClass = "input drop-shadow";
    const content = props.item;
    const width = props.width;

    const [answer, setAnswer] = useState();
    const [focused, setFocusOn] = useState();

    const [answers] = useState([]);
    answers.length = content.statements.length;
    for(var i = 0 ; i++ ; i < answers.length)
    {
        answers[i] = "";
    }
    const [usedAnswers, addAnswer] = useState("");

    const setFocused = (index) => {
        setFocusOn(index);
    }

    const asignAnswer = (item) =>{
        if(!usedAnswers.includes(item)){
            var str = usedAnswers + item;
            addAnswer(str);
            setAnswer(item);
            if(answers[focused] !== "")                  
                    addAnswer(str.replace(answers[focused], ""))
            answers[focused] = item;
        }
    }

    return(
        <>                    
        {content.statements.map((item, index)=>(
            <div key={`${content.id}s${index}`}>
                <p className="p"
                    style={{ display: "inline-block", marginRight: "30px"}}>
                    {item}
                </p>
                <input 
                className={index !== focused ? inputClass : inputClass + "input-active"} 
                type="text" id={`${content.id}i${index}`}
                onClick={() => setFocused(index)}
                readOnly = {true}
                defaultValue = {answers[index]}
                />
            </div>

        ))}
        <div style={{marginBottom: "15px"}}>
            {content.variants.map((item, index)=>(
                <button className="button question-button p" 
                    style={{display: "inline-block"}}
                    key={`${content.id}v${index}`}
                    onClick={() => asignAnswer(item)}>
                    {item}
                </button>
            ))}
        </div>
        </>
    )
}

export default MatchQuestion;