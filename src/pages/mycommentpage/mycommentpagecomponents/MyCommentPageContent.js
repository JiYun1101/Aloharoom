import React from "react";
import styled from "styled-components";
import MyCommentPageCommunityArea from "./MyCommentPageCommunityArea";
import MyCommentPageRoomArea from "./MyCommentPageRoomArea";

const MyCommentContentDiv = styled.div`
    width: 35vw;
    height: 57vh;
`;

const MyCommentPageContent = ({roomClick, communityClick}) => {
    return (
        <MyCommentContentDiv>
            {roomClick ? <MyCommentPageRoomArea/> : <></>}
            {communityClick ? <MyCommentPageCommunityArea/>: <></>}
        </MyCommentContentDiv>
    );
}

export default MyCommentPageContent;