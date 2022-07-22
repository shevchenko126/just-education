import ProgressBar from '../ProgessBar'
import NavigationButtons from '../NavigationButtons'
import FinishButton from '../FinishButton'

const CompleteNavigation = ({progress, pagesNumber}) => {
    
    return (
        <>
            <div className="wrapper__complete panel panel-sm drop-shadow"
                style={{marginBottom: "15px"}}>
                <p className="h-2">Quiz Complete</p>
                <ProgressBar progress={progress} showTytle="true"/>
            </div>
            <div className="wrapper__nav panel panel-sm drop-shadow">
                <p className="h-2">Quiz Navigation</p>
                <div className="wrapper__buttons">
                    <NavigationButtons pagesNumber = {pagesNumber}/>   
            </div>
                <FinishButton/>
            </div>
        </>
    )
}

export default CompleteNavigation;




