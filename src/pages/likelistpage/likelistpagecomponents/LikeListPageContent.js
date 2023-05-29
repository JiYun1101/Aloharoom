import React from "react";
import LikeListPageArea from "./LikeListPageArea";
import styled from "styled-components";

const LikeListPageContentDiv = styled.div`
    max-width: 50vw;
    min-height: 45vh;
`;

const LikeListPageContent = ({myInfoPage, likedListPage, chattingPage}) => {
    return (
        <LikeListPageContentDiv>
            <LikeListPageArea/>
        </LikeListPageContentDiv>
    );
}

export default LikeListPageContent;