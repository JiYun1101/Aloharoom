//삭제 후 이동
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
import baseURL from "../api/baseURL";

import PostInfoDiv from "./postinfopage2/PostInfoDiv";
import PostInfoFlexDiv from "./postinfopage2/PostInfoFlexDiv";
import PostInfoSpan from "./postinfopage2/PostInfoSpan";
import UserProfileImg from "./postinfopage2/UserProfileImg";
import WriteComment from "./postinfopage2/commentcomponents/WriteComment";
import ReadCommentSection from "./postinfopage2/commentcomponents/ReadCommentSection";
import DeletePostModal from "../modal/DeletePostModal";

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
  const [data, setData] = useState({}); // 조회된 데이터를 저장할 상태 변수

  console.log("1: ", communityId);
  const boardId = useParams().id;
  const navigate = useNavigate();
  const postInfoContentSpanRef = useRef(null);
  const [commentData, setCommentData] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [contents, setContents] = useState("");
  const [deposit, setDeposit] = useState("");
  const [flat, setFlat] = useState("");
  const [floor, setFloor] = useState("");
  const [gender, setGender] = useState("");
  const [homeType, setHomeType] = useState("");
  const [imgUrls, setImgUrls] = useState([]);
  const [isHeart, setIsHeart] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [myHashtag, setMyHashtag] = useState([]);
  const [myHomeHashtag, setMyHomeHashtag] = useState([]);
  const [nickname, setNickName] = useState("");
  const [preferAgeRange, setPreferAgeRange] = useState("");
  const [price, setPrice] = useState("");
  const [openChatUrl, setOpenChatUrl] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [rent, setRent] = useState("");
  const [roomCount, setRoomCount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [totalFloor, setTotalFloor] = useState("");
  const [tradeType, setTradeType] = useState("");
  const [userId, setUserId] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [myProfileURL, setMyProfileURL] = useState("");
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false);
  const showDeletePostModal = () => {
    setIsDeletePostModalOpen(true);
  };
  const handleDeletePostCancel = () => {
    setIsDeletePostModalOpen(false);
  };
  const handleDeletePostOk = () => {
    DeletePostInfoData();
    setIsDeletePostModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${baseURL}/api/communityboard/${communityId}`,
          { withCredentials: true }
        );
        setData(result.data);
        setTitle(result.data.title);
        setContents(result.data.contents);
        setImgUrls(result.data.imgUrls);
        console.log(result.data);
      } catch (error) {
        if (error.response && error.response.status === 500) {
          navigate("../Login");
        } else {
          console.log("DeletePostInfoData axios error", error);
        }
      }
    };

    fetchData();
  }, [communityId]);

  async function FetchPostInfoData() {
    await axios
      .get(`${baseURL}/api/communityboard/${communityId}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("FetchPostInfoData ", response.data);
        setAddress(response.data.address);
        setAge(response.data.age);
        setContents(response.data.contents);
        setDeposit(response.data.deposit);
        setFlat(response.data.flat);
        setFloor(response.data.floor);
        setGender(response.data.gender);
        setHomeType(response.data.homeType);
        setImgUrls(response.data.imgUrls);
        setIsHeart(response.data.isHeart);
        setMaintenance(response.data.maintenance);
        setMyHashtag(response.data.myHashtag);
        setMyHomeHashtag(response.data.myHomeHashtag);
        setNickName(response.data.nickname);
        setPreferAgeRange(response.data.preferAgeRange);
        setPrice(response.data.price);
        setOpenChatUrl(response.data.openChatUrl);
        setProfileImageUrl(response.data.profileImgUrl);
        setRent(response.data.rent);
        setRoomCount(response.data.roomCount);
        setStartDate(response.data.startDate);
        setTotalFloor(response.data.totalFloor);
        setTradeType(response.data.tradeType);
        setUserId(response.data.userId);
        setX(response.data.x);
        setY(response.data.y);
      })
      .catch((error) => {
        console.log(" FetchPostInfoData axios error");
      });
  }

  async function DeletePostInfoData() {
    await axios
      .delete(`${baseURL}/api/communityboard/${communityId}`)
      .then((response) => {
        navigate(`../CommunityPage`);
      })
      .catch((error) => {
        console.log("DeletePostInfoData axios error");
      });
  }

  async function FetchBoardComment() {
    await axios
      .get(`${baseURL}/api/communityboard/${communityId}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("response.data ", response.data);
        setCommentData(response.data);
      })
      .catch((error) => {
        console.log("fetchBoardComment axios error");
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
        FetchBoardComment();
      })
      .error((error) => {
        console.log("makeCommentRequest axios error");
      });
  }

  async function fetchMyInfo() {
    await axios
      .get(`${baseURL}/api/communityboard/myPage`, {
        withCredentials: true,
      })
      .then((response) => {
        setMyProfileURL(response.data.profileUrl);
      })
      .catch((error) => {
        console.log("axios fetchMyInfo error");
      });
  }

  //한번 렌더링 될때 데이터를 받아온다.
  useEffect(() => {
    FetchPostInfoData();
    FetchBoardComment();
    fetchMyInfo();
  }, []);

  return (
    <>
      {isDeletePostModalOpen ? (
        <DeletePostModal
          isDeletePostModalOpen={isDeletePostModalOpen}
          handleOk={handleDeletePostOk}
          handelCancel={handleDeletePostCancel}
        />
      ) : (
        <></>
      )}
      <PostInfoPageContainer>
        <PostInfoPageBox>
          <PostInfoImageBox>
            <Container>
              <Swiper
                modules={[Navigation, Scrollbar, Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={1}
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
            <TitleSpan>{data.title}</TitleSpan>
          </TitleDiv>
          <ProfileHeartDiv>
            <ProfileDiv>
              <ProfileImg src="blue.png" />
              {/* <ProfileName>{nickname}</ProfileName> */}
            </ProfileDiv>
            <HeartDiv>
              {localStorage.getItem("userId") ? (
                <>
                  {parseInt(userId) ===
                  parseInt(localStorage.getItem("userId")) ? (
                    <>
                      <Link
                        to={`../updateCommunityPostPage/${communityId}`}
                        style={LinkToIconStyle}
                      >
                        {<AiOutlineEdit size={40} />}
                      </Link>
                      <AiOutlineDelete
                        onClick={() => {
                          showDeletePostModal();
                        }}
                        size={40}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
            </HeartDiv>
          </ProfileHeartDiv>

          <PostHashTagDiv></PostHashTagDiv>
          <PostContentDiv>
            <PostContentSpan>{data.contents}</PostContentSpan>
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
    </>
  );
};

export default PostInfoPage;
