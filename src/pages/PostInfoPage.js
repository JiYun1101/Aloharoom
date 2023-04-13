import React from "react";
import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper/core';
//import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Pagination]);

const PostInfoPageContainer = styled.div`
    height: 80rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostInfoPageBox = styled.div`
    border-style: solid;
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

const PostInfoPage = () => {
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
                            <SwiperSlide>
                                <PostInfoImage src="blue.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PostInfoImage src="blue.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PostInfoImage src="blue.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PostInfoImage src="blue.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PostInfoImage src="blue.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PostInfoImage src="blue.png" />    
                            </SwiperSlide>
                        </Swiper>
                    </Container>
                </PostInfoImageBox>
                <TitleDiv>
                    <TitleSpan>서울특별시 성북구 삼선동 역 앞 오피스텔</TitleSpan>
                </TitleDiv>
                <ProfileHeartDiv>
                    <ProfileDiv>
                        <ProfileImg src="blue.png"/>
                        <ProfileName>hwldus</ProfileName>
                    </ProfileDiv>
                    <HeartDiv>
                        <AiOutlineHeart size={40} />
                    </HeartDiv>
                </ProfileHeartDiv>
                <PriceTypeFlatDiv>
                    <MaintenancePriceDiv>
                        <MaintenancePriceSpan>300/25</MaintenancePriceSpan>
                    </MaintenancePriceDiv>
                    <TypeFlatDiv>
                        <TypeFlatDivSpan>(투룸, 17평)</TypeFlatDivSpan>
                    </TypeFlatDiv>
                </PriceTypeFlatDiv>
            </PostInfoPageBox>
        </PostInfoPageContainer>
    );
}

export default PostInfoPage;