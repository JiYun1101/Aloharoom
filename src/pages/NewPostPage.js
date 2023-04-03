import React from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NewPostContainer = styled.div`
    position: relative;
    //border-style: solid;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const NewPostHeaderDiv = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 500;
    color: #47a5fd;
`;

const BackPageIconStyle = {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    color: "#47a5fd"
}

const NewPostPage = () => {
    const navigate = useNavigate();
    return (
        <NewPostContainer>
            <AiOutlineLeft size={40} style={BackPageIconStyle} onClick={() => navigate(-1)}/>
            <NewPostHeaderDiv>
                새 글 쓰기
            </NewPostHeaderDiv>
        </NewPostContainer>
    );
}

export default NewPostPage;