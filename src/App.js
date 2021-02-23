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
  // const [data, setnum] = useState();
  const [chartData, setChartData] = useState({});
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  let err = <h5> Refresh and enter a stock that exists!</h5>;

  // seperate this into a utility file
  const formatDate = () => {
    let yy = new Date().getFullYear();
    let mm = new Date().getMonth() + 1;
    let dd = new Date().getDate() - 1;

    return [yy, (mm > 9 ? "" : "0") + mm, (dd > 9 ? "" : "0") + dd].join("-");
  };
  formatDate();
  console.log(formatDate());
  const handleInputChange = (inpt) => {
    setInput(inpt.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStockTicker(input);
  };

  const getReq = async () => {
    // const apiKey = "3OGIZIGNERYD9HS8";
    const API_KEY = process.env.REACT_APP_API_KEY;
    if (ticker) {
      const fetchedStockData = await axios(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${API_KEY}`
      )
        .then((data) => {
          console.log(data);
          let stockData = data["data"]["Time Series (Daily)"][formatDate()];
          setStockData(stockData);
          // Chart DATA
          setChartData({
            labels: ["Open", "Close", "High", "Low"],
            datasets: [
              {
                // label: ticker,
                data: [
                  stockData["1. open"],
                  stockData["4. close"],
                  stockData["2. high"],
                  stockData["3. low"],
                ],

                backgroundColor: "rgba(196, 159, 108, .7)",
                hoverBackgroundColor: "#667697",
                pointBackgroundColor: "#555",
                pointStyle: "circle",
                hitRadius: "2",
              },
            ],
          });
        })
        .catch((data) => {
          console.error(new Error("something went wrong"));
        });
    }
  };
  console.log(chartData);

  useEffect(() => {
    getReq();
  }, [ticker]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize());
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dimensions]);

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
