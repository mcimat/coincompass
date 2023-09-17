import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/styles.css";

function Content() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
    .then((response) => {
      setCryptoData(response.data)
      console.log(response.data)
    });
  }, []);

  return (
    <section className="market">
      <div className="container">
        <div className="market--container">
        <div className="market--content">
          <h2 className="h2--color">Buy and sell with the industry's most competitive market</h2>
          <p>Buy and sell 10,000+ cryptocurrencies using bank transfers or your credit/debit card.</p>
        </div>
        <div className="container--market">
          <ul>
            {cryptoData.map((crypto) => (
              <li>
                <span>
                  <img src={crypto.image} alt={crypto.name + " Image"} />
                  <p>{crypto.name}</p>
                </span>
                <p>${crypto.current_price}</p>
                <p>{crypto.price_change_percentage_24h}%</p>
                <p>${crypto.market_cap}</p>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Content;