import React from "react";
import styled from "styled-components";
import PostNav from "./PostNav";

const PostNavsDiv = styled.div`
  border-bottom: solid 0.1rem #bbbbbb;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const PostNavs = ({ roommatePostsClick, sharehousePostsClick }) => {
  return (
    <PostNavsDiv>
      <PostNav clickFunc={roommatePostsClick} NavName="룸메이트" />
      {/* <PostNav clickFunc={sharehousePostsClick} NavName="쉐어하우스" /> */}
    </PostNavsDiv>
  );
};

export default PostNavs;
