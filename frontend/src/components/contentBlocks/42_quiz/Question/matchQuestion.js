import '../styles.css';
import {useState} from 'react';


const MatchQuestion = (props) => {

    const variants = props.item.variants;
    const statements = props.item.statements;

    const [textFild, setTextFild] = useState();
    const [focused, setFocusOn] = useState(0);

    const setFocused = (index) => {
        setFocusOn(index);
    }

    return(
        <>                      
        {statements.map((item, index)=>(
            <div key={`${index}-${item}`}>
                <p className="p"
            style={{ display: "inline-block", marginRight: "30px"}}
                >
                {item}
            </p>
                <input className="input" type="text" id={index}
                onClick={() => setFocused(index)}
                value = {focused === index ? "true" : "false"}
                />
            </div>

        ))}
        <div style={{marginBottom: "30px"}}>
            {variants.map((item, index)=>(
                <button className="button p" 
                    style={{display: "inline-block"}}
                    key={`${index}-${item}`}>
                    {item}

                </button>
            ))}
        </div>
        </>
    )
}

export default MatchQuestion;