import '../styles.css';
import {useState} from 'react';


const RadioQuestion = (props) => {

    const variants = props.item.variants;

    const [checked, setChecked] = useState(null);
    return(
        <>
        <div className="list__title p">Select one:</div>
        <ul className="list__style-none">                          
        {variants.map((item, index)=>(
            <li className="list__item" key={`${index}-${item}`}>
                <label>
                    <input
                        type="radio" id={index + 1}
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
        </>
    )
}

export default RadioQuestion;