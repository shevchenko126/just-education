import {useState} from 'react';
import SelectQuestionSelect from './selectQuestionSelect.js';

const SelectQuestion = (props) => {

    const variants = props.item.variants;
    const currentWidth = props.elementWidth - 60;

    const selectedValues = Array.from({length: variants.length});
    
    // UPDATE SELECT VALUE
    const handlerChange = (e, index) => {
        selectedValues[index.index]=(e.target.value);
	}
    //
    
    return(
        <>
            <ul className="list__style-none">                          
                {variants.map((item, index)=>(
                    <div key={index}
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
                        <SelectQuestionSelect item={item}></SelectQuestionSelect>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default SelectQuestion;