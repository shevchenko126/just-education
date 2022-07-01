import "./styles.css"
import parse from 'html-react-parser';

var row = "";

var starState = "";

const RaitingStars = ({raiting}) => {

    for(var i=0; i < 5; ++i){
        i < raiting ? starState = "-checked" : starState = ""; 
        row += `<div className="rating-star star${starState}"></div>`;
    }

 return(
            <>
                {parse(`${row}`)}
                {row = ""}
            </>
)}

export default RaitingStars;
