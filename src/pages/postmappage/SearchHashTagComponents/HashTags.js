import React, { useEffect } from "react";
import styled from "styled-components";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";

const HashSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
`;

const HashTagSwiperDiv = styled.div`
  margin-top: 1.5rem;
  margin-right: 1rem;
  fontweight: 800;
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
    width: "46vw"
}

const HashTags = () => {
  async function fetchMyHashTag() {
    await axios
    .get("http://localhost:8080/api/myPage/1/home")
      .then((response) => {
        console.log("fetchMyHashTag => response.data : ", response.data);
      })
      .catch((error) => {
        console.log("axios error");
      });
  }

  useEffect(() => {
    fetchMyHashTag();
  }, []);

  return (
    <HashSection>
      <HashTagSwiperDiv>
        <Swiper
          style={SwiperStyle}
          // install Swiper modules
          modules={[Navigation, Scrollbar, Pagination, A11y]}
          spaceBetween={1}
          slidesPerView={5}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <HashTagButton>#주차가능</HashTagButton>
          </SwiperSlide>
          <SwiperSlide>
            <HashTagButton>#주차가능</HashTagButton>
          </SwiperSlide>
          <SwiperSlide>
            <HashTagButton>#주차가능</HashTagButton>
          </SwiperSlide>
          <SwiperSlide>
            <HashTagButton>#주차가능</HashTagButton>
          </SwiperSlide>
          <SwiperSlide>
            <HashTagButton>#주차가능</HashTagButton>
          </SwiperSlide>
          <SwiperSlide>
            <HashTagButton>#주차가능</HashTagButton>
          </SwiperSlide>
        </Swiper>
      </HashTagSwiperDiv>
    </HashSection>
  );
};

export default HashTags;
