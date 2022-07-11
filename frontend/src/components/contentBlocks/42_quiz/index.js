import './styles.css';


const Quiz = () => {
    return(
        <div className="container__quiz">
            <div className="quiz__title h-1">Quiz</div>
            <div className="quiz__subtitle p">Ready to go?</div>
            <div className="container__questions">
                <div className="question__item">
                    <div className="question__item-question">
                        <div className="question__attributes">
                            <div className="question__attributes-title h-3">Question #</div>
                            <div className="question__attributes-interact p">
                                <div>Flag Question</div>
                                <div>Edit Question</div>
                            </div>
                        </div>
                        <div className="question_properties p">
                            <div>Not yet answered</div>
                            <div>Marked out of 1.00</div>
                        </div>
                        <div className="question__subject h-2">You are watching the TV news and see this appear on the screen:</div>
                    </div>
                    <div className="question__item-unswer">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz;