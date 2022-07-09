import React from 'react';

import Header from './components/Header';
import InstructorsSingle from './components/contentBlocks/31InstructorsSingle';
import Tabs from './components/Ui/Tabs';
import Instructor from './components/CoursesSingle/Instructor';
import Just11home5block from './components/contentBlocks/Just11home5block';
import '../src/components/contentBlocks/commonCss/styles.css';
import FeaturedCourses from './components/contentBlocks/11home3block';


function App() {
  return (
    <>
      <Header />
      <FeaturedCourses/>
      <InstructorsSingle />
      <Tabs />
      <Instructor /> {/* ERROR property `class`. Did you mean `className`? */}
      <Just11home5block />
    </>
  );
}

export default App;