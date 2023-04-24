import React from "react";
import styled from "styled-components";

const NewPostHeaderDiv = styled.div`
  text-align: center;
  height: 3rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 500;
  color: #47a5fd;
`;

const NewPostHeaderSection = () => {
  return <NewPostHeaderDiv>새 글 쓰기</NewPostHeaderDiv>;
};

export default NewPostHeaderSection;
