import React from "react";
import styled from "styled-components";

const BannerBox = styled.section`  
    position: relative;
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BannerImageBox = styled.div`
    position: absolute;
    top: 4rem;
`;

const BannerImage = styled.img`
    width: 60rem;
    height: 30rem;
    border-radius: 0.5rem;
`;

const CardBox = styled.div`
    position: absolute;
    top: 50rem;
`;

const CardArea = styled.div`
    width: 60rem;
    height: 30rem;
    border-color: blue;
    border-style: solid;
`



const Banner = () => {
    return (
        <BannerBox>
            <BannerImageBox>
                <BannerImage src="blue.png"/>
            </BannerImageBox>
            <CardBox>
                <CardArea/>
            </CardBox>
        </BannerBox>
    );
}

export default Banner;