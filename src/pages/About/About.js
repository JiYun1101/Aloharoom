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
  font-size: 1.3rem;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  display: grid;
`;

const IntroBox = styled.div`
  font-size: 1.3rem;
  width: 80%;
  text-align: center;
  margin: 4rem auto; /* 수직 및 수평 가운데 정렬 */
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2열로 분할, 각 열의 너비를 1fr로 설정 */
  grid-template-rows: auto auto; /* 각 행의 높이를 자동으로 조정 */
  gap: 8rem; /* 열 사이의 간격 설정 */
`;

const IntroBox1 = styled.div`
  margin-top: 200px;
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
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 40px;
  border: 2px solid black;
  border-radius: 10px;
`;

const LoginButton = styled.div`
  font-size: 1.3rem;
  width: 200px;
  transform: translate(350%, 0);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #85afe1;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
`;

const About = () => {
  const [flat, setFlat] = useState("");
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
        </IntroBox0>
        <IntroBox>
          <IntroBox1>
            <GraphBox>
              <div>지금 알로하룸을 이용중인 사람의 수!</div>
              <Graph_number />
            </GraphBox>
            <SpanDiv />
            <SpanDiv />
            <SpanDiv />
            <SpanDiv />
            <SpanDiv />
            <SpanDiv />
            <GraphBox>
              <div>알로하룸을 방문한 이용자수의 변화!</div>
              <Graph_user />
            </GraphBox>
          </IntroBox1>
          <IntroBox2>
            <GraphBox>
              <div>알로하룸에 있는 방의 지역별 그래프!</div>
              <Graph_map />
            </GraphBox>
            <SpanDiv />
            <GraphBox>
              <div>알로하룸의 평수 별 월세 그래프!</div>
              <div>(직접 궁금한 평수를 넣어보세요)</div>
              <Graph_cost flat={flat} />
              <SpanDiv />
              <>
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
                    maxWidth: 600,
                  }}
                >
                  <Form.Item label="Input">
                    <Input value={flat} onChange={handleInputChange} />
                  </Form.Item>
                </Form>
              </>
            </GraphBox>
          </IntroBox2>
        </IntroBox>
      </>
      <SpanDiv />
      <SpanDiv />
      <a to="/Login">
        <LoginButton>로그인 하러가기!</LoginButton>
      </a>
      <SpanDiv />
    </MainContainer>
  );
};

export default About;
