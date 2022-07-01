import "./styles.css"

const Dots = (count) => {
    
    return(
        <div className="dots">
            <div className="dot" onClick="pointCard(1)"></div>
            <div className="dot" onClick="pointCard(2)"></div>
            <div className="dot" onClick="pointCard(3)"></div>
            <div className="dot" onClick="pointCard(4)"></div>
            <div className="dot" onClick="pointCard(5)"></div>
        </div>
)}

export default Dots;
