import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper/core';
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

const PriceTypeFlatDiv = styled.div`
    width: 95%;
    height: 3rem;    
    display: flex;
    flex-direction: row;
`;

const MaintenancePriceDiv = styled.div`
    width: 25%;
    height: 3rem;    
    display: flex;
    align-items: center;
`;

const MaintenancePriceSpan = styled.span`
    color: #47a5fd;
    font-size: 1.2rem;
    font-weight: 600;
`;

const TypeFlatDiv = styled.div`
    width: 75%;
    height: 3rem;    
    display: flex;
    align-items: center;
`;

const TypeFlatDivSpan = styled.span`
    color: #bbbbbb;
    font-size: 1.2rem;
    font-weight: 600;
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
    border-color: #47A5FD;
    color: #47A5FD;
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

const DeliverTitleDiv = styled.div`
    margin-top: 0.7rem;
    width: 95%;
    height: 3rem;  
    display: flex;
    align-items: center;
`;

const DeliverTitleSpan = styled.span`
    font-size: 1.2rem;
    color: #bbbbbb;
`;

const DeliverDiv = styled.div`
    width: 95%;
    height: 10rem;  
    display: flex;
    flex-direction: column;
    border-bottom: solid 0.1rem #bbbbbb;
`;

const DeliverInfoDiv = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
`;

const DeliverFirstBox = styled.div`
    width: 30%;
    height: 3rem;
    display: flex;
    align-items: center;
`;

const DeliverSecondBox = styled.div`
    width: 70%;
    height: 3rem;
    display: flex;
    align-items: center;
`;

const DeliverInfoSpan = styled.span`
    margin-left: 1rem;
    font-size: 1.2rem;
`;

const MapFacilityDiv = styled.div`
    margin-top: 1rem;
    width: 95%;
    height: 30rem;  
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MapFacilitySection = styled.div`
    width: 90%;
    height: 28rem;
`;

const MatchingCompleteDiv = styled.div`
    width: 95%;
    height: 4rem;  
    border-bottom: solid 0.1rem #bbbbbb;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
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
    border-color: #47A5FD;
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
`;

const SubCommentBox = styled.div`
    border-style: solid;
    border-radius: 0.5rem;
    border-color: #47A5FD;
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
    color: #47A5FD;
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
    color: #47A5FD;
    font-size: 0.8rem;
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

const PostInfoPage = () => {
    const boardId = useParams().id;
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
                console.log('axios error');
            })
    }
    //한번 렌더링 될때 데이터를 받아온다.
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
                            {imgUrls.map((data, index) => 
                                <SwiperSlide key={index}>
                                    <PostInfoImage src={data} key={index}/>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </Container>
                </PostInfoImageBox>
                <TitleDiv>
                    <TitleSpan>{title}</TitleSpan>
                </TitleDiv>
                <ProfileHeartDiv>
                    <ProfileDiv>
                        <ProfileImg src="blue.png"/>
                        <ProfileName>{nickname}</ProfileName>
                    </ProfileDiv>
                    <HeartDiv>
                        <AiOutlineHeart size={40} />
                        <AiOutlineEdit size={40}/>
                        <AiOutlineDelete size={40}/>
                    </HeartDiv>
                </ProfileHeartDiv>
                <PriceTypeFlatDiv>
                    <MaintenancePriceDiv>
                        <MaintenancePriceSpan>{maintenance}/{rent}</MaintenancePriceSpan>
                    </MaintenancePriceDiv>
                    <TypeFlatDiv>
                        <TypeFlatDivSpan>({tradeType}, 투룸, {flat}평)</TypeFlatDivSpan>
                    </TypeFlatDiv>
                </PriceTypeFlatDiv>
                <PostHashTagDiv>
                    { hashtag && hashtag.map((data, idx) => <HashTagButton key={idx}>{data}</HashTagButton>)}
                </PostHashTagDiv>
                <PostContentDiv>
                    <PostContentSpan>
                        {contents}
                    </PostContentSpan>
                </PostContentDiv>
                <DeliverTitleDiv>
                    <DeliverTitleSpan>이 지역은 하루 배송권이에요.</DeliverTitleSpan>
                </DeliverTitleDiv>
                <DeliverDiv>
                    <DeliverInfoDiv>
                        <DeliverFirstBox>
                            <GrDeliver size={30}/>
                            <DeliverInfoSpan>쿠팡</DeliverInfoSpan>
                        </DeliverFirstBox>
                        <DeliverSecondBox>
                            <GiMeal size={30}/>
                            <DeliverInfoSpan>배달의 민족</DeliverInfoSpan>
                        </DeliverSecondBox>
                    </DeliverInfoDiv>
                    <DeliverInfoDiv>
                        <DeliverFirstBox>
                            <GrDeliver size={30}/>
                            <DeliverInfoSpan>SSG</DeliverInfoSpan>
                        </DeliverFirstBox>
                        <DeliverSecondBox>
                            <GiMeal size={30}/>
                            <DeliverInfoSpan>요기요</DeliverInfoSpan>
                        </DeliverSecondBox>
                    </DeliverInfoDiv>
                    <DeliverInfoDiv>
                        <DeliverFirstBox>
                            <GrDeliver size={30}/>
                            <DeliverInfoSpan>마켓컬리</DeliverInfoSpan>
                        </DeliverFirstBox>
                    </DeliverInfoDiv>
                </DeliverDiv>
                <MapFacilityDiv>
                    <MapFacilitySection>
                        <Map 
                            center={{ lat: 37.56682420267543, lng: 126.978652258823 }}   // 지도의 중심 좌표
                            level={2}                                   // 지도 확대 레벨
                            style= {{
                                width: "100%",
                                height: "100%"
                            }}
                        />
                    </MapFacilitySection>
                </MapFacilityDiv>
                <MatchingCompleteDiv>
                    <MatchingCompleteButton>매칭완료</MatchingCompleteButton>
                </MatchingCompleteDiv>
                <CommentSection>
                    <CommentBox>
                        <CommentProfileDiv>
                            <CommentProfileImg src = "blue.png"/>
                            <CommentProfileSpan>wkdgns1979</CommentProfileSpan>
                        </CommentProfileDiv>
                        <CommentInputDiv>
                            <CommentSpan>안녕하세요!</CommentSpan>
                            <AddCommentSpan>답글 쓰기</AddCommentSpan>
                        </CommentInputDiv>
                    </CommentBox>
                    <SubCommentBox>
                        <CommentProfileDiv>
                            <CommentProfileImg src = "blue.png"/>
                            <CommentProfileSpan>wkdgns1979</CommentProfileSpan>
                        </CommentProfileDiv>
                        <CommentInputDiv>
                            <CommentInput type="text"/>
                            <CommentWriteButton>쓰기</CommentWriteButton>
                        </CommentInputDiv>
                    </SubCommentBox>
                </CommentSection>
            </PostInfoPageBox>
        </PostInfoPageContainer>
    );
}

export default PostInfoPage;