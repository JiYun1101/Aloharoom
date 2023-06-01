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
import axios from "axios";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const StyledTextArea = styled.section`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.color};
`;

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
  margin-top: 20px;
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
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #47a5fd;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  color: #47a5fd;
`;

const About = () => {
  const [data, setData] = useState([]);
  const userId = localStorage.getItem("username");
  const requestURL = `http://localhost:8080/api/board/userId/${userId}`;
  const [myProfileData, setMyProfileData] = useState("");
  async function fetchMyInfoData() {
    await axios
      .get(`${baseURL}/api/myPage`, {
        withCredentials: true,
      })
      .then((response) => {
        setMyProfileData(response.data.profileUrl);
      })
      .catch((error) => {
        console.log(`axios MyInfoPage error`);
      });
  }
  useEffect(() => {
    // 데이터를 받아오는 API 호출
    fetchMyInfoData();
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
    const value = e.target.value;
    const flatValue = value !== "" ? value : ""; // 입력값이 비어있는 경우 빈 문자열로 설정
    setFlat(flatValue); // flat 값을 업데이트
  };

  const [componentDisabled, setComponentDisabled] = useState(false);
  const [flat, setFlat] = useState(""); // 초기값을 34로 설정

  return (
    <MainContainer>
      <>
        <Header
          myProfileData={myProfileData}
          setMyProfileData={setMyProfileData}
        />
        <div className="App"></div>
        <MainBox>
          <BannerSection />
        </MainBox>{" "}
        <IntroBox0>
          <div>높아지는 물가와 어려워지는 내집마련,</div>
          <div>어딘가에 나랑 잘 맞는 룸메이트가 있지 않을까요?</div>
          <StyledTextArea>aloharoom에 가입한 이용자수의 변화</StyledTextArea>
          <div style={{ width: "1000px", color: "white" }}>
            <Graph_number />
          </div>
        </IntroBox0>
        <IntroBox>
          <SpanDiv />
          <SpanDiv />
          <SpanDiv />
          <StyledTextArea color="#47a5fd">
            {/* &lt;방문한 이용자수의 변화&gt; */}
            가입한 이용자 수의 변화
          </StyledTextArea>
          <GraphBox>
            <div
              style={{
                width: "30rem",
                height: "30rem",
                marginTop: "4rem",
                marginLeft: "-1rem",
              }}
            >
              <Graph_user />
            </div>
          </GraphBox>
          <SpanDiv />
          <StyledTextArea color="#47a5fd">
            {/* &lt;룸메이트 게시물의 지역별 그래프&gt; */}
            방의 지역별 그래프
          </StyledTextArea>
          <GraphBox>
            <div
              style={{
                width: "10rem",
                height: "10rem",
                marginTop: "-3rem",
                marginLeft: "-20rem",
              }}
            >
              <Graph_map />
            </div>
          </GraphBox>
          <SpanDiv />
          <StyledTextArea color="#47a5fd">
            {/* &lt;평수 별 월세 그래프&gt; */}
            평수별 월세 그래프
          </StyledTextArea>
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
                <Input min={0} value={flat} onChange={handleInputChange} />
              </Form.Item>
            </Form>
          </GraphBox>
        </IntroBox>{" "}
        <SpanDiv />
        <SpanDiv />
        {/* {userId ? null : (
          <>
            <Link
              to="../Login"
              style={{ textDecoration: "none", color: "#47a5fd" }}
            >
              <LoginButton>로그인 하러가기!</LoginButton>
            </Link>
            <SpanDiv />
          </>
        )} */}
      </>
    </MainContainer>
  );
};

export default About;
