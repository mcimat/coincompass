import "../styles/styles.css";
import safeImage from "../images/safe.png";

function Safe() {
    return (
        <section className="benefit">
            <div className="container">
                <div className="benefit--safe--container">
                    <div className="benefit--container--image">
                        <img src={safeImage} alt="Safe Img" />
                    </div>
                    <div className="benefit--container--text">
                        <h2>Take your first step into confident and protected crypto investments</h2>
                        <p>We tirelessly strive to ensure that every step of your crypto investment journey is fortified with the knowledge and safeguards necessary to navigate the digital financial landscape with peace of mind.</p>   
                        <button className="benefit--button">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Safe;