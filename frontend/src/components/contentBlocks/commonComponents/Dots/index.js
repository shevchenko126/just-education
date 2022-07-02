import "./styles.css"
// import {pointCard} from "../ListCards"
import { useState } from "react";


const Dots = () => { 

    const [selectedDotIndex, setIndex] = useState(0);
    const moveDots = (index) => {
        console.log(index);
        setIndex(index);
    }
   
    return(
        <div className="dots">
            {Array.from({length : 5}).map((item, index) => 
            <div 
            className={selectedDotIndex === index + 1 ? "dot selected" : "dot"} 
            onClick={() => moveDots(index + 1)} key = {index + 1}>
            </div>)}
        </div>
)}
export default Dots;
