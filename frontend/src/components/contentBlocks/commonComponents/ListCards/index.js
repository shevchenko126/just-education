import "./styles.css"
import { useState } from "react";
import CourseCard from "../CourseCard";
import ScreenSize from "../ScreenSize";

const ListCards = (props) => {

    var dataCards = props.dataCards;
    var length = dataCards.length;
    var step = -400;

    var width = ScreenSize().width;

    const [cols, setCols] = useState(width <= 830 ? 0 : width <= 1230 ? 1 : 2);
   
    const [distance, setDist] = useState(0);
    const [selectedDot, setSelected] = useState(0);

    const [leftIndex, setLeft] = useState(0);
    const [rightIndex, setRight] = useState(cols);

    const pointCard = (index) => {
        setSelected(index);
        moveDots(index);     
    }

    const moveDots = (dotIndex) => {

        width <= 830 ? setCols(0) : 
        width <= 1230 ? setCols(1) : setCols(2)

        setSelected(dotIndex);   

        if(dotIndex > rightIndex){
            setRight(dotIndex);
            setLeft(dotIndex - cols);
            setDist((dotIndex - cols) * step);
        }
        else if (dotIndex < leftIndex){
            setLeft(dotIndex);            
            setRight(dotIndex + cols);
            setDist(dotIndex * step);
        }        
    }
    
    const updateWidthValue = () => {
        if (width <= 830) return 400;
        if (width <= 1230) return 800;
        return 1200;
    }
    var widthValue = updateWidthValue();
  
    return(        
        <>
            <div className="cources__slider"  style={{width: `${widthValue}px`}}>
                <div className="cources__slider-cards" style={{transform: `translateX(${distance}px)`, width: `${length * -step}px`}}>

                {dataCards.map((item, index) => 
                <CourseCard 
                card = {item}
                onClick = {() => pointCard(index)}
                key={index}
                className={
                    selectedDot ===  index ? "courses__card pointed" : "courses__card"}/>
                )}
                </div>
            </div>
            <div className="dots">
                {Array.from({length}).map((item, index) => 
                <div 
                    className={selectedDot === index ? "dot selected" : "dot"} 
                    onClick={() => moveDots(index)} key = {index}>
                </div>)}
            </div>
        </>
)}

export default ListCards;