
import "./styles.css"
import { useState } from "react";
import CourseCard from "../CourseCard";

const ListCards = (props) => {

    var dataCards = props.dataCards;
    
    var maxIndex = dataCards.length - 1;
    var leftIndex = 0;
    var rightIndex = leftIndex + 2;
    var step = -400;
    var last
    
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

    const [selectedDotIndex, setIndex] = useState(0);
    const moveDots = (dotIndex) => {
        console.log(dotIndex);
        setIndex(dotIndex);

    }
  
    return(
        <>
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
                starsNo = {item.starsNo} 
                raiting = {item.raiting}
                reviews = {item.reviews} 
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
            <div className="dots">
                {Array.from({length : 5}).map((item, index) => 
                <div 
                className={selectedDotIndex === index + 1 ? "dot selected" : "dot"} 
                onClick={() => moveDots(index + 1)} key = {index + 1}>
            </div>)}
        </div>
        </>
)}

export default ListCards;
