import React from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import NewPostHeaderSection from "./newpostpage/NewPostHeaderSection";
import NewPostContentSection from "./newpostpage/NewPostContentSection";

const NewPostContainer = styled.div`
  position: relative;
  height: 57rem;
  display: flex;
  flex-direction: column;
`;

const BackPageIconStyle = {
  position: "absolute",
  top: "1rem",
  left: "1rem",
  color: "#47a5fd",
};

const NewPostPage = () => {
  const navigate = useNavigate();
    return (
        <NewPostContainer>
            <AiOutlineLeft size={40} style={BackPageIconStyle} onClick={() => navigate(-1)}/>
            <NewPostHeaderSection/>
            <NewPostContentSection/>
        </NewPostContainer>
    );
}

export default NewPostPage;
