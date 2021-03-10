import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import Stockdata from "./components/StockData/Stockdata";
import Graph from "./components/Graph/Graph";
import "./css/App.css";
import axios from "axios";
// import { Line } from "react-chartjs-2";
const App = () => {
  const [input, setInput] = useState("");
  const [ticker, setStockTicker] = useState("x");
  const [stockData, setStockData] = useState([]);
  // const [data, setnum] = useState();
  const [chartData, setChartData] = useState({});
  const [xDates, setDates] = useState([]);

  let err = <h5> Refresh and enter a stock that exists!</h5>;

  // seperate this into a utility file
  const formatDate = () => {
    let yy = new Date().getFullYear();
    let mm = new Date().getMonth() + 1;
    let dd = new Date().getDate() - 1;
    return [yy, (mm > 9 ? "" : "0") + mm, (dd > 9 ? "" : "0") + dd].join("-");
  };

  const handleInputChange = (inpt) => {
    setInput(inpt.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStockTicker(input);
  };

  const getReq = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    if (ticker) {
      const fetchedStockData = await axios(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${API_KEY}`
      )
        .then((data) => {
          let stockData = data["data"]["Time Series (Daily)"];
          let date = [];
          let openData = [];
          for (var key in stockData) {
            date.push(key);
            openData.push(parseInt(stockData[key]["1. open"]));
            setDates(date);
            setStockData(stockData[key]);
          }
          console.log(openData);
          console.log(date);
          // Chart DATA

          setChartData({
            labels: date,
            datasets: [
              {
                // label: ticker,
                data: openData,
                fill: false,
                borderColor: "rgba(0,0,0,.5)",
                backgroundColor: "rgba(196, 159, 108, 1)",
                hoverBackgroundColor: "#667697",
                pointBackgroundColor: "rgba(196, 159, 108, 1)",
                pointStyle: "circle",
                hitRadius: "2",
              },
            ],
          });
        })
        .catch((data) => {
          console.error(new Error("Server Error"));
        });
    }
  };

  useEffect(() => {
    getReq();
    formatDate();
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
        <h3>{formatDate()}</h3>
        <Stockdata stockData={stockData} ticker={ticker} />
      </div>
      {stockData ? (
        <Graph className="graph" chartData={chartData} ticker={ticker} />
      ) : (
        err
      )}
    </div>
  );
};

export default App;
