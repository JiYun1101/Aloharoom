import React from "react";
import LikeListPageArea from "./LikeListPageArea";
import styled from "styled-components";

const LikeListPageContentDiv = styled.div`
    max-width: 500px;
    min-height: 525px;
`;

const LikeListPageContent = ({myInfoPage, likedListPage, chattingPage}) => {
    return (
        <LikeListPageContentDiv>
            <LikeListPageArea/>
        </LikeListPageContentDiv>
    );
}

export default LikeListPageContent;