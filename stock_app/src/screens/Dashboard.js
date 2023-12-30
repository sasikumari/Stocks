
import React from 'react';
import '../components/App.css';
import StockRow from '../components/StockRow';

const App = () => {
  return (
    <div className="App">
      <h1>Stock Table</h1>
     
      <table className="table-container">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Price</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <StockRow ticker="aapl" />    
          <StockRow ticker="goog" />  
          <StockRow ticker="msft" />  
          <StockRow ticker="tsla" />    
                           </tbody>
      </table>
    </div>
  );
};

export default App;
