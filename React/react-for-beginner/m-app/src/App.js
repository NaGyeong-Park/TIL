import { useEffect, useState } from "react";

function App() {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState();
  function onChange(e) {
    setMoney(e.target.value);
  }
  function onClick(e) {
    e.preventDefault();
    if (money === "") {
      return;
    }
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({loading ? 0 : coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input
            onChange={onChange}
            value={money}
            placeholder="Enter your money"
            type="number"
          />
          <button onClick={onClick}></button>
          <select>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default App;
