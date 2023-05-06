import React, { useState } from "react";
import styled from "styled-components";
import CardPosts from "./CardPosts";
import PostNavs from "./PostNavs";
// import CardPost2 from "./Community";

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

const Post = ({ cardPostData }) => {
  const [roommatePosts, setRoomMatePosts] = useState(true);
  const [sharehousePosts, setShareHousePosts] = useState(false);

  const roommatePostsClick = () => {
    setRoomMatePosts(true);
    setShareHousePosts(false);
  };

  return (
    <PostContainer>
      <PostNavs roommatePostsClick={roommatePostsClick} />
      <CardPosts roommatePosts={roommatePosts} cardPostData={cardPostData} />
    </PostContainer>
  );
};

export default Post;
