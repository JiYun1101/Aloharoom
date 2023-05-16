import React, { useState } from 'react';
import styled from 'styled-components';
import PostInfoFlexDiv from './PostInfoFlexDiv';
import PostInfoSpan from './PostInfoSpan';
import CommentInput from './CommentInput';
import CommentWriteButton from './CommentWriteButton';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const CommentProfileImg = styled.img`
    margin-left: 0.7rem;
    border-radius: 10rem;
    width: 2.5rem;
    height: 2.5rem;
`;

const CommunityReadComment = ({
    commentId,
    content,
    //createdDate,
    nickname,
    userId,
    showReplies,
    showWriteReplies,
    toggleReplies,
    toggleWriteReplies,
    setClickTargetUserId,
    setClickTargetContent,
    setClickGroupId,
    deleteComment,
    updateComment
}) => {
    const [editMode, setEditMode] = useState(false);
    const [editInputValue, setEditInputValue] = useState(content);
    const editIconClick = () => {setEditMode(!editMode);}
    return (
        <PostInfoFlexDiv width="100%" minHeight="6rem" flexDirection="column" borderStyle="solid" borderRadius="0.5rem" borderColor="#47a5fd">
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center" flexDirection="row">
                <PostInfoFlexDiv width="50%" height="100%" alignItems="center">
                    <CommentProfileImg src = "blue.png"/>
                    <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="0.5rem">{nickname}</PostInfoSpan>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="50%" height="100%" alignItems="center" flexDirection="row-reverse">
                    <AiOutlineDelete size={30} style={{ marginRight: "0.5rem"}} onClick={() => { deleteComment(commentId);}}/>
                    <AiOutlineEdit size={30} style={{ marginRight: "0.5rem"}} onClick={editIconClick}/>
                </PostInfoFlexDiv>
            </PostInfoFlexDiv>
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center"> 
                {editMode 
                ? 
                <>
                    <CommentInput type="text" defaultValue={content} onChange={(e) => {setEditInputValue(e.target.value);}}/>
                    <CommentWriteButton
                        onClick={() => {
                            updateComment(commentId, editInputValue);
                            setEditMode(false);
                            setEditInputValue("");
                        }}
                    >
                        수정하기
                    </CommentWriteButton>
                </>
                :
                <>
                    <PostInfoSpan color="black" marginLeft="4rem" fontSize="1.2rem">{content}</PostInfoSpan>
                    <PostInfoSpan
                        color="#47a5fd" 
                        marginLeft="1rem" 
                        marginTop="0.5rem" 
                        fontSize="0.8rem"
                        onClick={() =>{
                            setClickTargetUserId(userId);
                            setClickTargetContent(content);
                            setClickGroupId(commentId);
                            toggleWriteReplies();
                        }}
                    >
                        {showWriteReplies ? "대댓글 안쓰기" : "대댓글 쓰기"}
                    </PostInfoSpan>
                    <PostInfoSpan 
                        color="#47a5fd" 
                        marginLeft="1rem" 
                        marginTop="0.5rem" 
                        fontSize="0.8rem"
                        onClick={() =>{
                            toggleReplies();
                            setClickGroupId(commentId);
                        }}
                    >
                        {showReplies ? "대댓글 가리기" : "대댓글 보기"}
                    </PostInfoSpan>
                </>
                }
            </PostInfoFlexDiv>
        </PostInfoFlexDiv>
    );
}

export default CommunityReadComment