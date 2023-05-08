import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Line } from "@ant-design/plots";

const DemoLine = () => {
  const [dataPoints, setDataPoints] = useState([]);

  const data = [
    {
      year: "11월",
      value: 30,
    },
    {
      year: "12월",
      value: 40,
    },
    {
      year: "1월",
      value: 35,
    },
    {
      year: "2월",
      value: 51,
    },
    {
      year: "3월",
      value: 49,
    },
    {
      year: "4월",
      value: 6,
    },
    {
      year: "5월",
      value: 37,
    },
    {
      year: "6월",
      value: 29,
    },
    {
      year: "7월",
      value: 53,
    },
  ];

  const config = {
    data: data,
    xField: "year",
    yField: "value",
    label: {},
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#5B8FF9",
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "red",
        },
      },
    },
    interactions: [
      {
        type: "marker-active",
      },
    ],
  };

  return <Line {...config} />;
};

export default DemoLine;
