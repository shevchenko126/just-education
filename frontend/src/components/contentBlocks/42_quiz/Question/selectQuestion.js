import '../styles.css';
import {useState} from 'react';

const SelectQuestion = (props) => {

    const variants = props.item.variants;
    const currentWidth = props.elementWidth - 60;
    console.log(currentWidth);

    const [value, setValue] = useState("");
     
    // UPDATE SELECT VALUE
    const handlerChange = (e) => {
        setValue(e.target.value);
	}; 
    //
    
    return(
        <>
            <ul className="list__style-none">                          
                {variants.map((item, index)=>(
                    <div key={`${index}`}
                        style={{
                                marginBottom: `${index === variants.length - 1 ?
                                    "15px" : "0"}`
                        }}>
                        <p className="button-back"
                            style={{
                                width: `${currentWidth > 520 ?
                                    "calc(100% - 200px - 20px)" :
                                    "100%"}`
                                }}
                            >{item.statement}                   
                        </p>
                        <select className="choose-select drop-shadow" value={value} onChange={handlerChange}>
                            <option disabled={true} value="">Choose..</option>
                            {item.options.map((item, index) => 
                            <option value={item}  key={`${index}`}>
                                {item}
                            </option>)}
                        </select>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default SelectQuestion;