import React from 'react';
import styled from 'styled-components';
import PostInfoFlexDiv from '../PostInfoFlexDiv';
import PostInfoSpan from '../PostInfoSpan';

const CommentProfileImg = styled.img`
    margin-left: 0.7rem;
    border-radius: 10rem;
    width: 2.5rem;
    height: 2.5rem;
`;

const ReadComment = ({
    nickname,
    content,
    toggleReplies
}) => {
    return (
        <PostInfoFlexDiv width="100%" minHeight="6rem" flexDirection="column" borderStyle="solid" borderRadius="0.5rem" borderColor="#47a5fd">
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center">
                <CommentProfileImg src = "blue.png"/>
                <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="0.5rem">{nickname}</PostInfoSpan>
            </PostInfoFlexDiv>
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center"> 
                <PostInfoSpan color="black" marginLeft="4rem" fontSize="1.2rem">{content}</PostInfoSpan>
                <PostInfoSpan 
                    color="#47a5fd" 
                    marginLeft="1rem" 
                    marginTop="0.5rem" 
                    fontSize="0.8rem"
                    onClick={toggleReplies}
                >대댓글 보기</PostInfoSpan>
            </PostInfoFlexDiv>
        </PostInfoFlexDiv>
    );
}

export default ReadComment