import React from "react";
import styled from "styled-components";
import BannerSection from "./BannerSection";
import CardPostSection from "./CardPostSection";

const MainBox = styled.section`  
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MainSection = () => {
    return (
    <MainBox>
        <BannerSection/>
        <CardPostSection/>
    </MainBox>
    );
}

export default MainSection;