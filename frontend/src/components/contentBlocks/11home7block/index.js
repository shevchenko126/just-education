import React from 'react';
import "./index.css";


const H11homeSubscribe = () => {
    return (
        <div className="subscribe">
            <div className="container-fluid">
                <div className="subscribe_call">Subscribe to our newsletter</div>
                <div className="subscribe_warning">Your download should start automatically, if not Click here. Should I give up, huh?.</div>
            
            <form action="/page.php" method="post">
                    <input type="email" className="form_input" placeholder="Enter your email" name="email"></input>              
                    <input type="submit" className="form_btn" value="Subscribe"></input>
            </form>
            </div>
        </div>
        
    );
}

export default H11homeSubscribe;