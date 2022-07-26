import './styles.css';
import {useState} from 'react';
import ComponenetQuiz from './ComponentQuiz'
import Context from './Context'
import dataQuestions from '../42_quiz/Question/dataQuestions';

const Quiz = () => {
    
    const [startIndex, setStartIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(startIndex);
       
     return(
        <>
            <Context.Provider value={{
                    startIndex, setStartIndex, 
                    activeIndex, setActiveIndex
                }}>
                <ComponenetQuiz dataQuestions={dataQuestions}></ComponenetQuiz>
            </Context.Provider>          
        </>
    )
}

export default Quiz;