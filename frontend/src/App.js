import React from 'react';

import Header from './components/Header';
import InstructorsSingle from './components/contentBlocks/31InstructorsSingle';
import Tabs from './components/Ui/Tabs';
import Instructor from './components/CoursesSingle/Instructor';
import Just11home5block from './components/contentBlocks/Just11home5block';
import '../src/components/contentBlocks/commonCss/styles.css';
import FeaturedCourses from './components/contentBlocks/11home3block';
import Quiz from './components/contentBlocks/42_quiz'


function App() {
  return (
    <>
      <Quiz/>
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