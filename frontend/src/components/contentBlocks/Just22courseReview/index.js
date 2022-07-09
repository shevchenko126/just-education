import React from 'react';
import './style.css';

const index = () => {
  return (
    <div className="main-wrap">
    <div className="review-container col-sm-1 col-md-2 col-lg-3">
      <section className="review-wrap">
        <h2 className="review_title">Student feedback</h2>
        <div className="review_rate-wrap">
          <div className="rate_general">
            <p className="general_number">4.93</p>
            <p className="rate_description">Course rating</p>
            <div className="rate_stars">
              <img src="images/star_colored_s.svg" alt="gold star" className="star_item"/>
              <img src="images/star_colored_s.svg" alt="gold star" className="star_item"/>
              <img src="images/star_colored_s.svg" alt="gold star" className="star_item"/>
              <img src="images/star_colored_s.svg" alt="gold star" className="star_item"/>
              <img src="images/star_colored_s.svg" alt="gold star" className="star_item"/>
            </div>
          </div>

          <div className="rate_visual">
            <div className="visual_items">
              <div className="visual_lines">
                <div className="line_colored" style={{width: "92%"}}></div>
              </div>
              <div className="visual_stars">
                <img src="images/star_colored_b.svg" alt="gold star" className="star_colored"/>
                <img src="images/star_colored_b.svg" alt="gold star" className="star_colored"/>
                <img src="images/star_colored_b.svg" alt="gold star" className="star_colored"/>
                <img src="images/star_colored_b.svg" alt="gold star" className="star_colored"/>
                <img src="images/star_light.svg" alt="white star" className="star_empty"/>
              </div>
              <div className="visual_number">
                <p className="number">4132</p>
              </div>
            </div>
            <div className="visual_items">
              <div className="visual_lines">
                <div className="line_colored" style={{width: "46%"}}></div>
              </div>
              <div className="visual_stars">
                <img src="images/star_colored_b.svg" alt="gold star" className="star_colored"/>
                <img src="images/star_colored_b.svg" alt="gold star" className="star_colored"/>
                <img src="images/star_colored_b.svg" alt="gold star" className="star_colored"/>
                <img src="images/star_light.svg" alt="white star" className="star_empty"/>
                <img src="images/star_light.svg" alt="white star" className="star_empty"/>
              </div>
              <div className="visual_number">
                <p className="number">12</p>
              </div>
            </div>
            <div className="visual_items">
              <div className="visual_lines">
                <div className="line_colored" style={{width: "35%"}}></div>
              </div>
              <div className="visual_stars">
                <img src="images/star_colored_b.svg" alt="gold star" className="star_colored"/>
                <img src="images/star_colored_b.svg" alt="gold star" className="star_colored"/>
                <img src="images/star_light.svg" alt="white star" className="star_empty"/>
                <img src="images/star_light.svg" alt="white star" className="star_empty"/>
                <img src="images/star_light.svg" alt="white star" className="star_empty"/>
              </div>
              <div className="visual_number">
                <p className="number">5</p>
              </div>
            </div>
            <div className="visual_items">
              <div className="visual_lines">
                <div className="line_colored" style={{width: "23%"}}></div>
              </div>
              <div className="visual_stars">
                <img src="images/star_colored_b.svg" alt="gold star" className="star_colored"/>
                <img src="images/star_light.svg" alt="white star" className="star_empty"/>
                <img src="images/star_light.svg" alt="white star" className="star_empty"/>
                <img src="images/star_light.svg" alt="white star" className="star_empty"/>
                <img src="images/star_light.svg" alt="white star" className="star_empty"/>
              </div>
              <div className="visual_number">
                <p className="number">2</p>
              </div>
            </div>
          </div>

        </div>

      </section>

      <section className="comments-wrap">
        <div className="comments-block">
          <div className="block_image">
            <img src="images/Surface.svg" alt="main pic" className="block-image_item"/>
          </div>

          <div className="block_items">
            <div className="block_rate">
              <div className="block_rate__txt">
                <h3 className="rate-txt_title">Oscar Cafeo</h3>
                <p className="rate-txt_description">Beautiful courses</p>
              </div>
              <div className="block_rate__stars">
                <img src="images/star_colored_s.svg" alt="gold star" className="block-stars__item"/>
                <img src="images/star_colored_s.svg" alt="gold star" className="block-stars__item"/>
                <img src="images/star_colored_s.svg" alt="gold star" className="block-stars__item"/>
                <img src="images/star_colored_s.svg" alt="gold star" className="block-stars__item"/>
                <img src="images/star_colored_s.svg" alt="gold star" className="block-stars__item"/>
              </div>
            </div>

            <div className="block_comment">
              <p className="comment_txt">
                This course was well organized and covered a lot more details than any other Figma courses. I really
                enjoy
                it. One suggestion is that it can be much better if we could complete the prototype together. Since we
                created 24 frames, I really want to test it on Figma mirror to see all the connections. Could you please
                let
                me take a look at the complete prototype?
              </p>
            </div>
          </div>
        </div>

        <div className="comments-block">
          <div className="block_image">
            <img src="images/Surface.svg" alt="main pic" className="block-image_item"/>
          </div>
          <div className="block_items">
            <div className="block_rate">
              <div className="block_rate__txt">
                <h3 className="rate-txt_title">Alex Morgan</h3>
                <p className="rate-txt_description">Beautiful courses</p>
              </div>
              <div className="block_rate__stars">
                <img src="images/star_colored_s.svg" alt="gold star" className="block-stars__item"/>
                <img src="images/star_colored_s.svg" alt="gold star" className="block-stars__item"/>
                <img src="images/star_colored_s.svg" alt="gold star" className="block-stars__item"/>
                <img src="images/star_colored_s.svg" alt="gold star" className="block-stars__item"/>
                <img src="images/star_colored_s.svg" alt="gold star" className="block-stars__item"/>
              </div>
            </div>

            <div className="block_comment">
              <p className="comment_txt">
                This course was well organized and covered a lot more details than any other Figma courses. I really
                enjoy
                it. One suggestion is that it can be much better if we could complete the prototype together. Since we
                created 24 frames, I really want to test it on Figma mirror to see all the connections. Could you please
                let
                me take a look at the complete prototype?
              </p>
            </div>
          </div>
        </div>
      </section>

      <form className="review-form">
        <h2 className="form_title">Add Reviews & Rate</h2>
        <p className="form_description">What is it like to Course?</p>

        <div className="form_stars">
          <div className="form_stars__items">
            <input type="radio" id="form-star_5" name="rating-stars" className="form-stars_input" value="5"/>
            <label for="form-star_5" className="form-stars_label"></label>
            <input type="radio" id="form-star_4" name="rating-stars" className="form-stars_input" value="4"/>
            <label for="form-star_4" className="form-stars_label"></label>
            <input type="radio" id="form-star_3" name="rating-stars" className="form-stars_input" checked value="3"/>
            <label for="form-star_3" className="form-stars_label"></label>
            <input type="radio" id="form-star_2" name="rating-stars" className="form-stars_input" value="2"/>
            <label for="form-star_2" className="form-stars_label"></label>
            <input type="radio" id="form-star_1" name="rating-stars" className="form-stars_input" value="1"/>
            <label for="form-star_1" className="form-stars_label"></label>
          </div>
        </div>

        <div className="form-item-wrap">
          <div className="form_item">
            <label for="input" className="form_label">Review Title</label>
            <input type="text" name="input" placeholder="Courses" className="form_input"/>
          </div>
          <div className="form_item">
            <label for="textarea" className="form_label">Review Content</label>
            <textarea name="textarea" id="" cols="30" rows="10" placeholder="Content" className="form_textarea"></textarea>
          </div>
          <button className="form_btn">Submit Review</button>
        </div>

      </form>
    </div>
  </div>
  )
}

export default index