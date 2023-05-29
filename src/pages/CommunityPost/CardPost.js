import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import styled from "styled-components";
import axios from "axios";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { FaRegCommentDots } from "react-icons/fa";
import neonsign from "../../img/neonsign.jpg";
import music from "../../img/music.jpg";
import clock from "../../img/clock.jpg";
import box from "../../img/box.jpg";
import blue from "../../img/blue.jpg";
import mint from "../../img/mint.jpg";
import baseURL from "../api/baseURL";
import { AiFillEye } from "react-icons/ai";

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
  textdecoration: "none";
  color: "inherit";
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
  white-space: nowrap; /* 줄 바꿈을 방지하여 오른쪽으로 길게 표시 */
  overflow: hidden; /* 넘치는 부분을 숨김 */
  text-overflow: ellipsis; /* 넘치는 부분에 ...으로 표시 */
`;

const ViewsSpan = styled.span`
  margin-right: -1.5rem;
  color: black;
  font-size: 0.9rem;
`;

const ViewsDiv = styled.div`
  width: 120%;
  height: 2rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
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

const CommentSpan2 = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 0rem;
`;

const CommentSpan3 = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-right: -3rem;
`;

const Card2 = styled.div`
  width: 900px; /* 원하는 너비 값으로 설정 */
  height: 10rem;
  border-style: solid;
  border-color: #bbbbbb;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto; /* 가운데 정렬 */
  &:hover {
    border-color: #47a5fd;
  }
`;

const CardBox2 = styled.div`
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
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
  display: fixed;
  width: 15rem; /* 이미지 너비를 100%로 설정 */
  height: 9rem; /* 이미지 높이를 자동으로 조정 */
  margin-left: 1rem; /* 왼쪽으로 1rem 떨어뜨리기 */
  border-radius: 10px; /* 가로에 둥글게 깍기 */
`;

const LinkToStyle = {
  textDecoration: "none",
  color: "inherit",
};
const CardPost = ({
  communityId,
  code,
  cardPostData,
  setCardPostData = (f) => f,
}) => {
  console.log("cardPostData", cardPostData);
  //const [data, setData] = useState(cardPostData === undefined ?  [] : cardPostData);
  const [currentIndex, setCurrentIndex] = useState(null); // 클릭한 게시물의 인덱스를 저장할 변수

  const cardRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const location = useLocation();
  console.log(code);

  const handleLinkClick = (event, message) => {
    console.log(message);
  };

  const getRoomTypeText = (code) => {
    switch (code) {
      case 1:
        return "방자랑";
      case 2:
        return "정보 공유";
      case 3:
        return "자유";
      default:
        return "";
    }
  };

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      const chunk = array.slice(i, i + size);
      chunkedArray.push(chunk);
    }
    return chunkedArray;
  };

  const chunkedData = chunkArray(cardPostData, 5);

  return (
    <CardBox2 ref={cardRef}>
      {cardPostData.map((post, index) => (
        <Link
          to={`../CommunityInfoPage/${post.communityId}`}
          key={index}
          style={LinkToStyle}
        >
          <Card2
            key={index}
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
                <RoomTypeButton>{getRoomTypeText(post.code)}</RoomTypeButton>
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
                <ProfileImg src={post.profile} />
                <ProfileSpan> {post.nickname}</ProfileSpan>
              </ProfileDiv>
              <ViewsDiv>
                <ViewsSpan>
                  <AiFillEye
                    size={30}
                    style={{ marginRight: "0.5vw", marginTop: "0.1vw" }}
                  />
                </ViewsSpan>{" "}
                <CommentDiv>
                  <CommentSpan3>{post.views}</CommentSpan3>{" "}
                </CommentDiv>
              </ViewsDiv>
              <CommentDiv>
                <CommentSpan>{post.userPost}</CommentSpan>
                <CommentSpan2>{post.commentNum}</CommentSpan2>
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
