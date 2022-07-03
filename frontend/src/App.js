import React from 'react';
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
    </>
  );
}

export default App;
