import React from "react";
import styled from "styled-components";

const BannerImageBox = styled.div`
    position: absolute;
    top: 4rem;
`;

const BannerImage = styled.img`
    width: 60rem;
    height: 30rem;
    border-radius: 0.5rem;
`;

const BannerSection = () => {
    return (
        <BannerImageBox>
            <BannerImage src="blue.png"/>
        </BannerImageBox>
    );
}

export default BannerSection;