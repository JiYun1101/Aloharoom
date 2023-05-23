import React from "react";
import styled from "styled-components";
import MyCommentPageBox from "./MyCommentPageBox";

const MyCommentPageContainer = styled.div`
    width: 100%;  
`;

const MyCommentPageSection = () => {
    return (
        <MyCommentPageContainer>
            <MyCommentPageBox/>
        </MyCommentPageContainer>
    );
}

export default MyCommentPageSection;