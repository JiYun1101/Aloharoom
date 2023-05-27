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
  white-space: pre-wrap; /* 개행 문자 인식 및 유지 */
  :focus {
    outline: none;
  }
`;

const PostContentSection = ({ contents, setContents }) => {
  const isNotEmpty = contents !== "";
  return (
    <PostContentDiv>
      <PostContentTextArea
        value={contents} // value 속성으로 상태값을 바인딩
        placeholder="게시물에 대한 상세한 내용을 작성해주세요."
        onChange={(e) => {
          setContents(e.target.value);
        }}
      />
    </PostContentDiv>
  );
};

export default PostContentSection;
