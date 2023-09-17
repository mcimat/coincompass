import "../styles/styles.css";
import shieldImage from "../images/shield.png";

function Shield() {
    return(
        <section className="benefit">
            <div className="container">
                <div className="benefit--container">
                    <div className="benefit--container--text">
                        <h2>24/7 availability for comprehensive customer assistance</h2>  
                        <p>We're committed to ensuring that top-notch support from real experts is just a click away whenever you require it, we invest more resources in achieving this than any other platform.</p>   
                        <button className="benefit--button">Get Started</button>
                    </div>
                    <div className="benefit--container--image">
                        <img src={shieldImage} alt="Shield Img" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Shield;
