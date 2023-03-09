import React from "react";
import styled from "styled-components";

const TitleSection = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`;

const TitleSpan = styled.span`
    margin-left: 1rem;
    font-weight: 700;
    font-size: 1.7rem;
`;

const Title = () => {
    return (
        <TitleSection>
            <TitleSpan>지도에서 위치 찾기</TitleSpan>
        </TitleSection>
    );
}

export default Title;