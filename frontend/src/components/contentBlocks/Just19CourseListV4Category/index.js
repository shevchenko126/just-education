import React from 'react'
import './index.css'

 const Just19CourseListV4Category = () => {
  return (
  <div class="container filter__wrap">
    <div class="row">
      <h3 class="col filter__title">
        Category
      </h3>
    </div>
    <div class="row">
      <input type="text" class="form-control filter__search-instructors" id="searchInstructors" placeholder="Search"/>
    </div>
    <div class="row">

      <div class="form-check">
        <input class="form-check-input filter__checkbox_custom" type="checkbox" value="" id="filterCategoryArt"/>
        <label class="form-check-label filter__items" for="filterCategoryArt">
          Art (<span class="CategoryArtAmount">8</span>)
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input  filter__checkbox_custom" type="checkbox" value="" id="filterCategoryExercise" checked/>
        <label class="form-check-label  filter__items" for="filterCategoryExercise">
          Exercise (<span class="CategoryExerciseAmount">8</span>)
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input filter__checkbox_custom" type="checkbox" value="" id="filterCategoryMaterialDesign"/>
        <label class="form-check-label filter__items" for="filterCategoryMaterialDesign">
          Material Design (<span class="CategoryMaterialDesignAmount">7</span>)
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input  filter__checkbox_custom" type="checkbox" value="" id="filterCategorySoftwareDevelopment"/>
        <label class="form-check-label  filter__items" for="filterCategorySoftwareDevelopment">
          Software Development (<span class="CategorySoftwareDevelopmentAmount">6</span>)
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input  filter__checkbox_custom" type="checkbox" value="" id="filterCategoryMusic"/>
        <label class="form-check-label  filter__items" for="filterCategoryMusic">
          Music (<span class="CategoryMusicAmount">6</span>)
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input  filter__checkbox_custom" type="checkbox" value="" id="filterCategoryPhotography"/>
        <label class="form-check-label  filter__items" for="filterCategoryPhotography">
          Photography (<span class="CategoryPhotographyAmount">6</span>)
        </label>
      </div>

    </div>
  </div>
  )
}

export default Just19CourseListV4Category