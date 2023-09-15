import "../styles/styles.css";
import infoImage from "../images/info.png";
import coinsImage from "../images/coins.png";
import targetImage from "../images/target.png";
import bookImage from "../images/book.png";

function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <h2>Our Benefits</h2>
        <div className="container--benefits">
          <div className="benefits--content">
            <img src={infoImage} alt="Real-Time Information Img"/>
            <h3>Real-Time Information</h3>
            <p>Users can check cryptocurrency prices, 24-hour percent changes, and market capitalization in real-time, enabling quick decision-making.</p>
          </div>
          <div className="benefits--content">
            <img src={coinsImage} alt="Market Analysis & Decision-Making Img"/>
            <h3>Market Analysis & Decision-Making</h3>
            <p>The app provides valuable insights for traders and investors, helping them analyze market trends and make informed decisions.</p>
          </div>
          <div className="benefits--content">
            <img src={targetImage} alt="Portfolio Management Img"/>
            <h3>Portfolio Management</h3>
            <p>Users can easily track and manage their cryptocurrency portfolios, optimizing their holdings and strategies.</p>
          </div>
          <div className="benefits--content">
            <img src={bookImage} alt="Educational & Informational Img"/>
            <h3>Educational & Informational</h3>
            <p>The app offers educational content and market insights, making it a valuable resource for both beginners and experienced users.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits;