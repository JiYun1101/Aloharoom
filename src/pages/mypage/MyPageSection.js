import React, { useState } from "react";
import styled from "styled-components";

import ChattingListPage from "./ChattingListPage";
import LikedListPage from "./LikedListPage";
import MyInfoPage from "./MyInfoPage";

const MyPageContainer = styled.div`
    width: 100%;  
    //text-align: center;
`;

const MyPageBox = styled.div`
    position: relative;
    /* 기준이 되는 조상 페이지 */
    margin-top: 5rem;
    /* 위 간격 */
    max-width: 500px;
    /* 좌우 간격 */
    min-height: 600px;
    max-height: 600px;
    /* min/max-height = 크기고정 */

    left: 50%;
    transform: translate(-50%, 0);
    /* 중앙고정 */

    background-color: #ffffff;
    border: 2px solid;
    border-radius: 1.8rem;
    border-color: #85afe1;
    /* 페이지 디자인 */
    display: flex;
    flex-direction: column;
`;

const MyPageNavDiv = styled.div`
    max-width: 500px;
    min-height: 70px;
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-style: none none solid none;
    border-color: #BBBBBB;
    border-width: 0.05rem;
`;

//내 정보, 좋아요 목록, 채팅목록이 들어갈 div 태그
const MyPageContentDiv = styled.div`
    max-width: 500px;
    min-height: 525px;
`;

const MyPageNav = styled.div`
    &:hover {
        text-decoration: underline;
        text-decoration-color: #47A5FD;
        text-decoration-thickness: 0.15rem;
        text-underline-offset: 0.6rem;
    }
`;

const MyPageSection = () => {
    const [myInfoPage, setMyInfoPage] = useState(true);
    const [likedListPage, setLikedListPage] = useState(false);
    const [chattingPage, setChattingPage] = useState(false);

    //내 정보 클릭
    const myInfoClick = () => {
        setMyInfoPage(true);
        setLikedListPage(false);
        setChattingPage(false);
    }

    //좋아요 목록 클릭
    const likedListClick = () => {
        setMyInfoPage(false);
        setLikedListPage(true);
        setChattingPage(false);
    }

    //채팅 목록 클릭
    const chattingClick = () => {
        setMyInfoPage(false);
        setLikedListPage(false);
        setChattingPage(true);
    }

    return (
        <MyPageContainer>
            <MyPageBox>
                <MyPageNavDiv>
                    <MyPageNav onClick={() => {myInfoClick()}}>내 정보</MyPageNav>
                    <MyPageNav onClick={() => {likedListClick()}}>좋아요 목록</MyPageNav>
                    <MyPageNav onClick={() => {chattingClick()}}>채팅</MyPageNav>
                </MyPageNavDiv>
                <MyPageContentDiv>
                    {myInfoPage ? <MyInfoPage/> : <></>}
                    {likedListPage ? <LikedListPage/> : <></>}
                    {chattingPage ? <ChattingListPage/> : <></>}
                </MyPageContentDiv>
            </MyPageBox>
        </MyPageContainer>
    );
}

export default MyPageSection;