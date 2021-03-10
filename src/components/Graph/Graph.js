import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

import "./css/Graph.css";
const Graph = ({ xDate, yData, ticker }) => {
  // console.log("date", xDate);
  // console.log("values", yData);

  return (
    <div className="graph">
      <Plot
        hoverinfo={"all"}
        useResizeHandler={true}
        className="p"
        data={[
          {
            x: xDate,
            y: yData,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "#667697" },
            line: { color: "#c49f6c " },
          },
        ]}
        layout={{
          title: ticker,

          hoverdistance: 0.5,
        }}
        config={{ displayModeBar: true, responsive: true }}
      />
    </div>
  );
};

export default Graph;
//
//
// <Plot
//   data={[
//     {
//       x: xDate,
//       close: yValue["4. close"],
//       decreasing: { line: { color: "red" } },
//       high: yValue["2. high"],
//       increasing: { line: { color: "green" } },
//       line: { color: "rgba(31,119,180,1)" },
//       low: yValue["3. low"],
//       open: yValue["1. open"],
//       type: "candlestick",
//     },
//   ]}
//   layout={{
//     width: 720,
//     height: 440,
//     title: ticker.toUpperCase(),
//     dragmode: "zoom",
//     showlegend: true,
//     xaxis: {
//       rangeslider: {
//         visible: false,
//       },
//     },
//     yaxis: {
//       autorange: false,
//     },
//   }}
//   options={{ displaylogo: "false" }}
// />
