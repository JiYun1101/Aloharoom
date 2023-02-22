import React from "react";
import styled from "styled-components";

const PostMapBox = styled.div`
    position: relative;
    width: 100%;
    height: 50rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-color: black;
    border-style: solid;
`;

const SearchHashTagBox = styled.div`
    position: absolute;
    top: 0.1rem;
    width: 100%;
    height: 20%;
    border-color: green;
    border-style: solid;
`;


const PostMapSection = () => {
    return (
        <PostMapBox>            
            <SearchHashTagBox>
                
            </SearchHashTagBox>
        </PostMapBox>
    );
}

export default PostMapSection;