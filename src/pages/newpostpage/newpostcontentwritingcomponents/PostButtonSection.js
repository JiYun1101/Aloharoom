import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const PostButtonDiv = styled.div`
    margin-top: 0.5rem;
    width: 90%;
    height: 2rem;
    display: flex;
    flex-direction: row-reverse;
`;

const PostButton = styled.button`
    width: 7rem;
    height: 2rem;
    font-size: 1rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #47a5fd;
    border-radius: 0.3rem;
    background-color: #47a5fd;
    color: white;
`;

const PostButtonSection = ({PostInfoSubmit}) => {
    const navigate = useNavigate();
    return (
        <PostButtonDiv>
            <PostButton onClick={() => {
                PostInfoSubmit();
                navigate(-1);
            }}>
                올리기
            </PostButton>
        </PostButtonDiv>
    )
}

export default PostButtonSection