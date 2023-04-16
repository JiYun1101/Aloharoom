import React from 'react'
import styled from 'styled-components'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Pagination]);

const ImageSwiperDiv = styled.div`
    width: 90%;
    height: 9rem;
`;

const SwiperContainer = styled.div`
    margin-top: 0.5rem;
    .swiper-slide {
        margin-right: 1px; /* SwiperSlide 간격 조정 */
    }
`;

const UploadImg = styled.img`
    width: 12rem;
    height: 8rem;
`;

const ImageSwiperSection = ({previewImages}) => {
  return (
    <ImageSwiperDiv>
        <SwiperContainer>
            <Swiper
            // install Swiper modules
            modules={[Navigation, Scrollbar, Pagination, A11y]}
            spaceBetween={1}
            slidesPerView={3}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            > 
                { previewImages.map((previewImage, idx) => (
                <SwiperSlide>
                    <UploadImg key={idx} src={previewImage}/>
                </SwiperSlide>
                ))}                                            
            </Swiper>
        </SwiperContainer>
    </ImageSwiperDiv>
  );
}

export default ImageSwiperSection