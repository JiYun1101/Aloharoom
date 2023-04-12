import { Link } from "react-router-dom";
import React from "react";
import Header from "./Header";
import BannerSection from "./mainpage/BannerSection";
import styled from "styled-components";
import "../style/About.css";
import Graph_number from "./Graph_number";
import Graph_cost from "./Graph_cost";
import Graph_user from "./Graph_user";
import Graph_map from "./Graph_map";

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
  return (
    <MainContainer>
      <>
        <Header />
        <div className="App"></div>
        <MainBox>
          <BannerSection />
        </MainBox>
        <IntroBox>
          <letter>Aloharoom</letter>
          <p>우리는 당신의 취향에 딱 맞는 공간을 찾아줄 수 있습니다.</p>
          <MainBox2 />
          <p>높아지는 물가와 어려워지는 내집마련,</p>
          <p>어딘가에 나랑 잘 맞는 룸메이트가 있지 않을까요?</p>
          <MainBox2 />
          <p>지금까지 공유공간을 찾은 사람의 수!</p>
          <MainBox2 />
          <Graph_number />
          <Graph_user />
          <Graph_map />
          <Graph_cost />
        </IntroBox>
      </>
    </MainContainer>
  );
};

export default About;
