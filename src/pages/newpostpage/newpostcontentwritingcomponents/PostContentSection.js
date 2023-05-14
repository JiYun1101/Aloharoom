import React from "react";
import styled from "styled-components";

const PostContentDiv = styled.div`
  margin-top: 2rem;
  width: 90%;
  height: 90%;
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
  const isNotEmpty = contents !== "";
  return (
    <PostContentDiv>
      <PostContentTextArea
        value={isNotEmpty ? contents : undefined}
        placeholder="집에 대한 상세한 내용을 작성해주세요. (인원, 교통시설, 편의시설, 층수 등)"
        onChange={(e) => {
          setContents(e.target.value);
        }}
      />
    </PostContentDiv>
  );
};

export default PostContentSection;
