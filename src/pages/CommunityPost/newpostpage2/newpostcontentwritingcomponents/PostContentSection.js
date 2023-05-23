import React from "react";
import styled from "styled-components";

const PostContentDiv = styled.div`
  margin-top: 2.5vh;
  width: 90%;
  height: 70%;
`;

const PostContentTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: none;
  :focus {
    outline: none;
  }
`;

const PostContentSection = ({ contents, setContents }) => {
  // console.log("여기", contents);
  const isNotEmpty = contents !== "";
  return (
    <PostContentDiv>
      <PostContentTextArea
        value={isNotEmpty ? contents : ""}
        placeholder="게시물에 대한 상세한 내용을 작성해주세요. "
        onChange={(e) => {
          setContents(e.target.value);
        }}
      />
    </PostContentDiv>
  );
};

export default PostContentSection;
