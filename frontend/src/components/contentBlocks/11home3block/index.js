import './styles.css';
import ListCards from '../commonComponents/ListCards';
import Dots from '../commonComponents/Dots';

const FeaturedCourses = () => {
    return(
         <section className="coursers">
            <div className="coursers__background-image">
                <div className="courses__container">
                    <div className="courses__title">
                        <h1>featured courses</h1>
                        <h3>discover your perfect drogram in our courses.</h3>
                    </div>
                    <ListCards count="5"/>
                    <Dots count="5"/>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCourses;