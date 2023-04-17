import React from "react";
import styled from "styled-components";
import { FaRegCommentDots } from "react-icons/fa";

const Card2 = styled.div`
  min-width: 90%;
  height: 10rem;
  border-style: solid;
  border-color: #bbbbbb;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    border-color: #47a5fd;
  }
`;

const CommunityDiv = styled.div`
  width: 90%;
  height: 2rem;
  display: flex;
  align-items: flex-end;
`;

const CommunityButton = styled.button`
  margin-top: 90px;
  margin-left: 308px;
  background-color: white;
  width: 4.5rem;
  height: 1.5rem;
  color: #bbbbbb;
  font-weight: 500;
  font-size: 0.8rem;
  border: 2px solid #bbbbbb;
  border-radius: 0.5rem;
`;

const DateDiv = styled.div`
  width: 88%;
  height: 2rem;
`;

const DateSpan = styled.span`
  margin-left: 300px;
  font-size: 0.8rem;
  color: #bbbbbb;
  line-height: 2rem;
`;

const TitleDiv = styled.div`
  width: 88%;
  height: 2.5rem;
  display: flex;
  align-items: center;
`;

const TitleSpan = styled.span`
  margin-left: 300px;
  font-size: 1.1rem;
  font-weight: 600;
`;

const CardImageDiv = styled.div`
  width: 100%;
  height: 20rem;
  margin-right: auto; /* 맨 왼쪽에 자리잡게 하기 위해 auto 값을 설정 */
`;

const CardImage = styled.img`
  margin-top: -70px;
  margin-left: 20px;
  width: 25%;
  height: 130px;
  border-radius: 1rem;
`;

const CardPost2 = ({ type }) => {
  return (
    <Card2>
      <CommunityDiv>
        <CommunityButton>{type}</CommunityButton>
      </CommunityDiv>
      <DateDiv>
        <DateSpan>날짜 : 2023-11-11</DateSpan>
      </DateDiv>
      <TitleDiv>
        <TitleSpan>서울시 성북구 한성대학교 입구역 한성오피스텔</TitleSpan>
      </TitleDiv>
      <CardImageDiv>
        <CardImage src="./blue.png" />
      </CardImageDiv>
    </Card2>
  );
};

export default CardPost2;
