import '../styles.css';
import {useState} from 'react';



const MatchQuestion = (props) => {
    const content = props.item;
    var inputClass = "input drop-shadow";
    var buttonClass = "button question-button p"

    const [focused, setFocusOn] = useState();
    const [usedAnswers, addAnswer] = useState("");
    const [answers] = useState(new Array(content.statements.length));

    const setFocused = (index) => {
        setFocusOn(index);
    }

    const asignAnswer = (item) =>{
        if(!usedAnswers.includes(item) && focused !== undefined){
            var str = usedAnswers + item;
            addAnswer(str);
            if(answers[focused] !== "")                  
                    addAnswer(str.replace(answers[focused], ""))
            answers[focused] = item;
            setFocusOn(undefined);
        }
    }
    
    const isUsed = (item) => {
        return usedAnswers.includes(item) ?
        buttonClass + " button-active" :
        buttonClass;
    }

       return(
        <>
            {content.statements.map((item, index)=>(
                <div key={index}
                    style={{
                        caretColor: "transparent",
                        marginBottom: "25px"}}>
                    <p className="p"
                        style={{ 
                            display: "inline-block", 
                            marginRight: "30px",      
                        }}>
                        {item}
                    </p>
                    <input 
                        className={
                            index !== focused ?
                            inputClass : 
                            inputClass + " input-active"
                        }
                        style = {{textAlign: "center"}} 
                        type="text" 
                        id={index}
                        onClick={() => setFocused(index)}
                        readOnly = {true}
                        defaultValue = {answers[index]}
                    />
                </div>

            ))}
            <div style={{marginBottom: "15px"}}>
                {content.variants.map((item, index)=>(
                    <button 
                        className={`${isUsed(item)}`}
                        style={{display: "inline-block"}}
                        key={index}
                        onClick={() => asignAnswer(item)}>
                        {item}
                    </button>
                ))}
            </div>
        </>
    )
}

export default MatchQuestion;