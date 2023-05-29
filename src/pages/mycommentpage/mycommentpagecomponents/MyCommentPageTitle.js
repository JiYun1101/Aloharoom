import React from "react";
import styled from "styled-components";

const MyCommentTitleContainer = styled.div`
    max-width: 40vw;
    min-height: 8vh;
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
    font-weight: 600;
    cursor: pointer;
    border-bottom: ${props => (props.underline ? 'solid #47a5fd 0.2rem' : 'none')};
    &:hover {
        border-bottom: solid #47a5fd 0.2rem;
    }
`;

const MyCommentPageTitle = ({
    roomClick,
    communityClick,
    roomClicked,
    communityClicked
}) => {
    return (
    <MyCommentTitleContainer>
        <MyCommentTitleNav
            underline={roomClick}
            onClick={roomClicked}
        >
            방 댓글
        </MyCommentTitleNav>
        <MyCommentTitleNav
            underline={communityClick}
            onClick={communityClicked}
        >
            커뮤니티 댓글
        </MyCommentTitleNav>
    </MyCommentTitleContainer>
    );
}

export default MyCommentPageTitle;