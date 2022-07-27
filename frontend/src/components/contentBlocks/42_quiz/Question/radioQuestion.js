import {useState} from 'react';

const RadioQuestion = (props) => {

    const variants = props.item.variants;
    const isMarked = props.isMarked;
    const isClearable = props.isClearable;
    
    const [checked, setChecked] = useState(null);

    const [visited, setStyle] = useState("");

    const resetChecked = (e) => {
        setChecked(() => {
            if(checked) setChecked(false);
        });
    };

    // SHOW A LETTER (a, b, c, ...) AFTER RADIO CONTROL
    const showMark = (index) => {
        return(
            <p className="h-3">{String.fromCharCode(97 + index)}.</p>
        )
    }
    //

    // SHOW "Clear my choise" OPTION
    const showClear = () => {
        return(
            <p className={`clear-choise ${visited}`} onClick={() => {
                resetChecked(); 
                changeStyle("cleared")
                }
            }
        >Clear my choice
        </p>
        )
    }
    //

    const changeStyle =(state) => setStyle(state);
  
    return(
        <>
            <div className="list__title p">Select one:</div>
            <ul className="list__style-none">                          
            {variants.map((item, index)=>(
                <li className="list__item" key={index}>
                    <label>
                        <input
                            type="radio" id={index + 1}
                            checked={checked === item}
                            onChange={() => {
                                setChecked(item); 
                                changeStyle("");
                            }
                        }
                    />
                    </label>
                    {isMarked === "true" ? showMark(index) : <></>}
                    <p className="p">{item}</p> 
                </li>
            ))}
            </ul>
            {isClearable === "true" ? showClear() : <></>}
        </>
    )
}

export default RadioQuestion;