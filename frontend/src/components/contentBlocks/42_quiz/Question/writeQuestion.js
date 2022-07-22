const WriteQuestion = (props) => {
    const item = props.item;
    const currentWidth = props.elementWidth - 60;  

    return(
        <>                      
            <div style={{
                    marginBottom: "25px",
                    width: "100%"               
                }}>
                <p className="p" 
                    style={{ 
                        display: "inline-block", 
                        marginRight: "30px"
                    }}>
                     Answer
                </p>
                <input className="input input-long drop-shadow" type="text" id={item.id}
                    style={{
                        width: `${currentWidth < 700 ? "100%" : "75%"}`
                    }}/>
            </div>
        </>
    )
}

export default WriteQuestion;