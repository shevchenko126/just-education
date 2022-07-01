import React from 'react';
import Tabs from './components/Ui/Tabs';
import Instructor from './components/CoursesSingle/Instructor';
import Just11home5block from './components/contentBlocks/Just11home5block';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header />
      <Tabs />
      <Instructor />
      <Just11home5block />
    </>
  );
}

export default App;