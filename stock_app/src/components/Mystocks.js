import React, { useState } from 'react';

const MyStocks = () => {
  const [stocks, setStocks] = useState(['AAPL', 'GOOGL', 'MSFT']); // Initial list of stocks

  const handleAddStock = () => {
    const newStock = prompt('Enter a stock symbol to add:');
    if (newStock && !stocks.includes(newStock.toUpperCase())) {
      setStocks(prevStocks => [...prevStocks, newStock.toUpperCase()]);
    } else {
      alert('Stock symbol already exists or invalid input!');
    }
  };

  const handleDeleteStock = stock => {
    const updatedStocks = stocks.filter(item => item !== stock);
    setStocks(updatedStocks);
  };

  return (
    <div>
      <h2>My Stocks</h2>
      <button onClick={handleAddStock}>Add Stock</button>
      <ul>
        {stocks.map(stock => (
          <li key={stock}>
            {stock}
            <button onClick={() => handleDeleteStock(stock)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyStocks;
