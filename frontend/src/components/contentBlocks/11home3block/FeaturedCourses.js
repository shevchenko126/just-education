import './FeaturedCourses.css';
import './css/colors.css'

function FeaturedCourses() {
    return(
         <section className="coursers">
            <div className="coursers__background-image">
                <div className="courses__container">
                    <div className="courses__title">
                        <h1>featured courses</h1>
                        <h3>discover your perfect drogram in our courses.</h3>
                    </div>
                    <div className="cources__slider">
                        <div className="cources__slider-cards">
                            <a href="#" className="courses__card" id="card-1" title="Course...">
                                <div className="courses__card-background">
                                    <img src={require("./img/card_bg.png")} alt="Course" id="card-bacground"/>
                                    <img src={require("./img/instructor_bg.png")} alt="Instructor" className="courses__card-instructor" id="card-instructor"/>
                                    <div className="views-likes">
                                        <div className="view"></div>
                                        <div className="like"></div>
                                    </div>
                                    <div className="label label-best_seller" id="label-best_seller"></div>
                                    <div className="label label-featured" id="label-featured"></div>  
                                </div>
                                <div className="text-block">
                                    <p className="courses__card-sabject">Photography</p>
                                    <div className="courses__card-title">feshion photography from professional</div>
                                    <div className="courses__card-attributes">
                                        <div className="attributes__raiting">
                                            <div className="attributes__raiting-item">
                                                <div className="rating-star star-checked" id="raiting-star"></div>
                                                <div className="rating-star star-checked" id="raiting-star"></div>
                                                <div className="rating-star star-checked" id="raiting-star"></div>
                                                <div className="rating-star star-checked" id="raiting-star"></div>
                                                <div className="rating-star star-checked" id="raiting-star"></div>
                                            </div> 
                                            <div className="attributes__raiting-item">4.87</div>
                                            <div className="attributes__raiting-item reviews">3.8</div>
                                        </div>
                                        <div>
                                            <div className="attributes__durations">
                                                <div className="attributes__duration readers" id="lessons">5</div>
                                                <div className="attributes__duration hours" id="hours">8</div>
                                                <div className="attributes__duration minutes" id="minutes">12</div>
                                            </div>
                                            <div className="attributes__prices">
                                                <div className="old-price" id="old-price">959</div>
                                                <div className="new-price" id="new-price">415.99</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="courses__card" id="card-2"></a>
                            <a href="#" class="courses__card" id="card-3"></a>
                            <a href="#" class="courses__card" id="card-4"></a>
                            <a href="#" class="courses__card" id="card-5"></a>
                        </div>
                    </div>
                    <div className="dots">
                        <div className="dot" onClick="pointCard(1)"></div>
                        <div className="dot" onClick="pointCard(2)"></div>
                        <div className="dot" onClick="pointCard(3)"></div>
                        <div className="dot" onClick="pointCard(4)"></div>
                        <div className="dot" onClick="pointCard(5)"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCourses;