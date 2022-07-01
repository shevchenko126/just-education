import "./styles.css"
import CourseCard from "../CourseCard";

/// *** FOR NEXT USING TO FILL LIST ***

// let cardCount = 0;

// const PushCard = () => {
//         for(var i=0; i < cardCount; i++){
            
//         }
//     return(
//         <></>
//     )
// }

/// ***


const ListCards = (count) => {
    
    var translate = 0;
    return(
        <div className="cources__slider">
            <div className="cources__slider-cards" style={{"transform": `translateX(${translate}})`}}>
                <CourseCard cardId="c1" status="-" raiting="3" lessons="4" hours="2" minutes="12" oldPrice="959" newPrice="415.99"/>
                <CourseCard cardId="c2" status="0" raiting="4" lessons="5" hours="5" minutes="13" oldPrice="848" newPrice="315.99"/>
                <CourseCard cardId="c3" status="1" raiting="5" lessons="2" hours="6" minutes="42" oldPrice="636" newPrice="215.99"/>
                <CourseCard cardId="c4" status="-" raiting="3" lessons="3" hours="7" minutes="15" oldPrice="747" newPrice="315.99"/>
                <CourseCard cardId="c5" status="0" raiting="4" lessons="3" hours="8" minutes="32" oldPrice="1000" newPrice="499.99"/>
            </div>
        </div>
)}

export default ListCards;
