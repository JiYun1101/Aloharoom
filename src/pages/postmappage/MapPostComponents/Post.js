import React, { useState } from "react";
import styled from "styled-components";
import CardPosts from "./CardPosts";
import PostNavs from "./PostNavs";

const PostContainer = styled.div`
    border-width: 0.1rem;
    border-style: solid;
    border-color: #47A5FD;
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PostNavDiv = styled.div`
    border-bottom: solid 0.1rem #47A5FD;
    width: 100%;
    height: 10%;
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const PostNav = styled.div`
    color: #47A5FD;
    &:hover {
        text-decoration: underline;
        text-decoration-color: #47A5FD;
        text-decoration-thickness: 0.13rem;
        text-underline-offset: 0.5rem;
    }
`;

const Post = () => {
    const [roommatePosts, setRoomMatePosts] = useState(true);
    const [sharehousePosts, setShareHousePosts] = useState(false);

    return (
        <PostContainer>
            <PostNavs/>
            <CardPosts/>
        </PostContainer>
    );
}

export default Post;