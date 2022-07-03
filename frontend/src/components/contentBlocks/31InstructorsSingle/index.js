import React from 'react';
import './instructorsSingle.css';

const instructorsSingle = () => {
    return (
        <div className="container content__course-inset">
            <div className="content__instructors-title"> 
                <div className="instructors-title__logo-block">
                    <div className="logo-block__social">
                        <div className="content__instructors-social social__facebook-logo">
                            <a href="" target="_blank"></a>
                        </div>
                        <div className="content__instructors-social social__twitter-logo">
                            <a href="" target="_blank"></a>
                        </div>
                        <div className="content__instructors-social social__instagram-logo">
                            <a href="" target="_blank"></a>
                        </div>
                        <div className="content__instructors-social social__linkedin-logo">
                            <a href="" target="_blank"></a>
                        </div>
                    </div>
                    <div className="logo-block__instructor-images">
                        <div className="logo-block__instructor-images-photo"></div>
                    </div>
                    <div className="logo-block__share">
                        <a className="share__report" href="" target="_blank">Report This Author</a>                          
                    </div>
                </div>
                <div className="instructors-title__info-block">
                    <div className="info-block__instructor-name">Kathelen Monero</div>
                    <div className="info-block__instructor-specialty">UI Designer</div>
                </div>
                <div className="instructors-title__icon-block"> 
                    <div className="icon-blocks icon-block__reviews">
                        <div className="icon-block-img reviews__icon"></div>
                        <div className="reviews__counter">553 Revievs</div>
                    </div>
                    <div className="icon-blocks icon-block__rating">
                        <div className="icon-block-img rating__icon"></div>
                        <div className="rating__counter">4.87 rating</div>
                    </div>
                    <div className="icon-blocks icon-block__top-teacher">
                        <div className="icon-block-img top-teacher__icon"></div>
                        <div className="top-teacher__status">Top teacher</div>
                    </div>
                    <div className="icon-blocks icon-block__courses">
                        <div className="icon-block-img courses__icon"></div>
                        <div className="courses__counter">29 courses</div> 
                    </div>
                </div>
                <button className="instructor-single">send message</button>
            </div>
        </div>
    )
}

export default instructorsSingle;