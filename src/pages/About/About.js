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
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainBox2 = styled.section`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroBox = styled.div`
  width: 40%;
  margin: 0 30%;
  text-align: center;
  margin-top: 2rem;
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
        </MainBox>
        <IntroBox>
          <p>높아지는 물가와 어려워지는 내집마련,</p>
          <p>어딘가에 나랑 잘 맞는 룸메이트가 있지 않을까요?</p>
          <MainBox2 />
          <p>지금까지 공유공간을 찾은 사람의 수!</p>
          <SpanDiv />
          <MainBox2 />

          <SpanDiv />
          <Graph_number />
          <SpanDiv />
          <Graph_user />
          <SpanDiv />
          <Graph_map />
          <SpanDiv />
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
              {/* <Form.Item label="Button">
                <Button onClick={handleButtonClick}>Button</Button>
              </Form.Item> */}
            </Form>
            {/* 데이터 출력을 위한 컴포넌트 */}
          </>
        </IntroBox>
      </>
      <SpanDiv />
      <SpanDiv />
    </MainContainer>
  );
};

export default About;
