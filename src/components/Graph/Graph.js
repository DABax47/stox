import React from "react";
import { Line, Bar } from "react-chartjs-2";
import "./css/Graph.css";
const Graph = ({ chartData, ticker }) => {
  return (
    <div className="graph">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: ticker.toUpperCase(),
            fontSize: 45,
            fontFamily: "Helvetica",
            fontStyle: "normal",
          },
          legend: {
            display: false,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default Graph;
