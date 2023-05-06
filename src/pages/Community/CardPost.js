import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react"; // useRef를 추가
import Header from "../Header";
import styled from "styled-components";
import CardPost2 from "./CardPost2";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Segmented, Space } from "antd";
import { Pagination } from "antd";
import axios from "axios";
import { useRef } from "react";

const Page = styled.div`
  margin-top: 1rem;
`;

const PageNum = styled.div`
  margin-top: 113rem;
  margin-left: 33rem;
`;

const CategoryNum = styled.div`
  text-align: center;
`;

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
const CardBox2 = styled.div`
  position: absolute;
  top: 13rem;
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
  margin-right: auto;
`;

const CardImage = styled.img`
  margin-top: -70px;
  margin-left: 20px;
  width: 25%;
  height: 130px;
  border-radius: 1rem;
`;

const CardPost3 = styled.div`
  position: fixed;
  top: 10rem;
  right: 2%;
  width: 15%;
  height: 35rem;
  border-color: #bbbbbb;
  border-style: solid;
  border-radius: 1rem;
`;

const Community = ({ type }) => {
  const [data, setData] = useState([]);
  const cardRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://localhost:8080/api/communityboard"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        setScrollTop(cardRef.current.scrollTop);
      }
    };

    if (cardRef.current) {
      cardRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <CardBox2>
      {data.map((post) => (
        <Card2 key={post.communityId}>
          <CommunityDiv>
            <CommunityButton>
              {post.code === 1 ? "방자랑" : "정보공유"}
            </CommunityButton>
          </CommunityDiv>
          <DateDiv>
            <DateSpan>{post.createdAt}</DateSpan>
          </DateDiv>
          <TitleDiv>
            <TitleSpan>{post.title}</TitleSpan>
          </TitleDiv>
          <CardImageDiv>
            <CardImage src={post.imgUrls[0]} />
          </CardImageDiv>
        </Card2>
      ))}
    </CardBox2>
  );
};

export default Community;
