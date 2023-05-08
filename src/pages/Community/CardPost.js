import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import styled from "styled-components";
import CardPost2 from "./CardPost2";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Segmented, Space } from "antd";
import { Pagination } from "antd";
import axios from "axios";
import { useRef } from "react";
import RoommateCardPosts from "./RoommateCardPosts";

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
  height: 80%;
  display: flex;
  align-items: center;
`;

const CardImage = styled.img`
  width: 15%;
  height: 100%;
`;

const Community = ({ communityId }) => {
  const [data, setData] = useState([]);
  const cardRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:8080/api/communityboard?communityId=${communityId}`
      );
      setData(result.data);
    };
    fetchData();
  }, [communityId]);

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
  const handleLinkClick = (event, message) => {
    console.log(message);
  };

  return (
    <CardBox2 ref={cardRef}>
      {data.map((post) => (
        <Link to={`../CommunityInfoPage/${post.communityId}`}>
          <Card2
            key={post.communityId}
            onClick={(event) =>
              handleLinkClick(event, "../CommunityInfoPage/" + post.communityId)
            }
          >
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
        </Link>
      ))}
    </CardBox2>
  );
};

export default Community;
