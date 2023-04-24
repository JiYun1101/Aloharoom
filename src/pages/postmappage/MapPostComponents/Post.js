import React, { useState } from "react";
import styled from "styled-components";
import CardPosts from "./CardPosts";
import PostNavs from "./PostNavComponents/PostNavs";

const PostContainer = styled.div`
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Post = ({cardPostData}) => {
    const [roommatePosts, setRoomMatePosts] = useState(true);
    const [sharehousePosts, setShareHousePosts] = useState(false);

    const roommatePostsClick = () => {
        setRoomMatePosts(true);
        setShareHousePosts(false);
    }

    const sharehousePostsClick = () => {
        setRoomMatePosts(false);
        setShareHousePosts(true);
    }

    return (
        <PostContainer>
            <PostNavs 
                roommatePostsClick={roommatePostsClick} 
                sharehousePostsClick={sharehousePostsClick}
            />
            <CardPosts 
                roommatePosts={roommatePosts} 
                sharehousePosts={sharehousePosts}
                cardPostData={cardPostData}
            />
        </PostContainer>
    );
}

export default Post;