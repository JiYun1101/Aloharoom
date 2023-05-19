import React from "react";
import MyInfoPageArea from "./MyInfoPageArea";

import styled from "styled-components";

//내 정보, 좋아요 목록, 채팅목록이 들어갈 div 태그
const MyPageContentDiv = styled.div`
    max-width: 50vw;
    min-height: 45vh;
`;

const MyPageContent = ({myInfoPage, likedListPage, chattingPage}) => {
    return (
        <MyPageContentDiv>
            <MyInfoPageArea/>
        </MyPageContentDiv>
    );
}

export default MyPageContent;