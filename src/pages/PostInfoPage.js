import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper/core';
import { useNavigate } from 'react-router-dom';
//import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart, AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import { GrDeliver } from "react-icons/gr";
import { GiMeal } from "react-icons/gi";
import { Map } from 'react-kakao-maps-sdk';

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

const PostInfoPageSection  = styled.div`
    width: 50rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostInfoDiv = styled.div`
    width: ${ props => props.width || "0%"};
    height: ${ props => props.height || "0rem"};
    margin-top: ${ props => props.marginTop || "0rem"};
    border-bottom: ${ props => props.borderBottom || "none"};
`;

const PostInfoFlexDiv = styled.div`
    width: ${ props => props.width || "0%"};
    min-height: ${ props => props.minHeight || "0rem"};

    display: flex;
    align-items: ${ props => props.alignItems || "stretch"};
    flex-direction: ${ props => props.flexDirection || "row"};
    flex-wrap: ${ props => props.flexWrap || "nowrap"};
    justify-content: ${ props => props.justifyContent || "flex-start" };
    gap: ${ props => props.gap || "0rem"};

    border-style: ${ props => props.borderStyle || "none"};
    border-radius: ${ props => props.borderRadius || "0rem"};
    border-color: ${ props => props.borderColor || "black"};

    border-bottom: ${ props => props.borderBottom || "none"};

    margin-top: ${ props => props.marginTop || "0rem"};
    margin-left: ${ props => props.marginLeft || "0rem"};
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

const PostInfoSpan = styled.span`
    color: ${ props => props.color || "black"};
    font-size: ${ props => props.fontSize || "1rem"};
    font-weight: ${ props => props.fontWeight || "normal"};
    margin-left: ${ props => props.marginLeft || "0rem"};
    margin-top: ${ props => props.marginTop || "0rem"};
`;

const UserProfileImg = styled.img`
    margin-left: ${ props => props.marginLeft || "0rem"};
    width: ${ props => props.width || "0rem"};
    height: ${ props => props.height || "0rem"};
    border-radius: ${ props => props.borderRadius || "0rem"};
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
const CommentProfileImg = styled.img`
    margin-left: 0.7rem;
    border-radius: 10rem;
    width: 2.5rem;
    height: 2.5rem;
`;


const CommentInput = styled.input`
    margin-left: 0.5rem;
    border-color: #47A5FD;
    border-radius: 0.5rem;
    width: 80%;
    height: 2rem;
`

const CommentWriteButton = styled.button`
    margin-left: 3%;
    width: 10%;
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
    const [imgUrls, setImgUrls] = useState([]);
    const [maintenance, setMaintenance] = useState(null);
    const [nickname, setNickName] = useState(null);
    const [contents, setContents] = useState('');
    const [flat, setFlat] = useState(null);
    const [rent, setRent] = useState(null);
    const [title, setTitle] = useState('');
    const [tradeType, setTradeType] = useState('');
    const [hashtag, setHashTag] = useState([]);
    async function FetchPostInfoData() {
        await axios.get(`http://localhost:8080/api/board/${boardId}`)
            .then((response) => {
                console.log(response.data);
                setTitle(response.data.title);
                setNickName(response.data.nickname);
                setImgUrls(response.data.imgUrls);
                setMaintenance(response.data.maintenance);
                setRent(response.data.rent);
                setTradeType(response.data.tradeType);
                setFlat(response.data.flat);
                setHashTag(response.data.hashtag);
                setContents(response.data.contents);
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

    //한번 렌더링 될때 데이터를 받아온다.
    useEffect(() => {
        FetchPostInfoData();
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
                    <PostInfoSpan color="black" fontSize="1.2rem" fontWeight="700">{title}</PostInfoSpan>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="95%" minHeight="4.5rem" flexDirections="row" borderBottom="solid 0.1rem #bbbbbb">
                    <PostInfoFlexDiv width="50%" minHeight="100%" alignItems="center">
                        <UserProfileImg width="2rem" height="2rem" borderRadius="50rem" src="blue.png"/>
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="1rem">{nickname}</PostInfoSpan>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="50%" minHeight="100%" flexDirection="row-reverse" alignItems="center">
                        <AiOutlineHeart size={40} />
                        <AiOutlineEdit size={40}/>
                        <AiOutlineDelete 
                            onClick={() => {
                                DeletePostInfoData();
                            }}
                            size={40}
                        />                        
                    </PostInfoFlexDiv>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="95%" minHeight="3rem" flexDirections="row">
                    <PostInfoFlexDiv width="25%" height="3rem" alignItems="center">
                        <PostInfoSpan color="#47a5fd" fontSize="1.2rem" fontWeight="600">{maintenance}/{rent}</PostInfoSpan>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="75%" height="3rem" alignItems="center">
                        <PostInfoSpan color="#bbbbbb" fontSize="1.2rem" fontWeight="600">({tradeType}, 투룸, {flat}평)</PostInfoSpan>
                    </PostInfoFlexDiv>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="95%" minHeight="6rem" flexDirections="row" flexWrap="wrap" gap="0.2rem" borderBottom="solid 0.1rem #bbbbbb">
                    { hashtag && hashtag.map((data, idx) => <HashTagButton key={idx}>{data}</HashTagButton>)}
                </PostInfoFlexDiv>
                <PostInfoDiv width="95%" height="15rem" marginTop="1rem" borderBottom="solid 0.1rem #bbbbbb">
                    <PostInfoSpan color="black" fontSize="1.2rem" fontWeight="500">
                        {contents}
                    </PostInfoSpan>
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
                        <Map 
                            center={{ lat: 37.56682420267543, lng: 126.978652258823 }}   // 지도의 중심 좌표
                            level={2}                                   // 지도 확대 레벨
                            style= {{
                                width: "100%",
                                height: "100%"
                            }}
                        />
                    </PostInfoDiv>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="95%" minHeight="4rem" alignItems="center" flexDirection="row-reverse" borderBottom="solid 0.1rem #bbbbbb">
                    <MatchingCompleteButton>매칭완료</MatchingCompleteButton>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="95%" minHeight="5rem" marginTop="1rem" flexDirection="column">
                    <PostInfoFlexDiv width="100%" minHeight="6rem" flexDirection="column" borderStyle="solid" borderRadius="0.5rem" borderColor="#47a5fd">
                        <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center">
                            <CommentProfileImg src = "blue.png"/>
                            <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="0.5rem">wkdgns1979</PostInfoSpan>
                        </PostInfoFlexDiv>
                        <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center"> 
                            <PostInfoSpan color="black" marginLeft="4rem" fontSize="1.2rem">안녕하세요!</PostInfoSpan>
                            <PostInfoSpan color="#47a5fd" marginLeft="1rem" marginTop="0.5rem" fontSize="0.8rem">답글 쓰기</PostInfoSpan>
                        </PostInfoFlexDiv>
                    </PostInfoFlexDiv>
                    <PostInfoFlexDiv width="85%" minHeight="6rem" flexDirection="column" marginTop="0.5rem" marginLeft="15%" borderStyle="solid" borderRadius="0.5rem" borderColor="#47a5fd">
                        <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center">
                            <UserProfileImg marginLeft="0.7rem" borderRadius="10rem" width="2.5rem" height="2.5rem" src = "blue.png"/>
                            <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="0.5rem">wkdgns1979</PostInfoSpan>
                        </PostInfoFlexDiv>
                        <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center">
                            <CommentInput type="text"/>
                            <CommentWriteButton>쓰기</CommentWriteButton>
                        </PostInfoFlexDiv>
                    </PostInfoFlexDiv>
                </PostInfoFlexDiv>
            </PostInfoPageSection>
        </PostInfoPageContainer>
    );
}

export default PostInfoPage;