
import "./styles.css"
import { useState } from "react";
import dataCards from "./dataCards";
import CourseCard from "../CourseCard";


const ListCards = () => {
    
    var maxIndex = dataCards.length - 1;
    var leftIndex = 0;
    var rightIndex = leftIndex + 2;
    var step = -400;
    
    const [distance, calcDist] = useState(0);
    const pointCard = (index) => {
        console.log(index);
        // if (index === 0 || 
        //     (index === 1 && leftIndex === 0) ||
        //     index === maxIndex || 
        //     (index === maxIndex - 1 && rightIndex === maxIndex)){
        //     calcDist(0)
        // }
        
    }
    return(
        <div className="cources__slider">
            <div className="cources__slider-cards" style={{"transform": `translateX(${distance}px)`}}>
            {dataCards.map((item, index) => 
            // <div className="courses__card"
            // onClick = {() => pointCard(index)}
            // key={index}
            // >{index + 1}</div> 

            <CourseCard 
            cardId = {item.cardId} 
            status = {item.status} 
            raiting = {item.raiting} 
            lessons = {item.lessons}
            hours = {item.hours}
            minutes = {item.minutes}
            oldPrice = {item.oldPrice}
            newPrice = {item.newPrice}
            onClick = {() => pointCard(index)}
            key={index}/>
            )}
            </div>
        </div>
)}

export default ListCards;
