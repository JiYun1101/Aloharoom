import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper/core';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineDelete, AiOutlineEdit, AiFillHeart} from "react-icons/ai";
import { BiMale, BiFemale } from "react-icons/bi";
import axios from "axios";
import InfoPageMapContainer from "./postinfopage/InfoPageMapContainer";
import PostInfoDiv from "./postinfopage/PostInfoDiv";
import PostInfoFlexDiv from "./postinfopage/PostInfoFlexDiv";
import PostInfoSpan from "./postinfopage/PostInfoSpan";
import UserProfileImg from "./postinfopage/UserProfileImg";
import WriteComment from "./postinfopage/commentcomponents/WriteComment";
import ReadCommentSection from "./postinfopage/commentcomponents/ReadCommentSection";
import baseURL from "./api/baseURL";
import DeletePostModal from "./modal/DeletePostModal";
import MatchingCompleteModal from "./modal/MatchingCompleteModal";
import HashTagButton from "./HashTagButton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import Header from "./Header";

SwiperCore.use([Pagination]);

const PostInfoPageContainer = styled.div`
    position: relative;
    height: 110rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostInfoPageSection  = styled.div`
    width: 50rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostInfoImage = styled.img`
    width: 43rem;
    height: 29rem;
`;

const SwiperContainer = styled.div`
    position: relative;
    margin-top: 1rem;
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    .swiper-slide {
        display: flex;
        justify-content: center; /* 가로 중앙 정렬 */
        align-items: center; /* 세로 중앙 정렬 */
    }
`;

const MatchingCompleteButton = styled.button`
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

const KakaoUrlSpan = styled.span`
    text-decoration: underline;
    font-size: 1rem;
    border-radius: 0.3rem;
    background-color: #bbbbbb;
    opacity: 0.5;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
`;


const LinkToIconStyle = {
    textDecoration: "none",
    color: "black",
};


const PostInfoPage = () => {
    const boardId = useParams().id;
    const navigate = useNavigate();
    const postInfoContentSpanRef = useRef(null);
    const [commentData, setCommentData] = useState([]);
    const flag = 0;
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [contents, setContents] = useState('');
    const [deposit, setDeposit] = useState('');
    const [flat, setFlat] = useState('');
    const [floor, setFloor] = useState('');
    const [gender, setGender] = useState('');
    const [homeType, setHomeType] = useState('');
    const [imgUrls, setImgUrls] = useState([]);
    const [isActivate, setIsActivate] = useState(true);
    const [isHeart, setIsHeart] = useState('');
    const [maintenance, setMaintenance] = useState('');
    const [myHashtag, setMyHashtag] = useState([]);
    const [myHomeHashtag, setMyHomeHashtag] = useState([]);
    const [nickname, setNickName] = useState('');
    const [preferAgeRange, setPreferAgeRange] = useState('');
    const [price, setPrice] = useState('');
    const [openChatUrl, setOpenChatUrl] = useState('');
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [rent, setRent] = useState('');
    const [roomCount, setRoomCount] = useState('');
    const [startDate, setStartDate] = useState('');
    const [totalFloor, setTotalFloor] = useState('');
    const [tradeType, setTradeType] = useState('');
    const [userId, setUserId] = useState('');
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [myProfileURL, setMyProfileURL] = useState('');
    const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false);
    const [isMatchingCompleteModalOpen, setIsMatchingCompleteModalOpen] = useState(false);
    const showMatchingCompleteModal = () => { setIsMatchingCompleteModalOpen(true);}
    const showDeletePostModal = () => {setIsDeletePostModalOpen(true);}
    const handleMatchingCompleteModalCancel = () => {setIsMatchingCompleteModalOpen(false);}
    const handleDeletePostCancel = () => {setIsDeletePostModalOpen(false);}

    const handleMatchingCompleteModalOk = () => {
        PostDeActivate();
        setIsMatchingCompleteModalOpen(false);
    }

    const handleDeletePostOk = () => {
        DeletePostInfoData();
        setIsDeletePostModalOpen(false);
    }
    async function FetchPostInfoData() {
        await axios.get(`${baseURL}/api/board/${boardId}`, {
                withCredentials:true
            })
            .then((response) => {
                setAddress(response.data.address);
                setAge(response.data.age);
                setContents(response.data.contents);
                setDeposit(response.data.deposit);
                setFlat(response.data.flat);
                setFloor(response.data.floor);
                setGender(response.data.gender);
                setHomeType(response.data.homeType);
                setImgUrls(response.data.imgUrls);
                setIsActivate(response.data.isActivate);
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
                console.log(' FetchPostInfoData axios error');
            })
    }

    async function DeletePostInfoData() {
        await axios
            .delete(`${baseURL}/api/board/${boardId}`)
            .then((response) => {
                navigate(`../postMapPage`);
            })
            .catch((error) => {
                console.log("DeletePostInfoData axios error");
            });
    }

    async function AddLikePost() {
        await axios.post(`${baseURL}/api/heart/${boardId}`,{},{
            withCredentials:true
        })
            .then((response) => {})
            .catch((error) => {
                console.log('AddLikePost axios error');
            })
    }

    async function DeleteLikePost() {
        await axios.delete(`${baseURL}/api/heart/${boardId}`, {
            withCredentials:true
        })
            .then((response) => {})
            .catch((error) => {
                console.log('DeleteLikePost axios error');
            })
    }

    async function FetchBoardComment() {
        await axios.get(`${baseURL}/api/comment/home/${boardId}`, {
            withCredentials:true
        })
        .then((response) => {
            setCommentData(response.data);
        })
        .catch((error) => {
            console.log('fetchBoardComment axios error');
        })
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
        await axios.post(`${baseURL}/api/comment`, {
            "userId": userId,
            "targetUserId": targetUserId,
            "boardId": boardId,
            "flag": flag,
            "content": content,
            "targetContent": targetContent,
            "layer": layer,
            "groupId": groupId
        })
        .then((response) => {
            FetchBoardComment();
        })
        .error((error) => {console.log('makeCommentRequest axios error')});
    }

    async function deleteComment(commentId) {
        await axios.delete(`${baseURL}/api/comment/${commentId}`)
        .then((response) => { FetchBoardComment();})
        .catch((error) => {console.log('deleteComment axios error')});
    }

    async function updateComment(commentId, content) {
        await axios.patch(`${baseURL}/api/comment`, {
            "homeCommentId": commentId, 
            "content": content
        })
        .then((response) => { FetchBoardComment();})
        .catch((error) => {console.log('updateComment axios error')});
    }

    async function fetchMyInfo() {
        await axios.get(`${baseURL}/api/myPage`, {
            withCredentials:true
        })
        .then((response) => { setMyProfileURL(response.data.profileUrl);})
        .catch((error) => { console.log('axios fetchMyInfo error');})
    }

    async function PostDeActivate() {
        await axios.post(`${baseURL}/api/board/deactivate/${boardId}`, {
            withCredentials:true
        })
        .then((response) => { FetchPostInfoData(); })
        .catch((error) => { console.log(`axios PostDeActivate error`);})
    }

    async function PostActivate() {
        await axios.post(`${baseURL}/api/board/activate/${boardId}`, {
            withCredentials:true
        })
        .then((response) => { 
            FetchPostInfoData(); 
            FetchBoardComment(); 
        })
        .catch((error) => { console.log(`axios PostActivate error`);})
    }

    const changeBrTag = (text) => {
        const changedText = text.replace(/\n/g, '<br />');
        return changedText;
    }

    //한번 렌더링 될때 데이터를 받아온다.
    useEffect(() => {
        FetchPostInfoData();
        FetchBoardComment();
        fetchMyInfo();
    }, []);

    return (
        <>
        {isDeletePostModalOpen ? 
            <DeletePostModal
                isDeletePostModalOpen={isDeletePostModalOpen}
                handleOk={handleDeletePostOk}
                handelCancel={handleDeletePostCancel}
            />
        :
            <></>
        }
        {isMatchingCompleteModalOpen ?
            <MatchingCompleteModal
                isMatchingCompleteModalOpen={isMatchingCompleteModalOpen}
                handleOk={handleMatchingCompleteModalOk}
                handelCancel={handleMatchingCompleteModalCancel}
            />
        :
            <></>
        }
        <Header/>
        <PostInfoPageContainer>
            <PostInfoPageSection>
                <PostInfoDiv width="100%" minHeight="30rem" marginTop="3rem">
                    <SwiperContainer>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Scrollbar, Pagination, A11y]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log("slide change")}
                        >
                            {imgUrls.map((data, index) => 
                                <SwiperSlide key={index}>
                                    <PostInfoImage src={data} key={index}/>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </SwiperContainer>
                </PostInfoDiv>
                <PostInfoFlexDiv width="95%" minHeight="4rem" alignItems="center">
                    <PostInfoSpan width="50%" color="black" fontSize="1.5rem" fontWeight="700">{address}</PostInfoSpan>
                    <PostInfoFlexDiv width="50%" minHeight="100%" flexDirection="row-reverse" alignItems="center">
                        {localStorage.getItem('userId') ? 
                            <>
                                {isHeart ? 
                                    <AiFillHeart 
                                        size={40} 
                                        onClick={() => {
                                            setIsHeart(!isHeart);
                                            DeleteLikePost();
                                        }} 
                                        style={{color: "red", marginRight: "2vw"}}/>
                                :
                                    <AiOutlineHeart 
                                        size={40} 
                                        onClick={() => {
                                            setIsHeart(!isHeart);
                                            AddLikePost();
                                        }}
                                        style={{marginRight: "2vw"}}
                                        />
                                } 
                                {parseInt(userId) === parseInt(localStorage.getItem('userId')) ?
                                    <>
                                        <AiOutlineDelete 
                                            onClick={() => {
                                                showDeletePostModal();
                                            }}
                                            size={40}
                                        />
                                        <Link to={`../updatePostPage/${boardId}`} style={LinkToIconStyle}>
                                            {<AiOutlineEdit size={40}/>}
                                        </Link>
                                    </>
                                :
                                    <></>
                                }
                            </>
                        :
                            <></>
                        }
                    </PostInfoFlexDiv>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="95%" minHeight="4.5rem" flexDirections="row">
                    <PostInfoFlexDiv width="20%" minHeight="100%" alignItems="center">
                        <UserProfileImg width="2rem" height="2rem" borderRadius="50rem" src={profileImageUrl}/>
                        <PostInfoSpan fontSize="1.2rem" marginLeft="1rem" fontWeight="600"> {nickname}</PostInfoSpan>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="20%" minHeight="100%" alignItems="center">
                        <PostInfoSpan fontSize="1.2rem" marginLeft="1rem" fontWeight="600">성별:</PostInfoSpan>
                        <PostInfoSpan fontSize="1.2rem" marginLeft="1rem">
                            {gender === 'male' ? <BiMale size={30}/> : <BiFemale size={30}/>}
                        </PostInfoSpan>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="20%" minHeight="100%" alignItems="center">
                        <PostInfoSpan fontSize="1.2rem" marginLeft="1rem" fontWeight="600">나이:</PostInfoSpan>
                        <PostInfoSpan fontSize="1.2rem" marginLeft="1rem" fontWeight="600">{age}</PostInfoSpan>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="40%" minHeight="100%" alignItems="center">
                        <PostInfoSpan fontSize="1.2rem" marginLeft="1rem" fontWeight="600">선호 연령층:</PostInfoSpan>
                        <PostInfoSpan fontSize="1.2rem" marginLeft="1rem" fontWeight="600">{preferAgeRange}</PostInfoSpan>
                    </PostInfoFlexDiv>
                </PostInfoFlexDiv>
                {openChatUrl !== "" ? 
                    <PostInfoFlexDiv width="95%" minHeight="auto" flexDirections="row" marginBottom="1rem">
                        <a 
                            href={openChatUrl}
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: "none",
                                color: "initial"
                            }}
                        >
                            <KakaoUrlSpan>카카오톡 오픈채팅</KakaoUrlSpan>
                        </a>
                    </PostInfoFlexDiv>
                :
                    <></>
                }
                <PostInfoFlexDiv width="95%" borderBottom="solid 0.1rem #bbbbbb"/>
                {myHashtag.length === 0 ? 
                    <></>
                :
                    <>
                        <PostInfoDiv width="95%" minHeight="2rem" marginTop="1rem">
                            <PostInfoSpan fontSize="1.5rem" fontWeight="600">작성자 성향</PostInfoSpan>
                        </PostInfoDiv>
                        <PostInfoFlexDiv 
                            width="95%" 
                            minHeight="auto" 
                            paddingTop="1rem"
                            paddingBottom="1rem"
                            flexDirections="row" 
                            flexWrap="wrap" 
                            gap="0.5rem" 
                            borderBottom="solid 0.1rem #bbbbbb"
                        >
                            { myHashtag && myHashtag.map((data, idx) => <HashTagButton key={idx}>{data}</HashTagButton>)}
                        </PostInfoFlexDiv>
                    </>
                }
                {myHomeHashtag.length === 0 ?
                    <></>
                :
                    <>
                        <PostInfoDiv width="95%" minHeight="2rem" marginTop="1rem">
                            <PostInfoSpan fontSize="1.5rem" fontWeight="600">작성자 거주지 성향</PostInfoSpan>
                        </PostInfoDiv>
                        <PostInfoFlexDiv 
                            width="95%" 
                            minHeight="auto" 
                            paddingTop="1rem"
                            paddingBottom="1rem"
                            flexDirections="row" 
                            flexWrap="wrap" 
                            gap="0.5rem" 
                            borderBottom="solid 0.1rem #bbbbbb"
                        >
                            { myHomeHashtag && myHomeHashtag.map((data, idx) => <HashTagButton key={idx}>{data}</HashTagButton>)}
                        </PostInfoFlexDiv>
                    </>
                }
                <PostInfoDiv width="95%" minHeight="2rem" marginTop="1rem">
                    <PostInfoSpan fontSize="1.5rem" fontWeight="600">작성자 거주지 정보</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoDiv width="95%" minHeight="2rem" marginTop="1rem">
                    <PostInfoSpan fontSize="1.3rem" fontWeight="600">주소</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoDiv width="95%" minHeight="2rem" marginTop="0.5rem">
                    <PostInfoSpan fontSize="1.2rem">{address}</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoDiv width="95%" minHeight="2rem" marginTop="1rem">
                    <PostInfoSpan fontSize="1.3rem" fontWeight="600">입주 가능 날짜</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoDiv width="95%" minHeight="2rem" marginTop="0.5rem">
                    <PostInfoSpan fontSize="1.2rem">{startDate}</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoDiv width="95%" minHeight="2rem" marginTop="1rem">
                    <PostInfoSpan fontSize="1.3rem" fontWeight="600">주거형태</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoFlexDiv width="95%" minHeight="2rem" flexDirections="row" marginTop="0.5rem">
                    <PostInfoFlexDiv width="100%" minHeight="100%" alignItems="center">
                        <PostInfoSpan fontSize="1.2rem">
                            {homeType === 'apartment' ?
                                ` 아파트` 
                                : homeType === 'villa' ? ` 주택` : ` 오피스텔`
                            }
                            {`, `}
                            {`방 ${roomCount}개`}
                            {`, `}
                            {`${flat}평`}
                        </PostInfoSpan>
                    </PostInfoFlexDiv>
                </PostInfoFlexDiv>
                <PostInfoDiv width="95%" minHeight="2rem" marginTop="1rem">
                    <PostInfoSpan fontSize="1.3rem" fontWeight="600">층수</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoDiv width="95%" minHeight="2rem" marginTop="0.5rem">
                    <PostInfoSpan fontSize="1.2rem">{`${floor}/${totalFloor}층`}</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoDiv width="95%" minHeight="2rem" marginTop="1rem">
                    <PostInfoSpan fontSize="1.3rem" fontWeight="600">계약</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoDiv width="95%" minHeight="2rem" marginTop="0.5rem">
                    <PostInfoSpan fontSize="1.2rem">
                        {`${tradeType}`}
                        {`, `}
                        {`${price}`}
                        {`, `}
                        {`${maintenance}만원(관리비)`}
                    </PostInfoSpan>
                </PostInfoDiv>
                <PostInfoDiv width="95%" minHeight="2rem" marginTop="1rem" >
                    <PostInfoSpan fontSize="1.3rem" fontWeight="600">룸메이트 가격</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoDiv width="95%" minHeight="2rem" marginTop="0.5rem" borderBottom="solid 0.1rem #bbbbbb">
                    <PostInfoSpan fontSize="1.2rem">{`${rent}만원`}</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoDiv 
                    width="95%" 
                    minHeight="auto"
                    height="fit-content"
                    marginTop="1.5rem" 
                    marginBottom="1.5rem"
                >
                    <PostInfoSpan 
                        dangerouslySetInnerHTML={{ __html: changeBrTag(contents)}}
                        ref={postInfoContentSpanRef} 
                        color="black" 
                        fontSize="1.2rem" 
                        fontWeight="500"
                    />
                </PostInfoDiv>
                <PostInfoDiv 
                    width="95%"
                    borderBottom="solid 0.1rem #bbbbbb" 
                />
                <PostInfoFlexDiv width="95%" minHeight="30rem" marginTop="1rem" justifyContent="center" alignItems="center">
                    <PostInfoDiv width="100%" height="29rem" position="relative">
                        <InfoPageMapContainer 
                            x={x} 
                            y={y} 
                            address={address}
                            homeType={homeType}
                        />
                    </PostInfoDiv>
                </PostInfoFlexDiv>
                {parseInt(userId) === parseInt(localStorage.getItem('userId')) ?
                    <>
                        {isActivate ?
                            <PostInfoFlexDiv width="95%" minHeight="4rem" alignItems="center" flexDirection="row-reverse">
                                <MatchingCompleteButton
                                    onClick={() => {
                                        showMatchingCompleteModal();
                                    }}
                                >
                                    매칭완료
                                </MatchingCompleteButton>
                            </PostInfoFlexDiv>
                        :
                            <PostInfoFlexDiv width="95%" minHeight="4rem" alignItems="center" flexDirection="row-reverse">
                                <MatchingCompleteButton
                                    onClick={() => {
                                        PostActivate();
                                    }}
                                >
                                    매칭재개
                                </MatchingCompleteButton>
                            </PostInfoFlexDiv>
                        }
                    </>
                :
                    <></>
                }
                <PostInfoFlexDiv width="95%" borderBottom="solid 0.1rem #bbbbbb"/>
                <PostInfoDiv width="95%" minHeight="2.5rem" marginTop="1rem" borderBottom="solid 0.1rem #bbbbbb">
                    <PostInfoSpan fontSize="1.5rem" fontWeight="600">댓글</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoFlexDiv width="95%" minHeight="5rem" marginTop="1rem" flexDirection="column" gap="1rem">
                    {commentData.map((data, idx) => (
                        <ReadCommentSection
                            key={idx} 
                            data={data}
                            makeCommentRequest={makeCommentRequest}
                            boardId={boardId}
                            deleteComment={deleteComment}
                            updateComment={updateComment}
                            myProfileURL={myProfileURL}
                            flag={flag}
                        />
                    ))}
                    {localStorage.getItem('userId') ? 
                        <WriteComment 
                            makeCommentRequest={makeCommentRequest}
                            boardId={boardId}
                            myProfileURL={myProfileURL}
                            flag={flag}
                        />
                    :
                        <></>
                    }
                </PostInfoFlexDiv>
            </PostInfoPageSection>
        </PostInfoPageContainer>
        </>
    );
}

export default PostInfoPage;

