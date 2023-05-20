import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
//import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import baseURL from "../api/baseURL";
import CommunityReadCommentSection from "./commentcomponents/CommunityReadCommentSection";
import CommunityWriteComment from "./commentcomponents/CommunityWriteComment";

SwiperCore.use([Pagination]);

const PostInfoPageContainer = styled.div`
  height: 110rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostInfoPageBox = styled.div`
  width: 50rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostInfoImageBox = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 15rem;
`;

const Container = styled.div`
  margin-top: 1rem;
  .swiper-slide {
    margin-right: 20px; /* SwiperSlide 간격 조정 */
  }
`;

const PostInfoImage = styled.img`
  width: 20rem;
  height: 13rem;
`;

const TitleDiv = styled.div`
  width: 95%;
  height: 3rem;
  display: flex;
  align-items: center;
`;

const TitleSpan = styled.span`
  color: black;
  font-size: 1.2rem;
  font-weight: 700;
`;

const ProfileHeartDiv = styled.div`
  width: 95%;
  height: 4.5rem;
  display: flex;
  flex-direction: row;
  border-bottom: solid 0.1rem #bbbbbb;
`;

const ProfileDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50rem;
`;

const ProfileName = styled.span`
  margin-left: 1rem;
  color: #47a5fd;
  font-size: 1.2rem;
`;

const HeartDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const PostHashTagDiv = styled.div`
  width: 95%;
  height: 6rem;
  display: flex;
  //align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.2rem;
  border-bottom: solid 0.1rem #bbbbbb;
`;

const HashTagButton = styled.button`
  width: 7rem;
  height: 2rem;
  font-size: 1rem;
  border-width: 0.1rem;
  border-style: solid;
  border-radius: 0.3rem;
  background-color: white;
  border-color: #47a5fd;
  color: #47a5fd;
`;

const PostContentDiv = styled.div`
  margin-top: 1rem;
  width: 95%;
  height: 15rem;
  border-bottom: solid 0.1rem #bbbbbb;
`;

const PostContentSpan = styled.span`
  color: black;
  font-size: 1.2rem;
  font-weight: 500;
`;

const CommentSection = styled.div`
  margin-top: 1rem;
  width: 95%;
  min-height: 5rem;
  display: flex;
  flex-direction: column;
`;

const CommentBox = styled.div`
  border-style: solid;
  border-radius: 0.5rem;
  border-color: #47a5fd;
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
`;

const SubCommentBox = styled.div`
  border-style: solid;
  border-radius: 0.5rem;
  border-color: #47a5fd;
  margin-top: 0.5rem;
  margin-left: 15%;
  width: 85%;
  height: 6rem;
  display: flex;
  flex-direction: column;
`;

const CommentProfileDiv = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
`;

const CommentInputDiv = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
`;

const CommentProfileImg = styled.img`
  margin-left: 0.7rem;
  border-radius: 10rem;
  width: 2.5rem;
  height: 2.5rem;
`;

const CommentProfileSpan = styled.span`
  margin-left: 0.5rem;
  color: #47a5fd;
  font-size: 1.2rem;
`;

const CommentSpan = styled.span`
  margin-left: 4rem;
  color: black;
  font-size: 1.2rem;
`;

const AddCommentSpan = styled.span`
  margin-top: 0.5rem;
  margin-left: 1rem;
  color: #47a5fd;
  font-size: 0.8rem;
`;

const CommentInput = styled.input`
  margin-left: 0.5rem;
  border-color: #47a5fd;
  border-radius: 0.5rem;
  width: 80%;
  height: 2rem;
`;

const CommentWriteButton = styled.button`
  margin-left: 3%;
  width: 10%;
  height: 2rem;
  font-size: 1rem;
  border-width: 0.1rem;
  border-style: solid;
  border-radius: 0.3rem;
  background-color: white;
  border-color: #47a5fd;
  color: #47a5fd;
`;

const LinkToIconStyle = {
  textDecoration: "none",
  color: "black",
};

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

const PostInfoPage = () => {
  const { communityId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [imgUrls, setImgUrls] = useState([]);
  // const [nickname, setNickName] = useState(null);
  const [contents, setContents] = useState("");
  const [views, setviews] = useState([]);
  const [code, setcode] = useState([]);

  async function FetchPostInfoData() {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/communityboard/${communityId}`
      );

      console.log(response.data);
      const [commentData, setCommentData] = useState([]);

      const [post, setPost] = useState({
        title: "",
        imgUrls: [],
        contents: "",
        views: [],
        code: [],
      });

      async function fetchCommunityCommentData() {
        await axios
          .get(`${baseURL}/api/comment/community/${communityId}`)
          .then((response) => {
            console.log("fetch community comment response.data", response.data);
            setCommentData(response.data);
          })
          .catch((error) => {
            console.log(`fetchCommunityCommentData axios error`);
          });
      }

      async function makeCommentRequest(
        userId,
        targetUserId,
        boardId,
        flag,
        content,
        targetContent,
        layer,
        groupId
      ) {
        await axios
          .post(`${baseURL}/api/comment`, {
            userId: userId,
            targetUserId: targetUserId,
            boardId: boardId,
            flag: flag,
            content: content,
            targetContent: targetContent,
            layer: layer,
            groupId: groupId,
          })
          .then((response) => {
            window.location.reload();
          })
          .error((error) => {
            console.log("makeCommentRequest axios error");
          });
      }

      useEffect(() => {
        fetchCommunityCommentData();
      }, []);

      useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(
            `${baseURL}/api/communityboard?communityId=${communityId}`
          );
          setPost((prevPost) => ({
            ...prevPost,
            title: result.data[0].title,
            imgUrls: result.data[0].imgUrls,
            contents: result.data[0].contents,
            views: result.data[0].views,
            code: result.data[0].code,
          }));
        };
        fetchData();
      }, [communityId]);

      const { communityBoard } = response.data;

      if (communityBoard && communityBoard.title) {
        setTitle(communityBoard.title);
        setImgUrls(communityBoard.imgUrls);
        setContents(communityBoard.contents);
        setviews(communityBoard.views);
        setcode(communityBoard.code);
      }
    } catch (error) {
      console.log("FetchPostInfoData axios error", error);
    }
  }

  async function DeletePostInfoData() {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/communityboard?communityId=${communityId}`
      );
      navigate(`../Community`);
    } catch (error) {
      console.log("DeletePostInfoData axios error", error);
    }
  }

  useEffect(() => {
    FetchPostInfoData();
  }, []);

  return (
    <PostInfoPageContainer>
      <PostInfoPageBox>
        <PostInfoImageBox>
          <Container>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Scrollbar, Pagination, A11y]}
              spaceBetween={1}
              slidesPerView={2}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {imgUrls.map((data, index) => (
                <SwiperSlide key={index}>
                  <PostInfoImage src={data} key={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </PostInfoImageBox>
        <TitleDiv>
          <TitleSpan>{title}</TitleSpan>
        </TitleDiv>
        <ProfileHeartDiv>
          <ProfileDiv>
            <ProfileImg src="blue.png" />
            {/* <ProfileName>{nickname}</ProfileName> */}
          </ProfileDiv>
          <HeartDiv>
            <AiOutlineHeart size={40} />
            <AiOutlineEdit size={40} />
            <AiOutlineDelete
              onClick={() => {
                DeletePostInfoData();
              }}
              size={40}
            />
          </HeartDiv>
        </ProfileHeartDiv>

        <PostHashTagDiv></PostHashTagDiv>
        <PostContentDiv>
          <PostContentSpan>{contents}</PostContentSpan>
        </PostContentDiv>
        <CommentSection>
          {commentData.map((data, idx) => (
            <CommunityReadCommentSection
              key={idx}
              data={data}
              makeCommentRequest={makeCommentRequest}
              boardId={communityId}
            />
          ))}
          <CommunityWriteComment
            makeCommentRequest={makeCommentRequest}
            boardId={communityId}
          />
        </CommentSection>
      </PostInfoPageBox>
    </PostInfoPageContainer>
  );
};
export default PostInfoPage;
