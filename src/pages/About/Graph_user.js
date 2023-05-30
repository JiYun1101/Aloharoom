import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import axios from "axios";
import baseURL from "../api/baseURL";

const DemoLine = () => {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { userNumIncreaseMap },
        } = await axios.get(`${baseURL}/api/data`);
        console.log("사람 데이터", Object.values(userNumIncreaseMap));
        console.log("사람 데이터(서울)", Object.values(userNumIncreaseMap)[2]);

        const data = [
          {
            year: "1월",
            value: Object.values(userNumIncreaseMap)[0],
          },
          {
            year: "2월",
            value: Object.values(userNumIncreaseMap)[1],
          },
          {
            year: "3월",
            value: Object.values(userNumIncreaseMap)[2],
          },
          {
            year: "4월",
            value: Object.values(userNumIncreaseMap)[3],
          },
          {
            year: "5월",
            value: Object.values(userNumIncreaseMap)[4],
          },
          {
            year: "6월",
            value: Object.values(userNumIncreaseMap)[5],
          },
          {
            year: "7월",
            value: Object.values(userNumIncreaseMap)[6],
          },
          {
            year: "8월",
            value: Object.values(userNumIncreaseMap)[7],
          },
          {
            year: "9월",
            value: Object.values(userNumIncreaseMap)[8],
          },
          {
            year: "10월",
            value: Object.values(userNumIncreaseMap)[9],
          },
          {
            year: "11월",
            value: Object.values(userNumIncreaseMap)[10],
          },
          {
            year: "12월",
            value: Object.values(userNumIncreaseMap)[11],
          },
        ];

        setDataPoints(data);
      } catch (error) {
        console.error("데이터를 불러오는 중에 오류가 발생했습니다.", error);
      }
    };

    fetchData();
  }, []); // 빈 배열을 의존성 배열로 전달하여 컴포넌트가 마운트될 때만 fetchData 함수가 실행되도록 합니다.

  const config = {
    data: dataPoints,
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
