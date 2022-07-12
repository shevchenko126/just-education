import './styles.css';
import RaitingStars from '../RatingStars'
// import { attributesToProps } from 'html-react-parser';

const CourseCard = (props) => {
        const card = {
            item:  props.card.cardId, 
            status:  props.card.status,
            starsNo:  props.card.starsNo,
            raiting:  props.card.raiting,
            reviews:  props.card.reviews ,
            lessons:  props.card.lessons,
            hours:  props.card.hours,
            minutes:  props.card.minutes,
            oldPrice:  props.card.oldPrice,
            newPrice:  props.card.newPrice,
            className: props.className
        };

        console.log(card.reviews);

        let statusClass = "";
        card.status === "0" ? statusClass = "label-best_seller" : (
        card.status === "1" ? statusClass = "label-featured" : statusClass = "label-none"
        );

    return(
        <div className={card.className} id={card.cardId}>
        <div className="courses__card-background">
            <a href="#" title="Course...">
                <img src={("/images/surface.png")} alt="Course" id="card-bacground"/>
            </a>
            <a href="#" title="Instructor...">
                <img src={("/images/surface.png")} alt="Instructor" className="courses__card-instructor" id="card-instructor"/>
            </a>
            <div className="views-likes">
                <div className="view"></div>
                <div className="like"></div>
            </div>
            <div className={`label ${statusClass}`} id="label-featured"></div> 
        </div>
        <div className="text-block">
            <a href="#" title="Subject..." className="courses__card-sabject">Photography</a>
            <a href="#" title="Course..." className="courses__card-title">feshion photography from professional</a>
            <div className="courses__card-attributes">
                <div className="attributes__raiting">
                    <div className="attributes__raiting-item">
                        <RaitingStars raiting={card.starsNo}/>
                    </div> 
                    <div className="attributes__raiting-item">{card.raiting}</div>
                    <div className="attributes__raiting-item item-reviews">{card.reviews}</div>
                </div>
                <div className="attributes__durations-prices">
                    <div className="attributes__durations">
                        <div className="attributes__duration readers" id="lessons">{card.lessons}</div>
                        <div className="attributes__duration hours" id="hours">{card.hours}</div>
                        <div className="attributes__duration minutes" id="minutes">{card.minutes}</div>
                    </div>
                    <div className="attributes__prices">
                        <div className="old-price">{card.oldPrice}</div>
                        <div className="new-price">{card.newPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CourseCard;