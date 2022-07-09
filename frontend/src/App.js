import React from 'react';

import Tabs from './components/Ui/Tabs';
import Instructor from './components/CoursesSingle/Instructor';
import Just11home5block from './components/contentBlocks/Just11home5block';
import Header from './components/Header';

import '../src/components/contentBlocks/commonCss/styles.css';
import FeaturedCourses from './components/contentBlocks/11home3block';
import InstructorsSingle from './components/contentBlocks/31InstructorsSingle';


function App() {
  return (
    <>
      <Header />

      <FeaturedCourses/>
      <InstructorsSingle />

      <Tabs />
      <Instructor />
      <Just11home5block />

    </>
  );
}

export default App;