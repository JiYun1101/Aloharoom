import React from 'react'
import styled from 'styled-components';
import PostInfoFlexDiv from '../PostInfoFlexDiv';
import PostInfoSpan from '../PostInfoSpan';

const CommentProfileImg = styled.img`
    margin-left: 0.7rem;
    border-radius: 10rem;
    width: 2.5rem;
    height: 2.5rem;
`;

const CommentInput = styled.input`
    margin-left: 0.5rem;
    border-color: #47A5FD;
    border-radius: 0.5rem;
    width: 80%;
    height: 2rem;
`;

const CommentWriteButton = styled.button`
    margin-left: 3%;
    width: 10%;
    height: 2rem;
    font-size: 1rem;
    border-width: 0.1rem;
    border-style: solid;
    border-radius: 0.3rem;
    background-color: white;
    border-color: #47A5FD;
    color: #47A5FD;
`;

const WriteComment = () => {
    return (
        <PostInfoFlexDiv width="100%" minHeight="6rem" flexDirection="column" borderStyle="solid" borderRadius="0.5rem" borderColor="#47a5fd">
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center">
                <CommentProfileImg src = "blue.png"/>
                <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="0.5rem">wkdgns1979</PostInfoSpan>
            </PostInfoFlexDiv>
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center"> 
                <CommentInput type="text" placeholder="댓글을 입력하세요."/>
                <CommentWriteButton>쓰기</CommentWriteButton>
            </PostInfoFlexDiv>
        </PostInfoFlexDiv>
    );
}

export default WriteComment