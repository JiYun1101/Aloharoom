import React, {useState} from "react";
import styled from "styled-components";

import ChattingListPage from "../ChattingListPage";
import LikedListPage from "../LikedListPage";
import MyInfoPage from "../MyInfoPage";
import MyPageContent from "./MyPageContent";
import MyPageNavs from "./MyPageNavs";

const MyPageBoxContainer = styled.div`
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

//내 정보, 좋아요 목록, 채팅목록이 들어갈 div 태그
const MyPageContentDiv = styled.div`
    max-width: 500px;
    min-height: 525px;
`;

const MyPageBox = () => {
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
        <MyPageBoxContainer>
            <MyPageNavs myInfoClick={myInfoClick} likedListClick={likedListClick} chattingClick={chattingClick}/>
            <MyPageContent myInfoPage={myInfoPage} likedListPage={likedListPage} chattingPage={chattingPage}/>
        </MyPageBoxContainer>
    );
}

export default MyPageBox;