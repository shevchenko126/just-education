import {useState} from 'react';

const SelectQuestionSelect = ({item}) => {

    const [selectedValue, setSelectedValue] = useState("");
    
    // UPDATE SELECT VALUE
    const handlerChange = (e) => {
        setSelectedValue(e.target.value);
	}
    //
    
    return(
        <>
            <select className="choose-select drop-shadow" value={selectedValue} onChange={handlerChange}>
                <option disabled={true} value="">Choose...</option>
                {item.options.map((item, index) => 
                <option value={item} key={index}>
                    {item}
                </option>)}
            </select>
        </>
    )
}

export default SelectQuestionSelect;