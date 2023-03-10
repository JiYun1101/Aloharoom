import React from "react";
import styled from "styled-components";
import CardPosts from "./CardPosts";

const PostContainer = styled.div`
    border-width: 0.1rem;
    border-style: solid;
    border-color: #47A5FD;
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Post = () => {
    return (
        <PostContainer>
            <CardPosts/>
        </PostContainer>
    );
}

export default Post;