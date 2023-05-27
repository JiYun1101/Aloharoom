import React, { useState } from 'react'
import styled from 'styled-components';
import PostInfoFlexDiv from '../PostInfoFlexDiv';
import UserProfileImg from '../UserProfileImg';

const CommentInput = styled.input`
    margin-left: 0.5rem;
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

const WriteReplyComment = ({
    makeCommentRequest,
    boardId,
    clickTargetUserId,
    clickTargetContent,
    clickGroupId,
    myProfileURL,
    flag
}) => {
    const [inputValue, setInputValue] = useState();
    return (
        <PostInfoFlexDiv 
            width="85%" 
            minHeight="4rem" 
            flexDirection="column" 
            marginLeft="15%" 
            borderBottom="solid #bbbbbb"
            alignItem="center"
        >    
            <PostInfoFlexDiv width="100%" minHeight="4rem" alignItems="center">
                <UserProfileImg 
                    marginLeft="0.7rem" 
                    borderRadius="10rem" 
                    width="2.5rem" 
                    height="2.5rem" 
                    src={myProfileURL}
                />
                <CommentInput 
                    type="text" 
                    width="75%" 
                    value={inputValue} 
                    placeholder="대댓글을 입력하세요." 
                    onChange={(e) => { setInputValue(e.target.value)}}
                />
                <CommentWriteButton
                    onClick={() =>{ 
                        console.log('clickTargetUserId', clickTargetUserId);
                        console.log('clickTargetContent', clickTargetContent);
                        console.log('clickGroupId', clickGroupId);
                        setInputValue("");
                        makeCommentRequest(localStorage.getItem('userId'), clickTargetUserId, boardId, flag, inputValue, clickTargetContent, 1, clickGroupId);
                    }}
                >
                    쓰기
                </CommentWriteButton>
            </PostInfoFlexDiv>
        </PostInfoFlexDiv>
    );
}

export default WriteReplyComment;