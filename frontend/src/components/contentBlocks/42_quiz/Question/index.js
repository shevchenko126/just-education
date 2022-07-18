import '../styles.css';
import RadioQuestion from './radioQuestion';
import MatchQuestion from './matchQuestion';
import WriteQuestion from './writeQuestion';
import SelectQuestion from './selectQuestion'

const Question = (props) => {
    const item = {
        content: props.item,
        number: props.number,
        elementWidth: props.elementWidth,
    };

    const contentString = (content, elementWidth) => {
        switch (content.type) {
            case "radio":
                return <RadioQuestion 
                item={content} 
                elementWidth={elementWidth} 
                isMarked = {content.marked}
                isClearable = {content.isClearable}/>
            case "match":
                return <MatchQuestion 
                item={content} 
                elementWidth={elementWidth}/>
            case "write":
                return <WriteQuestion 
                item={content} 
                elementWidth={elementWidth}/>
            case "select":
                return <SelectQuestion 
                item={content} 
                elementWidth={elementWidth}/>                  
            default:
                return <></>;
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
                {contentString(item.content, item.elementWidth)}
            </div>
        </div>
    )
}

export default Question;