import React from "react";
import MyInfoPageArea from "./MyInfoPageArea";

import styled from "styled-components";

//내 정보, 좋아요 목록, 채팅목록이 들어갈 div 태그
const MyPageContentDiv = styled.div`
    max-width: 50vw;
    min-height: 45vh;
`;

const MyPageContent = ({
    responseData,
    myHashtags,
    myHomeHashtags,
    likeHashtags,
    likeHomeHashtags,
    fetchMyInfoData
}) => {
    return (
        <MyPageContentDiv>
            <MyInfoPageArea
                responseData={responseData}
                myHashtags={myHashtags}
                myHomeHashtags={myHomeHashtags}
                likeHashtags={likeHashtags}
                likeHomeHashtags={likeHomeHashtags}
                fetchMyInfoData={fetchMyInfoData}
            />
        </MyPageContentDiv>
    );
}

export default MyPageContent;