import "../styles/styles.css";
import informationImage from "../images/information.png";
import analysisImage from "../images/analysis.png";
import managementImage from "../images/management.png";
import informationalImage from "../images/informational.png";

function Benefits() {
  return (
    <section>
      <div className="container">
        <h1>Benefits</h1>
        <div className="benefits">
          <div className="benefits--content">
            <img src={informationImage} alt="Information Img"/>
            <h1>Real-Time Information</h1>
            <p>Users can check cryptocurrency prices, 24-hour percent changes, and market capitalization in real-time, enabling quick decision-making.</p>
          </div>
          <div className="benefits--content">
            <img src={analysisImage} alt="Analysis Img"/>
            <h1>Market Analysis and Decision-Making</h1>
            <p>The app provides valuable insights for traders and investors, helping them analyze market trends and make informed decisions.</p>
          </div>
          <div className="benefits--content">
            <img src={managementImage} alt="Management Img"/>
            <h1>Portfolio Management</h1>
            <p>Users can easily track and manage their cryptocurrency portfolios, optimizing their holdings and strategies.</p>
          </div>
          <div className="benefits--content">
            <img src={informationalImage} alt="Informational Img"/>
            <h1>Educational and Informational</h1>
            <p>The app offers educational content and market insights, making it a valuable resource for both beginners and experienced users.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits;