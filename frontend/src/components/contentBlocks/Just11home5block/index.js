import React from 'react';
import './just11home5block.css';

const index = () => {
  return (
    <div className="reviews">
    <div className="reviews__title">
        <h1>What Our Students Have To Say</h1>
        <p>Discover Your Perfect Program In Our Courses.</p>
    </div>
    <div className="reviews__text">
        <p>I Believe In Lifelong Learning And Skola Is A Great Place To Learn From Experts. I've Learned A Lot And Recommend It To All My Friends.Programs Are Available In Fall, Spring, And Summer Semesters. Many Fall And Spring Programs Offer Similar Shorter Programs In The Summer, And Some May Be Combined For A Full Academic Year.</p>
    </div>
    <div className="reviews__studends">
        <div className="reviews__studends container d-flex justify-content-around">
            <div className="reviews__studends-block d-flex align-items-center">
                <div className="students-block__img reviews__info_1"></div>
                <div className="reviews__students-person">
                    <h2>Albert Cole</h2>
                    <p>Designer</p>
                </div>
            </div>
            <div className="reviews__studends-block d-flex align-items-center">
                <div className="students-block__img reviews__info_2"></div>
                <div className="reviews__students-person">
                    <h2>Alison Dawn</h2>
                    <p>WordPress Developer</p>
                </div>
            </div>
            <div className="reviews__studends-block d-flex align-items-center">
                <div className="students-block__img reviews__info_3"></div>
                <div className="reviews__students-person">
                    <h2>Daniel Parker</h2>
                    <p>Front-Еnd Developer</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
export default index;
