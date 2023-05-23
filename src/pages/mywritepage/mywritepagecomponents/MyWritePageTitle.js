import React from "react";
import styled from "styled-components";

const MyWriteTitleContainer = styled.div`
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

const MyWriteTitleNav = styled.div`
    &:hover {
        text-decoration: underline;
        text-decoration-color: #47a5fd;
        text-decoration-thickness: 0.15rem;
        text-underline-offset: 0.4rem;
    }
`;


const MyWritePageTitle = ({roomClicked, communityClicked}) => {
    return (
    <MyWriteTitleContainer>
        <MyWriteTitleNav
            onClick={roomClicked}
        >
            방 작성
        </MyWriteTitleNav>
        <MyWriteTitleNav
            onClick={communityClicked}
        >
            커뮤니티 작성
        </MyWriteTitleNav>
    </MyWriteTitleContainer>
    );
}

export default MyWritePageTitle;