import '../styles.css';

const WriteQuestion = (props) => {
    const item = props.item;   

    return(
        <>                      
            <div>
                <p className="p" style={{ display: "inline-block", marginRight: "30px"}}>
                     Answer
                </p>
                <input className="input input-long drop-shadow" type="text" id={item.id}/>
            </div>
        </>
    )
}

export default WriteQuestion;