import React from "react";
import Header from "./Header";
import BannerSection from "./mainpage/BannerSection";
import styled from "styled-components";
import "../style/About.css";
import Card from "antd/es/card/Card";

const MainBox = styled.section`
  position: relative;
  width: 100%;
  height: 1000px;
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

const CardBox2 = styled.div`
  position: absolute;
  top: 23rem;
  left: 18.5vw;
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  overflow: auto;
  gap: 2rem;
`;

const CardPost2 = styled.div`
  min-width: 70%;
  height: 10rem;
  border-color: black;
  border-style: solid;
  border-radius: 1rem;
`;

const CardPost3 = styled.div`
  position: absolute;
  bottom: 0;
  left: 80%;
  min-width: 10%;
  height: 40rem;
  border-color: black;
  border-style: solid;
  border-radius: 1rem;
`;

const NewPostPage = () => {
  return (
    <MainContainer>
      <>
        <Header />
        <div className="App"></div>
        <MainBox>
          <p>자유게시판</p>
        </MainBox>
        <CardBox2>
          <CardPost2 />
          <CardPost2 />
          <CardPost2 />
          <CardPost2 />
        </CardBox2>
        <CardPost3 />
        <IntroBox></IntroBox>
      </>
    </MainContainer>
  );
};

export default NewPostPage;
