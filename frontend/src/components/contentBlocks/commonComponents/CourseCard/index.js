import './styles.css';
import RaitingStars from '../RatingStars'

const CourseCard = ({
    cardId,
    status,
    lessons,
    starsNo,
    raiting,
    reviews,
    hours,
    minutes,  
    oldPrice,  
    newPrice,
    className
    }) => {

        let statusClass = "";
        status === "0" ? statusClass = "label-best_seller" : (
        status === "1" ? statusClass = "label-featured" : statusClass = "label-none"
        );

    return(
        <div className={className} id={cardId}>
        <div className="courses__card-background">
            <a href="#" title="Course...">
                <img src={("/images/card_bg.png")} alt="Course" id="card-bacground"/>
            </a>
            <a href="#" title="Instructor...">
                <img src={("/images/instructor_bg.png")} alt="Instructor" className="courses__card-instructor" id="card-instructor"/>
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
                        <RaitingStars raiting={starsNo}/>
                    </div> 
                    <div className="attributes__raiting-item">{raiting}</div>
                    <div className="attributes__raiting-item reviews">{reviews}</div>
                </div>
                <div>
                    <div className="attributes__durations">
                        <div className="attributes__duration readers" id="lessons">{lessons}</div>
                        <div className="attributes__duration hours" id="hours">{hours}</div>
                        <div className="attributes__duration minutes" id="minutes">{minutes}</div>
                    </div>
                    <div className="attributes__prices">
                        <div className="old-price">{oldPrice}</div>
                        <div className="new-price">{newPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CourseCard;