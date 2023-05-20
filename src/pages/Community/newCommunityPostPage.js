import React from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import NewPostHeaderSection2 from "./NewPostHeaderSection2";
import NewCommunityPostContentSection2 from "../newpostpage2/NewCommunityPostContentSection";

const NewPostContainer2 = styled.div`
  position: relative;
  height: 57rem;
  display: flex;
  flex-direction: column;
`;

const BackPageIconStyle2 = {
  position: "absolute",
  top: "1rem",
  left: "1rem",
  color: "#47a5fd",
};

const NewCommnityPostPage = () => {
  const navigate = useNavigate();
  return (
    <NewPostContainer2>
      <AiOutlineLeft
        size={40}
        style={BackPageIconStyle2}
        onClick={() => navigate(-1)}
      />
      <NewPostHeaderSection2 />
      <NewCommunityPostContentSection2 />
    </NewPostContainer2>
  );
};

export default NewCommnityPostPage;
