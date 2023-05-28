import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Scatter } from "@ant-design/plots";
import map_korea from "../../img/map_korea.jpg";
import axios from "axios";
import baseURL from "../api/baseURL";

const DemoScatter = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const {
        data: { regionBoardMap },
      } = await axios.get(`${baseURL}/api/data`);
      console.log("지역 데이터", Object.values(regionBoardMap));
      console.log("지역 데이터(서울)", Object.values(regionBoardMap)[2]);

      const modifiedData = [
        {
          city: "울산",
          UV: 2.5,
          DAU: 1.7,
          region: Object.values(regionBoardMap)[0],
        },
        {
          city: "광주",
          UV: 1.0,
          DAU: 1.3,
          region: Object.values(regionBoardMap)[1],
        },
        {
          city: "서울",
          UV: 1.3,
          DAU: 2.6,
          region: Object.values(regionBoardMap)[2],
        },
        {
          city: "인천",
          UV: 1.0,
          DAU: 2.4,
          region: Object.values(regionBoardMap)[5],
        },
        {
          city: "강원도",
          UV: 2.3,
          DAU: 2.5,
          region: Object.values(regionBoardMap)[4],
        },
        {
          city: "대전",
          UV: 1.2,
          DAU: 3,
          region: Object.values(regionBoardMap)[5],
        },
        {
          city: "부산",
          UV: 2.0,
          DAU: 1.6,
          region: Object.values(regionBoardMap)[6],
        },
      ];

      modifiedData.forEach((item, index) => {
        item.region = Object.values(regionBoardMap)[index]; // 배열의 각 요소를 region에 할당합니다.
      });

      setData(modifiedData);
    } catch (error) {
      console.error(error);
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
    xField: "UV",
    yField: "DAU",
    sizeField: "region",
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
      fields: ["UV", "DAU", "region"],
      customContent: (title, items) => {
        const field = items?.[0];
        const formatterInfo = {
          UV: (value) => value + "万",
          DAU: (value) => value + "万",
          region: () => "%",
        };

        let htmlStr = `<div style="margin:10px 0;font-weight:700;">${field?.data?.city}</div><div class="g2-tooltip-items">`;
        items.forEach((item) => {
          htmlStr += `<div class="g2-tooltip-item" style="margin-bottom:8px;display:flex;justify-content:space-between;">
                <span class="g2-tooltip-item-label" style="margin-right: 12px;">${
                  item.name
                }</span>
                <span class="g2-tooltip-item-value">${
                  item.name === "region"
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
