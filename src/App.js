import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Stockdata from "./components/Stockdata";
import Graph from "./components/Graph";
import "./css/App.css";
import axios from "axios";
import { Line } from "react-chartjs-2";
const App = () => {
  const [ticker, setStockTicker] = useState("");
  const [input, setInput] = useState("");
  const [stockData, setStockData] = useState([]);
  const [data, setnum] = useState();
  const [chartData, setChartData] = useState({});
let err = <h5>  Refresh and enter a stock that exists!</h5>

  const handleInputChange = (inpt) => {
    setInput(inpt.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStockTicker(input);
  };
  let date = new Date(Date.now());
  let year = date.getUTCFullYear();
  let mo = date.getUTCMonth() + 1;
  let day = date.getUTCDate() ;
  let dateToday = `${year}-${pad(mo)}-${pad(day)}`;

if(date.getUTCDay() > 4){
  dateToday =`${year}-${pad(mo)}-${pad(day) - 3}`
}else if(date.getUTCDay() < 4 && date.getHours() > 16){
    dateToday =`${year}-${pad(mo)}-${pad(day)}`
}else{
dateToday =`${year}-${pad(mo)}-${pad(day) - 3}`
}
  function pad(num) {
    var pad;
    var n = num;
    pad = "00";
    let result = (pad + n).slice(-pad.length);
    return result;
  }
  const getReq = () => {
    // const apiKey = "3OGIZIGNERYD9HS8";
    const API_KEY = process.env.REACT_APP_API_KEY;
    if (ticker) {
      axios
        .get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${API_KEY}`
        )
        .then((data) => {
          let fetchedStockData = data.data["Time Series (Daily)"][dateToday];
          setStockData(fetchedStockData);
          // CHart DATA
          setChartData({
            labels: ["Open", "High", "Low", "Close"],

            datasets: [
              {
                // label: ticker,
                data: [
                  fetchedStockData["1. open"],
                  fetchedStockData["2. high"],
                  fetchedStockData["3. low"],
                  fetchedStockData["4. close"],
                ],

                backgroundColor: "rgba(196, 159, 108, .7)",
                hoverBackgroundColor: "#667697",
                pointBackgroundColor: "#555",
                pointStyle: "circle",
                hitRadius: "2",
              },
            ],
          });
        }).catch(()=>{
          console.error(new Error('something went wrong'));
        });
    }
  };
  const chart = () => {};
  useEffect(() => {
    getReq();
  }, [ticker]);

  return (
    <div className="component-div">
      <div className="main-content">
        <h1> STOX </h1>
        <Search
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          input={input}
        />
        <h3>{dateToday}</h3>
        <Stockdata stockData={stockData} ticker={ticker} />
      </div>
      {stockData ? <Graph className='graph' chartData={chartData} ticker={ticker} /> : err}
    </div>
  );
};

export default App;
