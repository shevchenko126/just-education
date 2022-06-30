import React from 'react'
import './index.css'

 const Just19CourseListV4Category = () => {
  return (
  <div className="container filter__wrap">
    <div className="row">
      <h3 className="col filter__title">
        Category
      </h3>
    </div>
    <div className="row">
      <input type="text" className="form-control filter__search-instructors" id="searchInstructors" placeholder="Search"/>
    </div>
    <div className="row">

      <div className="form-check">
        <input className="form-check-input filter__checkbox_custom" type="checkbox" value="" id="filterCategoryArt"/>
        <label className="form-check-label filter__items" for="filterCategoryArt">
          Art (<span className="CategoryArtAmount">8</span>)
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input  filter__checkbox_custom" type="checkbox" value="" id="filterCategoryExercise" checked/>
        <label className="form-check-label  filter__items" for="filterCategoryExercise">
          Exercise (<span className="CategoryExerciseAmount">8</span>)
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input filter__checkbox_custom" type="checkbox" value="" id="filterCategoryMaterialDesign"/>
        <label className="form-check-label filter__items" for="filterCategoryMaterialDesign">
          Material Design (<span className="CategoryMaterialDesignAmount">7</span>)
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input  filter__checkbox_custom" type="checkbox" value="" id="filterCategorySoftwareDevelopment"/>
        <label className="form-check-label  filter__items" for="filterCategorySoftwareDevelopment">
          Software Development (<span className="CategorySoftwareDevelopmentAmount">6</span>)
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input  filter__checkbox_custom" type="checkbox" value="" id="filterCategoryMusic"/>
        <label className="form-check-label  filter__items" for="filterCategoryMusic">
          Music (<span className="CategoryMusicAmount">6</span>)
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input  filter__checkbox_custom" type="checkbox" value="" id="filterCategoryPhotography"/>
        <label className="form-check-label  filter__items" for="filterCategoryPhotography">
          Photography (<span className="CategoryPhotographyAmount">6</span>)
        </label>
      </div>

    </div>
  </div>
  )
}

export default Just19CourseListV4Category