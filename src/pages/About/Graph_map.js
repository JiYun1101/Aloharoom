import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Scatter } from "@ant-design/plots";
import map_korea from "../../img/map_korea.jpg";
import axios from "axios";

const DemoScatter = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const {
        data: { userTotal, regionBoardMap },
      } = await axios.get("http://localhost:8080/api/data");

      const modifiedData = [
        {
          city: "울산",
          搜索UV: 3,
          端DAU: 1.8,
          搜索DAU渗透率: 3,
        },
        {
          city: "광주",
          搜索UV: 1.8,
          端DAU: 1.8,
          搜索DAU渗透率: 13,
        },
        {
          city: "경기도",
          搜索UV: 1.88,
          端DAU: 4.2,
          搜索DAU渗透率: 16,
        },
        {
          city: "서울",
          搜索UV: 1.8,
          端DAU: 4,
          搜索DAU渗透率: 16,
        },
        {
          city: "강원도",
          搜索UV: 2.8,
          端DAU: 4,
          搜索DAU渗透率: 19,
        },
        {
          city: "대전",
          搜索UV: 2.1,
          端DAU: 3,
          搜索DAU渗透率: 90,
        },
        {
          city: "제주도",
          搜索UV: 1.6,
          端DAU: 0.0,
          搜索DAU渗透率: 30,
        },
      ];

      const { data: newData } = await axios.get(
        "http://localhost:8080/api/data"
      );
      modifiedData.forEach((item) => {
        const target = newData.find((city) => city.city === item.city);
        if (target) {
          item.搜索DAU渗透率 = target.搜索DAU渗透率;
        }
      });

      setData(modifiedData);

      console.log("Data loaded successfully");
    } catch (error) {
      console.error("Data loading failed:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const config = {
    width: 720,
    height: 663,
    container: "chart-container",
    autoFit: true,
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
                  item.name === "搜索DAU渗透率"
                    ? field.data[item.name] + "%"
                    : item.value + formatterInfo[item.name](item.value)
                }</span>
              </div>`;
        });
        htmlStr += "</div>";
        return htmlStr;
      },
    },
    xAxis: {
      min: 0,
      max: 5,
      grid: {
        line: {
          style: {
            stroke: "#eee",
          },
        },
      },
      yAxis: {
        min: 0,
        max: 5, // 최대값을 5로 지정
        line: null,
        label: {
          formatter: (v) => (v !== "0" ? v + "%" : v),
        },
      },
      line: null,
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
