import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/styles.css";

function Content() {
  const [error, setError] = useState(null);
  const [cryptoData, setCryptoData] = useState([]);
  const [page, setPage] = useState(1);
  
  function previous() {
    setPage(prevPage => prevPage - 1)
  }

  function next() {
    setPage(prevPage => prevPage + 1)
  }

  useEffect(() => {
    setError(null);
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`)
      .then((response) => {
        setCryptoData(response.data);
      })
      .catch((error) => {
        setError("Too many requests. Please try again later.");
      });
  }, [page]);

  return (
    <section className="market">
      <div className="container">
        <div className="market--container">
          <div className="market--content">
            <h2 className="h2--color">Buy and sell with the industry's most competitive market</h2>
            <p>Buy and sell 10,000+ cryptocurrencies using bank transfers or your credit/debit card.</p>
          </div>
          <div className="container--market">
          {error && <p className="error-message">{error}</p>}
            <ul>
              {cryptoData.map((crypto) => (
                <li key={crypto.id}>
                  <span>
                    <img src={crypto.image} alt={crypto.name + " Image"} />
                    <p>{crypto.name}</p>
                  </span>
                  <p>${crypto.current_price}</p>
                  <p style={{ color: crypto.price_change_percentage_24h >= 1 ? '#50C878' : '#DC143C', }}>
                    {crypto.price_change_percentage_24h}%
                  </p>
                  <p>${(new Intl.NumberFormat().format(crypto.market_cap))}</p>
                </li>
              ))}
            </ul>
            <div className="market--button--container">
              <button className="market--button" onClick={previous}>Previous</button>
              <button className="market--button" onClick={next}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;