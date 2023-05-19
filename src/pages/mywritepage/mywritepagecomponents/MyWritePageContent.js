import React from "react";
import styled from "styled-components";
import MyWriteCommunityPageArea from "./MyWriteCommunityPageArea";
import MyWriteRoomPageArea from "./MyWriteRoomPageArea";

const MyPageContentDiv = styled.div`
    width: 35vw;
    height: 57vh;
`;

const MyWritePageContent = ({roomClick, communityClick}) => {
    return (
        <MyPageContentDiv>
            {roomClick ? <MyWriteRoomPageArea/>:<></>}
            {communityClick ? <MyWriteCommunityPageArea/>:<></>}
        </MyPageContentDiv>
    );
}

export default MyWritePageContent;