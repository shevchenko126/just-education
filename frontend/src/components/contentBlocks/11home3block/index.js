import './styles.css';
import CourseCard from '../commonComponents/CourseCard'

const FeaturedCourses = () => {
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
                            <CourseCard cardId="c1" status="-" lessons="4" hours="2" minutes="12" oldPrice="959" newPrice="415.99"/>
                            <CourseCard cardId="c2" status="0" lessons="5" hours="5" minutes="13" oldPrice="848" newPrice="315.99"/>
                            <CourseCard cardId="c3" status="1" lessons="2" hours="6" minutes="42" oldPrice="636" newPrice="215.99"/>
                            <CourseCard cardId="c4" status="-" lessons="3" hours="7" minutes="15" oldPrice="747" newPrice="315.99"/>
                            <CourseCard cardId="c5" status="0" lessons="3" hours="8" minutes="32" oldPrice="1000" newPrice="499.99"/>
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