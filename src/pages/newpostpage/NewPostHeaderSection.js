import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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

const NewPostHeaderSection = () => {
    const Id = useParams().id;
    const IdExist = Id != null;
    return(
        <NewPostHeaderDiv>{IdExist ? `글 수정` : `새 글 쓰기`}</NewPostHeaderDiv>
    );
}

export default NewPostHeaderSection;