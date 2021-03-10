import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import Stockdata from "./components/StockData/Stockdata";
import Graph from "./components/Graph/Graph";
import "./css/App.css";
import axios from "axios";

// import { Line } from "react-chartjs-2";
const App = () => {
  const [input, setInput] = useState("");
  const [ticker, setStockTicker] = useState("ibm");
  const [stockData, setStockData] = useState([]);
  const [yData, setyData] = useState([]);
  // const [data, setnum] = useState();
  const [chartData, setChartData] = useState({});
  const [date, setDate] = useState([]);
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
          let dates = [];
          let openValues = [];
          let stockData = [];
          let stockObj = data["data"]["Time Series (Daily)"];
          for (var dateData in stockObj) {
            dates.push(dateData);
            openValues.push(stockObj[dateData]["1. open"]);
            setStockData(stockObj[dateData]);
          }
          setDate(dates);
          setyData(openValues);
          console.log(
            "date",
            date,
            "openValues",
            openValues,
            "stockData",
            stockData,
            "OBJ",
            stockObj
          );
        })
        .catch((data) => {
          console.error(new Error("Server Error"));
        });
    }
  };

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
        <h3>{formatDate()}</h3>
        <Stockdata stockData={stockData} ticker={ticker} />
      </div>
      {stockData ? (
        <Graph xDate={date} yData={yData} ticker={ticker} />
      ) : (
        <p> Server Error</p>
      )}
    </div>
  );
};

export default App;
