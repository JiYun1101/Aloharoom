import React, { useState } from 'react'
import styled from 'styled-components';
import PostInfoFlexDiv from '../PostInfoFlexDiv';
import PostInfoSpan from '../PostInfoSpan';
import CommentInput from '../CommentInput';
import CommentWriteButton from '../CommentWriteButton';

const CommentProfileImg = styled.img`
    margin-left: 0.7rem;
    border-radius: 10rem;
    width: 2.5rem;
    height: 2.5rem;
`;

const WriteComment = ({
    makeCommentRequest,
    boardId
}) => {
    const [inputValue, setInputValue] = useState("");
    return (
        <PostInfoFlexDiv width="100%" minHeight="6rem" flexDirection="column" borderStyle="solid" borderRadius="0.5rem" borderColor="#47a5fd">
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center">
                <CommentProfileImg src = "blue.png"/>
                <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="0.5rem">wkdgns1979</PostInfoSpan>
            </PostInfoFlexDiv>
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center"> 
                <CommentInput type="text" placeholder="댓글을 입력하세요." onChange={(e) => { setInputValue(e.target.value);}}/>
                <CommentWriteButton 
                    onClick={() => {
                        makeCommentRequest(1, 1, boardId, 0, inputValue, null, 0, null);
                    }}
                >
                    쓰기
                </CommentWriteButton>
            </PostInfoFlexDiv>
        </PostInfoFlexDiv>
    );
}

export default WriteComment