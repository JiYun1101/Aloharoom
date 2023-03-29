import React from "react";
import styled from "styled-components";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const HashSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row-reverse;
    align-content: center;
`;

const HashTagSwiperDiv = styled.div`
    margin-top: 1.5rem;
    margin-right : 2rem;
    fontWeight: 800;
`;

const HashTagButton = styled.button`
    background-color: white;
    width: 7.5rem;
    height: 2rem;
    border: 2px solid #bbbbbb;
    border-radius: 1rem;
    color: #bbbbbb;
    font-weight: 500;
    font-size: 1.2rem;
`;

const SwiperStyle = {
    width: "45rem"
}

const SwiperElementStyle = {
    gap: "0.1rem"
}

const HashTags = () => {
    return (
        <HashSection>
            <HashTagSwiperDiv>
                <Swiper
                    style={SwiperStyle}
                    // install Swiper modules
                    modules={[Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    //슬라이드가 이동되었을때
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide
                        style={SwiperElementStyle}>
                        <HashTagButton>#주차가능</HashTagButton>
                    </SwiperSlide>
                    <SwiperSlide
                        style={SwiperElementStyle}>
                        <HashTagButton>#주차가능</HashTagButton>
                    </SwiperSlide>
                    <SwiperSlide
                        style={SwiperElementStyle}>
                        <HashTagButton>#주차가능</HashTagButton>
                    </SwiperSlide>
                    <SwiperSlide
                        style={SwiperElementStyle}>
                        <HashTagButton>#주차가능</HashTagButton>
                    </SwiperSlide>
                </Swiper>
            </HashTagSwiperDiv>
        </HashSection>
    );
}


export default HashTags;