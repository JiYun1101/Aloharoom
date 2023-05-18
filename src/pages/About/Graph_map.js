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
          UV: 2.7,
          DAU: 1.8,
          region: 3,
        },
        {
          city: "광주",
          UV: 1.7,
          DAU: 1.8,
          region: 13,
        },
        {
          city: "경기도",
          UV: 1.68,
          DAU: 4.2,
          region: 16,
        },
        {
          city: "서울",
          UV: 1.6,
          DAU: 4,
          region: 16,
        },
        {
          city: "강원도",
          UV: 2.6,
          DAU: 4,
          region: 19,
        },
        {
          city: "대전",
          UV: 2.1,
          DAU: 3,
          region: 90,
        },
        {
          city: "제주도",
          UV: 1.6,
          DAU: 0.0,
          region: 30,
        },
      ];

      modifiedData.forEach((item) => {
        const target = regionBoardMap[item.city];
        if (target) {
          item.region = target.region;
        }
      });

      setData(modifiedData);

      console.log("Data loaded successfully");
    } catch (error) {
      console.error("Data loading failed", error);
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
