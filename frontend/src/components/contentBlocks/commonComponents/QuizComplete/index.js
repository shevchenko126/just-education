
const QuizComplete = ({progress}) => {

    return (
        <div style={{
            position: "absolute", 
            top: "-1px", right: "-1px",
            transform: "translateX(365px)"
        }}>
        <div className="wrapper__complete panel panel-sm drop-shadow">
            <p className="h-2">Quiz Complete</p>
            <div className="progress-bar__title">
                <p className="p">Completed</p>
                <p className="p">{progress}</p>
            </div>
            <div className="progress-bar drop-shadow">
                <div className="progress__bar-value"
                    style={{width: `${progress}%`}}></div>
            </div>
        </div>
        <div className="wrapper__nav panel panel-sm drop-shadow">
            <p className="h-2">Quiz Navigation</p>
            <div className="wrapper__buttons">
                {Array.from({length: 6}).map((item, index) => 
                <button 
                className="button nav-button p"
                key={`nb${index}`}
                >{index + 1}</button>)}     
            </div>
            <button className="submit-button p">Finish attempt ...</button>
        </div>
    </div>
    )
}

export default QuizComplete;

