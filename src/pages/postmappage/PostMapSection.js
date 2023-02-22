import React from "react";
import styled from "styled-components";

const PostMapBox = styled.div`
    position: relative;
    width: 100%;
    height: 50rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const SearchHashTagBox = styled.div`
    position: absolute;
    top: 0.1rem;
    width: 99.5%;
    height: 20%;
    border-color: green;
    border-style: solid;
`;

const MapPostBox = styled.div`
    position: absolute;
    top: 10.1rem;
    width: 99.5%;
    height: 80%;
    border-color: blue;
    border-style: solid;
`

const PostMapSection = () => {
    return (
        <PostMapBox>            
            <SearchHashTagBox/>
            <MapPostBox/>
        </PostMapBox>
    );
}

export default PostMapSection;