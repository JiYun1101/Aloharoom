import { Link } from "react-router-dom";
import { useState } from "react";
import React, { useEffect } from "react";
import Header from "../Header";
import BannerSection from "../mainpage/BannerSection";
import styled from "styled-components";
import "../../style//About.css";
import Graph_number from "./Graph_number";
import Graph_cost from "./Graph_cost";
import Graph_user from "./Graph_user";
import Graph_map from "./Graph_map";
import baseURL from "../api/baseURL";

import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const MainBox = styled.section`
  font-size: 1.3rem;
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 수직 중앙 정렬을 위해 추가 */
  text-align: center; /* 내용을 가로 중앙 정렬하기 위해 추가 */
`;

const MainBox2 = styled.section`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroBox0 = styled.div`
  z-index: 1;
  font-size: 1.3rem;
  width: 100%;
  text-align: center;
  margin-top: -30rem;
  display: grid;
  justify-content: center;
  text-align: center;
  color: white;
`;

const IntroBox = styled.div`
  font-size: 1.3rem;
  width: 100%;
  justify-content: center;
  text-align: center;

  display: grid;
  font-size: 1.2rem;
  font-weight: 700;
  color: #85afe1;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
const IntroBox1 = styled.div`
  margin-top: 2rem;
  grid-column: 1; /* 첫 번째 열에 배치 */
`;

const IntroBox2 = styled.div`
  margin-top: 2rem;
  grid-column: 2; /* 두 번째 열에 배치 */
`;

const SpanDiv = styled.div`
  height: 5rem;
`;

const MainContainer = styled.section`
  justify-content: flex-start;
  overflow: auto;
`;

const MainPage = styled.section`
  position: relative;
  margin: 0 190%;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const letter = styled.section`
  font-weight: bold;
`;

const GraphBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 600px;
  height: 600px;
  border: 2px solid gray;
  border-radius: 10px;
  overflow: hidden;
`;

const LoginButton = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  width: 200px;
  transform: translate(350%, 0);
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #47a5fd;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 10px;
  padding: 10px;
  cursor: pointer;
  color: "#47a5fd";
`;

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 데이터를 받아오는 API 호출
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseURL}/api/data/${flat}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleButtonClick = () => {
    console.log(flat); // flat 값을 콘솔에 출력
    fetchData();
  };

  const handleInputChange = (e) => {
    setFlat(e.target.value); // 입력한 값을 flat에 저장
  };

  const [componentDisabled, setComponentDisabled] = useState(false);
  const [flat, setFlat] = useState("34"); // 초기값을 34로 설정

  return (
    <MainContainer>
      <>
        <Header />
        <div className="App"></div>
        <MainBox>
          <BannerSection />
        </MainBox>{" "}
        <IntroBox0>
          <div>높아지는 물가와 어려워지는 내집마련,</div>
          <div>어딘가에 나랑 잘 맞는 룸메이트가 있지 않을까요?</div>
          <div>지금 알로하룸을 이용중인 사람의 수!</div>
          <div style={{ width: "1000px", color: "white" }}>
            <Graph_number />
          </div>
        </IntroBox0>
        <IntroBox>
          <SpanDiv />
          <SpanDiv />
          <SpanDiv />
          <SpanDiv />
          <SpanDiv />
          <SpanDiv />
          <div>&lt;알로하룸을 방문한 이용자수의 변화!&gt;</div>
          <SpanDiv />
          <GraphBox>
            <div style={{ width: "30rem", height: "30rem" }}>
              <Graph_user />
            </div>
          </GraphBox>
          <SpanDiv />
          <div>&lt;알로하룸에 있는 방의 지역별 그래프!&gt;</div>
          <SpanDiv />
          <GraphBox>
            <div
              style={{
                width: "20rem",
                height: "20rem",
                marginTop: "-23rem",
                marginLeft: "-10rem",
              }}
            >
              <Graph_map />
            </div>
          </GraphBox>
          <SpanDiv />
          <div>&lt;알로하룸의 평수 별 월세 그래프!&gt;</div>
          <div>(직접 궁금한 평수를 넣어보세요)</div> <SpanDiv />
          <GraphBox>
            <div style={{ width: "30rem", height: "30rem", marginTop: "2rem" }}>
              <Graph_cost flat={flat} />{" "}
            </div>
            <Form
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              disabled={componentDisabled}
              style={{
                width: 200,
                margin: "0 auto",
                fontSize: "1.2rem",
                fontWeight: "700",
                marginTop: "2rem",
              }}
            >
              <Form.Item label="평수">
                <Input value={flat} onChange={handleInputChange} />
              </Form.Item>
            </Form>
          </GraphBox>
        </IntroBox>
      </>
      <SpanDiv />
      <SpanDiv />
      <Link to="../Login" style={{ textDecoration: "none", color: "#47a5fd" }}>
        <LoginButton>로그인 하러가기!</LoginButton>
      </Link>
      <SpanDiv />
    </MainContainer>
  );
};

export default About;
