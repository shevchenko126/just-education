const ProgressBar = ({progress, showTytle}) => {
    
    return (
        <>
            {showTytle === "true" ?
                <div className="progress-bar__title">
                    <p className="p">Completed</p>
                    <p className="p">{progress}</p>
                </div> :
                <></>
            }
            <div className="progress-bar drop-shadow">
                <div className="progress__bar-value"
                    style={{width: `${progress}%`}}></div>
            </div>
        </>
    )
}

export default ProgressBar;