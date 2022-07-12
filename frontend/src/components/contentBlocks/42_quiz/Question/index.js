import '../styles.css';
import RadioQuestion from './radioQuestion';
import MatchQuestion from './matchQuestion';
import React from 'react';


const Question = (props) => {
    const item = {
        content: props.item,
        number: props.number
    };


    function contentString(content) {
        switch (content.type) {
            case "radio":
                return <RadioQuestion item={content}/>
            case "match":
                return <MatchQuestion item={content}/>
            case "write":
                return (
                    <>
                        <div>write</div>
                    </>

                );
            case "select":
                return (
                    <div>select</div>
                )
            case "boolean":
                return (
                    <div>boolean</div>
                )                
            default:
                return null;
        }
    }


    return(
        <div className="question__item">
            <div className="question__item-question">
                <div className="question__attributes">
                    <div className="question__attributes-title h-3">Question {item.number}</div>
                    <div className="question__attributes-interact p">
                        <div>Flag Question</div>
                        <div>Edit Question</div>
                    </div>
                </div>
                <div className="question_properties p">
                    <div>Not yet answered</div>
                    <div>Marked out of 1.00</div>
                </div>
                <div className="question__subject h-2">{item.content.subject}</div>
            </div>
            <div className="question__item-unswer">
                {contentString(item.content)}
            </div>
        </div>
    )
}

export default Question;