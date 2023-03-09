import React from "react";
import SearchHashTag from "./SearchHashTag";

import styled from "styled-components";
import MapPost from "./MapPost";

const PostMapContentContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const PostMapContent = () => {
    return (
        <PostMapContentContainer>            
            <SearchHashTag/>
            <MapPost/>
        </PostMapContentContainer>
    );
}

export default PostMapContent;