import React from "react";
import styled from "styled-components";
import MyPageNav from "./MyPageNav";

const MyPageNavsContainer = styled.div`
    max-width: 38rem;
    min-height: 70px;
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-style: none none solid none;
    border-color: #BBBBBB;
    border-width: 0.05rem;
`;

const MyPageNavs = ({myInfoClick = f => f, likedListClick = f => f, chattingClick = f => f}) => {
    return (
        <MyPageNavsContainer>
            <MyPageNav clickFunc={myInfoClick}  value={`내 정보`}/>
            <MyPageNav clickFunc={likedListClick} value={`좋아요 목록`}/>
            <MyPageNav clickFunc={chattingClick} value={`채팅`}/>
        </MyPageNavsContainer>
    );
}

export default MyPageNavs;