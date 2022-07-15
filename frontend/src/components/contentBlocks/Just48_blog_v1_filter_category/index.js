import React from "react";
import "./index.css";

const Just48_blog_Filter_Category = () => {
  return (
    <div className="blog__filterCategory_wrapper">
      <h2 className="blog__categoryTitle">Category</h2>
      <div className="blog__categoryFilter">
        <ul className="blog__listFilter">
          <li>
            <div className="blog__itemFilter">
              <span className="blog_itemFilterName">Art </span>
              <span className="blog__itemFilterNumber">(8)</span>
            </div>
            <ul className="blog__listSubFilter">
              <li>
                <div className="blog__itemSubFilter">
                  <span className="blog__itemFilterName">Exercise </span>
                  <span className="blog__itemFilterNumber">(8)</span>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <div className="blog__itemFilter">
              <span className="blog__itemFilterName">Material Design </span>
              <span className="blog__itemFilterNumber">(7)</span>
            </div>
          </li>
          <li>
            <div className="blog__itemFilter">
              <span className="blog__itemFilterName">
                Software Development{" "}
              </span>
              <span className="blog__itemFilterNumber">(6)</span>
            </div>
          </li>
          <li>
            <div className="blog__itemFilter">
              <span className="blog__itemFilterName">Music </span>
              <span className="blog__itemFilterNumber">(6)</span>
            </div>
          </li>
          <li>
            <div className="blog__itemFilter">
              <span className="blog__itemFilterName">Photography </span>
              <span className="blog__itemFilterNumber">(6)</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Just48_blog_Filter_Category;
