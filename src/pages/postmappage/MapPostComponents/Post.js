import React from "react";
import styled from "styled-components";
import CardPosts from "./CardPosts";

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
    return (
        <PostContainer>
            {cardPostData.length === 0 ? 
                <div style={{ color: "#a0a0a0"}}>찾으시는 방이 없습니다.</div> 
                :                 
                <CardPosts cardPostData={cardPostData} />
            }
        </PostContainer>
    );
}

export default Post;