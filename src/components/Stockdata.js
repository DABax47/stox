import React from "react";
import "../css/Stockdata.css";
const Stockdata = ({ stockData, ticker, getnum }) => {
  return (
    <ul>
      <li>open: {stockData["1. open"]}</li>
      <li>close: {stockData["4. close"]}</li>
      <li>high: {stockData["2. high"]}</li>
      <li>low: {stockData["3. low"]}</li>
      <li>volume: {stockData["5. volume"]}</li>
    </ul>
  );
};

export default Stockdata;
