import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Scatter } from "@ant-design/plots";
import map_korea from "../../img/map_korea.jpg";

const DemoScatter = () => {
  const data = [
    {
      city: "경상도",
      搜索UV: 1.5,
      端DAU: 6,
      搜索DAU渗透率: 3,
    },
    {
      city: "전라도",
      搜索UV: 2,
      端DAU: 5,
      搜索DAU渗透率: 13,
    },
    {
      city: "경기도",
      搜索UV: 7,
      端DAU: 3.6,
      搜索DAU渗透率: 16,
    },
    {
      city: "서울",
      搜索UV: 5,
      端DAU: 5,
      搜索DAU渗透率: 16,
    },
    {
      city: "강원도",
      搜索UV: 2,
      端DAU: 1,
      搜索DAU渗透率: 19,
    },
    {
      city: "충청도",
      搜索UV: 7,
      端DAU: 2,
      搜索DAU渗透率: 90,
    },
    {
      city: "제주도",
      搜索UV: 7.4,
      端DAU: 1.5,
      搜索DAU渗透率: 30,
    },
  ];
  const config = {
    width: 800,
    height: 400,
    autoFit: false,
    appendPadding: 16,
    data,
    xField: "搜索UV",
    yField: "端DAU",
    sizeField: "搜索DAU渗透率",
    size: [12, 30],
    shape: "circle",
    pointStyle: {
      fill: "#D6E3FD",
      fillOpacity: 0.6,
      stroke: "#6d9bf9",
    },
    tooltip: {
      showTitle: true,
      showMarkers: false,
      fields: ["搜索UV", "端DAU", "搜索DAU渗透率"],
      customContent: (title, items) => {
        const field = items?.[0];
        const formatterInfo = {
          搜索UV: (value) => value + "万",
          端DAU: (value) => value + "万",
          搜索DAU渗透率: () => "%",
        };
        let htmlStr = `<div style="margin:10px 0;font-weight:700;">${field?.data?.city}</div><div class="g2-tooltip-items">`;
        items.forEach((item) => {
          htmlStr += `<div class="g2-tooltip-item" style="margin-bottom:8px;display:flex;justify-content:space-between;">
                <span class="g2-tooltip-item-label" style="margin-right: 12px;">${
                  item.name
                }</span>
                <span class="g2-tooltip-item-value">${
                  item.value + formatterInfo[item.name](item.value)
                }</span>
              </div>`;
        });
        htmlStr += "</div>";
        return htmlStr;
      },
    },
    xAxis: {
      grid: {
        line: {
          style: {
            stroke: "#eee",
          },
        },
      },
      label: {
        formatter: (v) => (v !== "0" ? v + "%" : v),
      },
      line: null,
    },
    label: {
      formatter: (item) => {
        return item.city;
      },
      offsetY: 12,
      style: {
        fontSize: 12,
        fill: "rgba(0,0,0,0.85)",
      },
    },
    yAxis: {
      min: 0,
      line: null,
      label: {
        formatter: (v) => (v !== "0" ? v + "%" : v),
      },
    },
    annotations: [
      {
        type: "text",
        position: [4, 8],
        content: "搜索DAU渗透率",
        offsetY: -8,
        style: {
          fontSize: 12,
          textAlign: "center",
        },
      },
      {
        type: "text",
        position: [8, 4],
        content: "搜索DAU渗透率",
        rotate: Math.PI / 2,
        offsetY: -40,
        offsetX: 8,
        style: {
          fontSize: 12,
        },
      },
      {
        type: "region",
        start: [7, 7],
        end: [7.8, 7.8],
        top: true,
        style: {
          fill: "#fff",
          fillOpacity: 0.5,
          opacity: 1,
        },
      },
      {
        type: "region",
        start: [0.2, 7],
        end: [1, 7.8],
        top: true,
        style: {
          fill: "#fff",
          fillOpacity: 0.5,
          opacity: 1,
        },
      },
      {
        type: "region",
        start: [7, 0.2],
        end: [7.8, 1],
        top: true,
        style: {
          fill: "#fff",
          fillOpacity: 0.5,
          opacity: 1,
        },
      },
    ],
    quadrant: {
      xBaseline: 4,
      yBaseline: 4,
      lineStyle: {
        lineDash: [4, 2],
        lineWidth: 2,
      },
      regionStyle: [
        // {
        //   fill: "#5bd8a6",
        //   fillOpacity: 0.1,
        // },
        // {
        //   fill: "#667796",
        //   fillOpacity: 0.1,
        // },
        // {
        //   fill: "#fff",
        // },
        // {
        //   fill: "#f7664e",
        //   fillOpacity: 0.1,
        // },
      ],
      labels: [
        {
          content: "热门市场",
          position: [7.2, 7],
          style: {
            fill: "rgba(0,0,0, 0.85)",
            textAlign: "start",
          },
        },
        {
          content: "潜力市场",
          position: [0.2, 7],
          style: {
            fill: "rgba(0,0,0, 0.85)",
            textAlign: "start",
          },
        },
        {
          content: "",
        },
        {
          content: "提频市场",
          position: [7.2, 1],
          style: {
            fill: "rgba(0,0,0, 0.85)",
            textAlign: "start",
          },
        },
      ],
    },
  };
  return (
    <div style={{ position: "relative" }}>
      <img src={map_korea} alt="map" />
      <div style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
        <Scatter {...config} />
      </div>
    </div>
  );
};

// ReactDOM.render(<DemoScatter />, document.getElementById('container'));

export default DemoScatter;
