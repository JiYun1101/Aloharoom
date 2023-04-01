import React from 'react'
import styled from 'styled-components'

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

const PostNavs = () => {
  return (
    <PostNavDiv>
      <PostNav>룸메이트</PostNav>
      <PostNav>쉐어하우스</PostNav>
    </PostNavDiv>
  )
}

export default PostNavs