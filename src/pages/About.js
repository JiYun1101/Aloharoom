import { Link } from "react-router-dom";
import React from "react";
import Header from "./Header";
import BannerSection from "./mainpage/BannerSection";
import styled from "styled-components";
import "../style/About.css";

const MainBox = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroBox = styled.div`
  width: 40%;
  margin: 0 30%;
  text-align: center;
  margin-top: 10rem;
`;

const About = () => {
  return (
    <>
      <Header />
      <div className="App">
        <div className="MainContainer">
          <MainBox>
            <BannerSection />
            <IntroBox>
              <p>높아지는 물가와 어려워지는 내집마련,</p>
              <p>어딘가에 나랑 잘 맞는 룸메이트가 있지 않을까요?</p>
            </IntroBox>
          </MainBox>
        </div>
      </div>
    </>
  );
};

export default About;
