import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/charts";
import axios from "axios";
import baseURL from "../api/baseURL";

// 이전 코드 생략...

const DemoColumn = ({ flat }) => {
  // 컴포넌트 이름을 DemoColumn으로 변경
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/data/${flat}`);
        setDataPoints(response.data);
        console.log("response.data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [flat]);

  // 데이터 포인트를 올바르게 구성합니다.
  const filteredDataPoints = Object.entries(dataPoints)
    .filter(([key]) => key !== "userTotal")
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});

  const data = Object.entries(filteredDataPoints).map(([key, value]) => {
    const [start, end] = key.slice(1).split("e"); // key 값을 분할하여 시작과 끝 값을 추출합니다.
    const range = `${start}만원~${end}만원`; // "key(1) 평~ key(2)평" 형식으로 range 값을 생성합니다.

    return {
      range,
      count: value,
    };
  });

  const config = {
    data: data,
    xField: "range",
    yField: "count",
    columnWidthRatio: 0.8, // 막대의 너비 비율을 조정합니다.
    color: (d) => (d.count === 0 ? "#DDDDDD" : "#5B8FF9"), // 0인 경우에는 회색, 아닌 경우에는 파란색으로 막대 색상을 설정합니다.
    label: {
      position: "top",
      style: {
        fill: "#FFFFFF",
      },
    },
  };

  return <Column {...config} />;
};

export default DemoColumn;
