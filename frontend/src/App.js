import React from 'react';

import Header from './components/Header';
import InstructorsSingle from './components/contentBlocks/31InstructorsSingle';
import Tabs from './components/Ui/Tabs';
import Instructor from './components/CoursesSingle/Instructor';
import Just11home5block from './components/contentBlocks/Just11home5block';
import '../src/components/contentBlocks/commonCss/styles.css';
import FeaturedCourses from './components/contentBlocks/11home3block';
import Quiz from './components/contentBlocks/42_quiz'
import dataQuestions from './components/contentBlocks/42_quiz/Question/dataQuestions';


function App() {
  
  return (
    <>
      <Quiz questions={dataQuestions}/>
      {/* <FeaturedCourses/> */}
      {/* <Header />
      <InstructorsSingle />
      <Tabs />
      <Instructor />
      <Just11home5block /> */}
    </>
  );
}

export default App;