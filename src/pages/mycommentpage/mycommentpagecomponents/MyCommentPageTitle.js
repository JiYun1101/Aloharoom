import React from "react";
import styled from "styled-components";

const MyCommentTitleContainer = styled.div`
    max-width: 38rem;
    min-height: 70px;
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 1.2rem;
    border-style: none none solid none;
    border-color: #BBBBBB;
    border-width: 0.05rem;
`;

const MyCommentTitleNav = styled.div`
    &:hover {
        text-decoration: underline;
        text-decoration-color: #47a5fd;
        text-decoration-thickness: 0.15rem;
        text-underline-offset: 0.4rem;
    }
`;

const MyCommentPageTitle = ({roomClicked, communityClicked}) => {
    return (
    <MyCommentTitleContainer>
        <MyCommentTitleNav
            onClick={roomClicked}
        >
            방 댓글
        </MyCommentTitleNav>
        <MyCommentTitleNav
            onClick={communityClicked}
        >
            커뮤니티 댓글
        </MyCommentTitleNav>
    </MyCommentTitleContainer>
    );
}

export default MyCommentPageTitle;