import React from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NewPostContainer = styled.div`
    position: relative;
    height: 57rem;
    display: flex;
    flex-direction: column;
`;

const NewPostHeaderDiv = styled.div`
    height: 3rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 500;
    color: #47a5fd;
`;

const NewPostContentDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const NewPostContentInfoContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NewPostContentInfoDiv = styled.div`
    border-style: solid;
    border-color: #47a5fd;
    border-radius: 1rem;
    width: 80%;
    height: 95%;
`;

const NewPostContentWritingContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NewPostContentWritingDiv = styled.div`
    width: 80%;
    height: 95%;
    display: flex;
    flex-direction: column;
`;

const NewPostContentWritingArea = styled.div`
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 1rem;
    width: 100%;
    height: 68%;
`;

const NewPostContentImageArea = styled.div`
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 1rem;
    width: 100%;
    height: 32%;
`;

const BackPageIconStyle = {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    color: "#47a5fd"
};

const NewPostPage = () => {
    const navigate = useNavigate();
    return (
        <NewPostContainer>
            <AiOutlineLeft size={40} style={BackPageIconStyle} onClick={() => navigate(-1)}/>
            <NewPostHeaderDiv>
                새 글 쓰기
            </NewPostHeaderDiv>
            <NewPostContentDiv>
                <NewPostContentInfoContainer>
                    <NewPostContentInfoDiv/>
                </NewPostContentInfoContainer>
                <NewPostContentWritingContainer>
                    <NewPostContentWritingDiv>
                        <NewPostContentWritingArea/>
                        <NewPostContentImageArea/>
                    </NewPostContentWritingDiv>
                </NewPostContentWritingContainer>
            </NewPostContentDiv>
        </NewPostContainer>
    );
}

export default NewPostPage;