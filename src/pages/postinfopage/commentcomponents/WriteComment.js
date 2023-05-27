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
        <PostInfoFlexDiv 
            width="100%" 
            minHeight="4rem" 
            flexDirection="column" 
            borderBottom="solid #bbbbbb"
            alignItems="center"
        >
            <PostInfoFlexDiv width="100%" minHeight="4rem" alignItems="center"> 
                <CommentProfileImg src={myProfileURL}/>
                <CommentInput 
                    type="text" 
                    width="75%"
                    value={inputValue} 
                    placeholder="댓글을 입력하세요." 
                    onChange={(e) => { setInputValue(e.target.value);}}
                />
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