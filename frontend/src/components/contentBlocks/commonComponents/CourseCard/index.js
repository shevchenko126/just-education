import './styles.css';

const CourseCard = ({
    cardId,
    status,
    lessons,
    hours,
    minutes,  
    oldPrice,  
    newPrice }) => {

        let statusClass = "";
        status === "0" ? statusClass = "label-best_seller" : (
        status === "1" ? statusClass = "label-featured" : statusClass = "label-none"
        );

    return(
        <a href="#" className="courses__card" id={cardId} title="Course...">
        <div className="courses__card-background">
            <img src={("/images/card_bg.png")} alt="Course" id="card-bacground"/>
            <img src={("/images/instructor_bg.png")} alt="Instructor" className="courses__card-instructor" id="card-instructor"/>
            <div className="views-likes">
                <div className="view"></div>
                <div className="like"></div>
            </div>
            <div className={`label ${statusClass}`} id="label-featured"></div> 
        </div>
        <div className="text-block">
            <p className="courses__card-sabject">Photography</p>
            <div className="courses__card-title">feshion photography from professional</div>
            <div className="courses__card-attributes">
                <div className="attributes__raiting">
                    <div className="attributes__raiting-item">
                        <div className="rating-star star-checked"></div>
                        <div className="rating-star star-checked"></div>
                        <div className="rating-star star-checked"></div>
                        <div className="rating-star star-checked"></div>
                        <div className="rating-star star"></div>
                    </div> 
                    <div className="attributes__raiting-item">4.87</div>
                    <div className="attributes__raiting-item reviews">3.8</div>
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
    </a>
    )
}

export default CourseCard;