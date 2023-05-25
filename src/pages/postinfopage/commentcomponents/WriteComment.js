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
    boardId,
    myProfileURL,
    flag
}) => {
    const [inputValue, setInputValue] = useState("");
    return (
        <PostInfoFlexDiv width="100%" minHeight="7rem" marginTop="0.5rem" marginBottom="2rem" flexDirection="column" borderBottom="solid #bbbbbb">
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center">
                <CommentProfileImg src={myProfileURL}/>
                <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="0.5rem">{localStorage.getItem('nickname')}</PostInfoSpan>
            </PostInfoFlexDiv>
            <PostInfoFlexDiv width="100%" minHeight="4rem" alignItems="center"> 
                <CommentInput type="text" width="80%" value={inputValue} placeholder="댓글을 입력하세요." onChange={(e) => { setInputValue(e.target.value);}}/>
                <CommentWriteButton 
                    onClick={() => {
                        setInputValue("");
                        makeCommentRequest(localStorage.getItem('userId'), localStorage.getItem('userId'), boardId, flag, inputValue, null, 0, null);
                    }}
                >
                    쓰기
                </CommentWriteButton>
            </PostInfoFlexDiv>
        </PostInfoFlexDiv>
    );
}

export default WriteComment