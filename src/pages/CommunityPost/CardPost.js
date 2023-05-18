import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import styled from "styled-components";
import axios from "axios";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { FaRegCommentDots } from "react-icons/fa";

const Card = styled.div`
  width: 15.5rem;
  height: 22rem;
  border-style: solid;
  border-color: #bbbbbb;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-color: #a0a0a0;
  &:hover {
    border-color: #47a5fd;
  }
`;

const RoomTypeDiv = styled.div`
  width: 90%;
  height: 2rem;
  display: flex;
  align-items: flex-end;
`;

const RoomTypeButton = styled.button`
  background-color: white;
  width: 4.5rem;
  height: 1.5rem;
  color: #47a5fd;
  font-weight: 500;
  font-size: 0.8rem;
  border: 2px solid #47a5fd;
  border-radius: 0.5rem;
  margin-left: 15rem;
`;

const MoveInDateDiv = styled.div`
  width: 88%;
  height: 2rem;
`;

const MoveInDateSpan = styled.span`
  font-size: 0.8rem;
  color: black;
  line-height: 2rem;
`;

const AddressInfoDiv = styled.div`
  width: 88%;
  height: 2.5rem;
`;

const AddressInfoSpan = styled.span`
  font-size: 1.1rem;
  font-weight: 550;
`;

const PriceInfoDiv = styled.div`
  width: 88%;
  height: 2rem;
`;

const PriceInfoSpan = styled.span`
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 600;
`;

const ProfileCommentDiv = styled.div`
  width: 95%;
  height: 2rem;
  display: flex;
  flex-direction: row;
`;

const ProfileDiv = styled.div`
  width: 65%;
  height: 2rem;
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 70%;
  margin-left: 16.5rem;
`;

const ProfileSpan = styled.span`
  margin-left: 0.5rem;
  color: black;
  font-size: 0.9rem;
`;

const CommentDiv = styled.div`
  width: 34%;
  height: 2rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const CommentLogoStyle = {
  marginRight: "0.5rem",
};

const CommentSpan = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 0.5rem;
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
  top: 10rem;
  left: 28.5vw;
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
  margin-left: 15rem;
  font-size: 1.1rem;
  font-weight: 600;
`;
const CardImageDiv = styled.div`
  width: 99%;
  height: 1rem;
  display: flex;
  justify-content: flex-start; /* 왼쪽 정렬 */
  align-items: center;
  margin-top: 0rem;
  margin-bottom: 1rem;
`;

const CardImage = styled.img`
  width: 25%; /* 20% 너비 설정 */
  // height: auto;
  margin-left: 1rem; /* 왼쪽으로 1rem 떨어뜨리기 */
  border-radius: 10px; /* 가로에 둥글게 깍기 */
`;
const CardPost = ({ communityId }) => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null); // 클릭한 게시물의 인덱스를 저장할 변수

  const cardRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const location = useLocation();
  const code = 0; // 1이 아닌 다른 값으로 변경

  useEffect(() => {
    const fetchData = async () => {
      // console.log("communityId = " + communityId);
      const result = await axios.get(
        // `http://localhost:8080/api/communityboard/code/${code}`
        `http://localhost:8080/api/communityboard/code/1`
      );
      setData(result.data[0]); // result.data[0] = 전체, result.data[1] = Top3
      console.log(result.data[0]);
    };
    fetchData();
  }, [communityId, code]); // code를 의존성 배열에 추가

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
      {data.map((post, index) => (
        <Link to={`../CommunityInfoPage/${post.communityId}`}>
          <Card2
            key={post.code}
            onClick={(event) => {
              setCurrentIndex(index); // 클릭한 게시물의 인덱스를 저장
              handleLinkClick(
                event,
                `../CommunityInfoPage/${post.communityId}`
              );
            }}
          >
            <DateDiv>
              <RoomTypeDiv>
                <RoomTypeButton>{post.userId}</RoomTypeButton>
              </RoomTypeDiv>
            </DateDiv>
            <TitleDiv>
              <TitleSpan>{post.title}</TitleSpan>
            </TitleDiv>
            <CardImageDiv>
              <CardImage src={post.imgUrls[0]} />
              {/* <CardImage src={post.imgUrls[0]} /> */}
            </CardImageDiv>
            <ProfileCommentDiv>
              <ProfileDiv>
                <ProfileImg src={post.imgUrls[0]} />
                <ProfileSpan>{post.nickname}</ProfileSpan>
              </ProfileDiv>
              <CommentDiv>
                <CommentSpan>{post.userId}</CommentSpan>
                <FaRegCommentDots size={25} style={CommentLogoStyle} />
              </CommentDiv>
            </ProfileCommentDiv>
          </Card2>
        </Link>
      ))}
    </CardBox2>
  );
};
export default CardPost;
