import React from "react";
import styled from "styled-components";
import LikeListPageBox from "./LikeListPageBox";

const LikeListPageContainer = styled.div`
    width: 100%;  
`;

const LikeListPageSection = () => {
    return (
        <LikeListPageContainer>
            <LikeListPageBox/>
        </LikeListPageContainer>
    );
}

export default LikeListPageSection;