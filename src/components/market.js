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
    <section className="container">
      <h2>Market</h2>
      <div className="container--market">
        <ul>
          <li className="header">
            <span>Coin</span>
            <span>Price</span>
            <span>24h Change</span>
            <span>Capital</span>
          </li>
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
    </section>
    </section>
  );
}

export default Content;