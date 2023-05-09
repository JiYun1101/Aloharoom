import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Link, useNavigate } from "react-router-dom";
//import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { GrDeliver } from "react-icons/gr";
import { GiMeal } from "react-icons/gi";
import { Map } from "react-kakao-maps-sdk";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import { useParams } from "react-router-dom";

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

  const [post, setPost] = useState({
    title: "",
    imgUrls: [],
    contents: "",
    views: [],
    code: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:8080/api/communityboard?communityId=${communityId}`
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

  console.log(post.title);

  const cardRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

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

  const DeletePostInfoData = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/communityboard?communityId=${communityId}`
      );
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
              {post.imgUrls.map((data, index) => (
                <SwiperSlide key={index}>
                  <PostInfoImage src={data} key={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </PostInfoImageBox>
        <TitleDiv>
          <TitleSpan>{post.title}</TitleSpan>
        </TitleDiv>
        <ProfileHeartDiv>
          <ProfileDiv>
            <ProfileImg src="blue.png" />
            {/* <ProfileName>{post.nickname}</ProfileName> */}
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
          <PostContentSpan>{post.contents}</PostContentSpan>
        </PostContentDiv>

        <CommentSection>
          <CommentBox>
            <CommentProfileDiv>
              <CommentProfileImg src="blue.png" />
              <CommentProfileSpan>wkdgns1979</CommentProfileSpan>
            </CommentProfileDiv>
            <CommentInputDiv>
              <CommentSpan>안녕하세요!</CommentSpan>
              <AddCommentSpan>답글 쓰기</AddCommentSpan>
            </CommentInputDiv>
          </CommentBox>
          <SubCommentBox>
            <CommentProfileDiv>
              <CommentProfileImg src="blue.png" />
              <CommentProfileSpan>wkdgns1979</CommentProfileSpan>
            </CommentProfileDiv>
            <CommentInputDiv>
              <CommentInput type="text" />
              <CommentWriteButton>쓰기</CommentWriteButton>
            </CommentInputDiv>
          </SubCommentBox>
        </CommentSection>
      </PostInfoPageBox>
    </PostInfoPageContainer>
  );
};
export default PostInfoPage;
