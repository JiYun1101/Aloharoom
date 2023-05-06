import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper/core';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineDelete, AiOutlineEdit, AiFillHeart} from "react-icons/ai";
import { BiMale, BiFemale } from "react-icons/bi";
import { GrDeliver } from "react-icons/gr";
import { GiMeal } from "react-icons/gi";
import axios from "axios";
import InfoPageMapContainer from "./postinfopage/InfoPageMapContainer";
import PostInfoDiv from "./postinfopage/PostInfoDiv";
import PostInfoFlexDiv from "./postinfopage/PostInfoFlexDiv";
import PostInfoSpan from "./postinfopage/PostInfoSpan";
import UserProfileImg from "./postinfopage/UserProfileImg";
import WriteComment from "./postinfopage/commentcomponents/WriteComment";
import ReadCommentSection from "./postinfopage/commentcomponents/ReadCommentSection";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Pagination]);

const PostInfoPageContainer = styled.div`
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
    width: 20rem;
    height: 13rem;
`;

const SwiperContainer = styled.div`
    margin-top: 1rem;
    .swiper-slide {
        margin-right: 20px; /* SwiperSlide 간격 조정 */
    }
`;

const HashTagButton = styled.button`
    width: 7rem;
    height: 2rem;
    font-size: 1rem;
    border-width: 0.1rem;
    border-style: solid;
    border-radius: 0.3rem;
    background-color: white;
    border-color: #47A5FD;
    color: #47A5FD;
`;

const MatchingCompleteButton = styled.button`
    width: 7rem;
    height: 2rem;
    font-size: 1rem;
    border-width: 0.1rem;
    border-style: solid;
    border-radius: 0.3rem;
    background-color: white;
    border-color: #47A5FD;
    color: #47A5FD;
`;

const LinkToIconStyle = {
    textDecoration: 'none',
    color: 'black'
}

const PostInfoPage = () => {
    const boardId = useParams().id;
    const navigate = useNavigate();
    const [clickLikeButton, setClickLickButton] = useState(false);
    const [commentData, setCommentData] = useState([]);
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [contents, setContents] = useState('');
    const [deposit, setDeposit] = useState('');
    const [flat, setFlat] = useState('');
    const [floor, setFloor] = useState('');
    const [gender, setGender] = useState('');
    const [hashtag, setHashTag] = useState([]);
    const [homeType, setHomeType] = useState('');
    const [imgUrls, setImgUrls] = useState([]);
    const [maintenance, setMaintenance] = useState('');
    const [nickname, setNickName] = useState('');
    const [preferAgeRange, setPreferAgeRange] = useState('');
    const [price, setPrice] = useState('');
    const [product, setProduct] = useState([]);
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [rent, setRent] = useState('');
    const [roomCount, setRoomCount] = useState('');
    const [startDate, setStartDate] = useState('');
    const [totalFloor, setTotalFloor] = useState('');
    const [tradeType, setTradeType] = useState('');
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    async function FetchPostInfoData() {
        await axios.get(`http://localhost:8080/api/board/${boardId}`, {
                withCredentials:true
            })
            .then((response) => {
                console.log('FetchPostInfoData ', response.data);
                setAddress(response.data.address);
                setAge(response.data.age);
                setContents(response.data.contents);
                setDeposit(response.data.deposit);
                setFlat(response.data.flat);
                setFloor(response.data.floor);
                setGender(response.data.gender);
                setHashTag(response.data.hashtag);
                setHomeType(response.data.homeType);
                setImgUrls(response.data.imgUrls);
                setMaintenance(response.data.maintenance);
                setNickName(response.data.nickname);
                setPreferAgeRange(response.data.preferAgeRange);
                setPrice(response.data.price);
                setProduct(response.data.product);
                setProfileImageUrl(response.data.profileImageUrl);
                setRent(response.data.rent);
                setRoomCount(response.data.roomCount);
                setStartDate(response.data.startDate);
                setTotalFloor(response.data.totalFloor);
                setTradeType(response.data.tradeType);
                setX(response.data.x);
                setY(response.data.y);
            })
            .catch((error) => {
                console.log(' FetchPostInfoData axios error');
            })
    }

    async function DeletePostInfoData() {
        await axios.delete(`http://localhost:8080/api/board/${boardId}`)
            .then((response) => {
                navigate(`../postMapPage`);
            })
            .catch((error) => {
                console.log('DeletePostInfoData axios error');
            })
    }

    async function AddLikePost() {
        await axios.post(`http://localhost:8080/api/heart/${boardId}`,{},{
            withCredentials:true
        })
            .then((response) => {})
            .catch((error) => {
                console.log('AddLikePost axios error');
            })
    }

    async function DeleteLikePost() {
        await axios.delete(`http://localhost:8080/api/heart/${boardId}`, {
            withCredentials:true
        })
            .then((response) => {})
            .catch((error) => {
                console.log('DeleteLikePost axios error');
            })
    }

    async function FetchBoardComment() {
        await axios.get(`http://localhost:8080/api/comment/home/${boardId}`, {
            withCredentials:true
        })
        .then((response) => {
            console.log('response.data ', response.data);
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
        await axios.post("http://localhost:8080/api/comment", {
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
            window.location.reload();
        })
        .error((error) => {console.log('makeCommentRequest axios error')});
    }

    //한번 렌더링 될때 데이터를 받아온다.
    useEffect(() => {
        FetchPostInfoData();
        FetchBoardComment();
    }, []);

    return (
        <PostInfoPageContainer>
            <PostInfoPageSection>
                <PostInfoDiv width="100%" height="15rem" marginTop="3rem">
                    <SwiperContainer>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Scrollbar, Pagination, A11y]}
                            spaceBetween={1}
                            slidesPerView={2}
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
                <PostInfoFlexDiv width="95%" minHeight="3rem" alignItems="center">
                    <PostInfoSpan width="50%" color="black" fontSize="1.2rem" fontWeight="700">{address}</PostInfoSpan>
                    <PostInfoFlexDiv width="50%" minHeight="100%" flexDirection="row-reverse" alignItems="center">
                        {clickLikeButton ? 
                        <AiFillHeart 
                            size={40} 
                            onClick={() => {
                                setClickLickButton(!clickLikeButton);
                                DeleteLikePost();
                            }} 
                            style={{color: "#47a5fd"}}/>
                        :
                        <AiOutlineHeart 
                            size={40} 
                            onClick={() => {
                                setClickLickButton(!clickLikeButton);
                                AddLikePost();
                            }}
                            />} 
                        <Link to={`../updatePostPage/${boardId}`} style={LinkToIconStyle}>
                            {<AiOutlineEdit size={40}/>}
                        </Link>
                        <AiOutlineDelete 
                            onClick={() => {
                                DeletePostInfoData();
                            }}
                            size={40}
                        />
                    </PostInfoFlexDiv>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="95%" minHeight="4.5rem" flexDirections="row" borderBottom="solid 0.1rem #bbbbbb">
                    <PostInfoFlexDiv width="20%" minHeight="100%" alignItems="center">
                        <UserProfileImg width="2rem" height="2rem" borderRadius="50rem" src={profileImageUrl}/>
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="1rem">{nickname}</PostInfoSpan>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="20%" minHeight="100%" alignItems="center">
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="1rem">성별:</PostInfoSpan>
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="1rem">
                            {gender === 'male' ? <BiMale style={{ color: "#47a5fd"}} size={30}/> : <BiFemale style={{ color: "#47a5fd"}} size={30}/>}
                        </PostInfoSpan>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="20%" minHeight="100%" alignItems="center">
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="1rem">나이:</PostInfoSpan>
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="1rem">{age}</PostInfoSpan>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="40%" minHeight="100%" alignItems="center">
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="1rem">선호 연령층:</PostInfoSpan>
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="1rem">{preferAgeRange}</PostInfoSpan>
                    </PostInfoFlexDiv>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="95%" minHeight="6rem" marginTop="1rem" flexDirections="row" flexWrap="wrap" gap="0.2rem" borderBottom="solid 0.1rem #bbbbbb">
                    { hashtag && hashtag.map((data, idx) => <HashTagButton key={idx}>{data}</HashTagButton>)}
                    { hashtag && hashtag.map((data, idx) => <HashTagButton key={idx}>{data}</HashTagButton>)}
                    { hashtag && hashtag.map((data, idx) => <HashTagButton key={idx}>{data}</HashTagButton>)}
                    { hashtag && hashtag.map((data, idx) => <HashTagButton key={idx}>{data}</HashTagButton>)}
                </PostInfoFlexDiv>
                <PostInfoDiv width="95%" height="3rem" marginTop="1rem">
                    <PostInfoSpan color="#47a5fd" fontSize="1.2rem">입주 가능 날짜: {startDate}</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoDiv width="95%" height="3rem" marginTop="1rem">
                    <PostInfoSpan color="#47a5fd" fontSize="1.2rem">주소: {address}</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoFlexDiv width="95%" minHeight="3rem" flexDirections="row" marginTop="1rem">
                    <PostInfoFlexDiv width="33%" minHeight="100%" alignItems="center">
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem">방 개수: {roomCount}</PostInfoSpan>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="33%" minHeight="100%" alignItems="center">
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem">주거 형태: {homeType}</PostInfoSpan>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="33%" minHeight="100%" alignItems="center">
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem">평수: {flat}</PostInfoSpan>
                    </PostInfoFlexDiv>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="95%" minHeight="3rem" flexDirections="row">
                    <PostInfoFlexDiv width="33%" minHeight="100%" alignItems="center">
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem">전체층수: {totalFloor}</PostInfoSpan>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="33%" minHeight="100%" alignItems="center">
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem">층수: {floor}</PostInfoSpan>
                    </PostInfoFlexDiv>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="95%" minHeight="3rem" flexDirections="row">
                    <PostInfoFlexDiv width="33%" minHeight="100%" alignItems="center">
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem">계약형태: {tradeType}</PostInfoSpan>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="33%" minHeight="100%" alignItems="center">
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem">가격: {price}만원</PostInfoSpan>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="33%" minHeight="100%" alignItems="center">
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem">관리비: {maintenance}만원</PostInfoSpan>
                    </PostInfoFlexDiv>
                </PostInfoFlexDiv>
                <PostInfoDiv width="95%" height="5rem" marginTop="1rem" borderBottom="solid 0.1rem #bbbbbb">
                    <PostInfoSpan color="#47a5fd" fontSize="1.2rem">룸메이트 가격: {rent}만원</PostInfoSpan>
                </PostInfoDiv>
                <PostInfoFlexDiv width="95%" minHeight="3rem" marginTop="0.7rem" alignItems="center">
                    <PostInfoSpan color="#bbbbbb" fontSize="1.2rem">이 지역은 하루 배송권이에요.</PostInfoSpan>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="95%" minHeight="10rem" flexDirection="column" borderBottom="solid 0.1rem #bbbbbb">
                    <PostInfoFlexDiv width="100%" minHeight="3rem" flexDirection="row">
                        <PostInfoFlexDiv width="30%" minHeight="3rem" alignItems="center">
                            <GrDeliver size={30}/>
                            <PostInfoSpan fontSize="1.2rem" marginLeft="1rem">쿠팡</PostInfoSpan>
                        </PostInfoFlexDiv>
                        <PostInfoFlexDiv width="70%" minHeight="3rem" alignItems="center">
                            <GiMeal size={30}/>
                            <PostInfoSpan fontSize="1.2rem" marginLeft="1rem">배달의 민족</PostInfoSpan>
                        </PostInfoFlexDiv>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="100%" minHeight="3rem" flexDirection="row">
                        <PostInfoFlexDiv width="30%" minHeight="3rem" alignItems="center">
                            <GrDeliver size={30}/>
                            <PostInfoSpan fontSize="1.2rem" marginLeft="1rem">SSG</PostInfoSpan>
                        </PostInfoFlexDiv>
                        <PostInfoFlexDiv width="70%" minHeight="3rem" alignItems="center">
                            <GiMeal size={30}/>
                            <PostInfoSpan fontSize="1.2rem" marginLeft="1rem">요기요</PostInfoSpan>
                        </PostInfoFlexDiv>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="100%" minHeight="3rem" flexDirection="row"erInfoDiv>
                        <PostInfoFlexDiv width="30%" minHeight="3rem" alignItems="center">
                            <GrDeliver size={30}/>
                            <PostInfoSpan fontSize="1.2rem" marginLeft="1rem">마켓컬리</PostInfoSpan>
                        </PostInfoFlexDiv>
                    </PostInfoFlexDiv>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="95%" minHeight="30rem" marginTop="1rem" justifyContent="center" alignItems="center">
                    <PostInfoDiv width="90%" height="28rem">
                        <InfoPageMapContainer 
                            x={x} 
                            y={y} 
                            address={address}
                        />
                    </PostInfoDiv>
                </PostInfoFlexDiv>
                <PostInfoDiv width="95%" height="15rem" marginTop="1rem">
                    <PostInfoSpan color="black" fontSize="1.2rem" fontWeight="500">
                        {contents}
                    </PostInfoSpan>
                </PostInfoDiv>
                <PostInfoFlexDiv width="95%" minHeight="4rem" alignItems="center" flexDirection="row-reverse" borderBottom="solid 0.1rem #bbbbbb">
                    <MatchingCompleteButton>매칭완료</MatchingCompleteButton>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="95%" minHeight="5rem" marginTop="1rem" flexDirection="column">
                    {commentData.map((data, idx) => (
                        <ReadCommentSection 
                            key={idx} 
                            data={data}
                            makeCommentRequest={makeCommentRequest}
                        />
                    ))}
                    <WriteComment 
                        makeCommentRequest={makeCommentRequest}
                        boardId={boardId}
                    />
                </PostInfoFlexDiv>
            </PostInfoPageSection>
        </PostInfoPageContainer>
    );
}

export default PostInfoPage;