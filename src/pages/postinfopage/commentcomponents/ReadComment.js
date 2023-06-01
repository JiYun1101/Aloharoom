import React, { useState } from 'react';
import styled from 'styled-components';
import PostInfoFlexDiv from '../PostInfoFlexDiv';
import PostInfoSpan from '../PostInfoSpan';
import CommentInput from '../CommentInput';
import CommentWriteButton from '../CommentWriteButton';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import DeleteCommentModal from '../../modal/DeleteCommentModal';

const CommentProfileImg = styled.img`
    margin-left: 0.7rem;
    border-radius: 10rem;
    width: 2.5rem;
    height: 2.5rem;
`;

const ReadComment = ({
    commentId,
    content,
    createdDate,
    nickname,
    userId,
    profileUrl,
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
    const [isDeleteCommentModalOpen, setIsDeleteCommentModalOpen] = useState(false);
    const showDeleteCommentModal = () => {setIsDeleteCommentModalOpen(true);}
    const handleDeleteCommentCancel = () => {setIsDeleteCommentModalOpen(false);}
    const handleDeleteCommentOk = () => {
        deleteComment(commentId);
        setIsDeleteCommentModalOpen(false);
    }
    const editIconClick = () => {setEditMode(!editMode);}
    return (
        <>
        {isDeleteCommentModalOpen ?
            <DeleteCommentModal
                isDeleteCommentModalOpen={isDeleteCommentModalOpen}
                handleOk={handleDeleteCommentOk}
                handelCancel={handleDeleteCommentCancel}
            />
        :
            <></>
        }
        <PostInfoFlexDiv width="100%" minHeight="6rem" flexDirection="column" borderBottom="solid #bbbbbb" marginTop="0.5rem">
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center" flexDirection="row">
                <PostInfoFlexDiv width="50%" minHeight="100%" alignItems="center">
                    <CommentProfileImg src={profileUrl}/>
                    <PostInfoSpan fontSize="1.2rem" marginLeft="1rem" fontWeight="600">{nickname}</PostInfoSpan>
                </PostInfoFlexDiv>
                <PostInfoFlexDiv width="50%" minHeight="100%" alignItems="center" flexDirection="row-reverse">
                    {parseInt(userId) === parseInt(localStorage.getItem('userId')) ?
                        <>
                            <AiOutlineDelete 
                                size={30} 
                                style={{ marginRight: "0.5rem"}} 
                                onClick={() => { 
                                    showDeleteCommentModal();
                                }}
                            />
                            <AiOutlineEdit 
                                size={30} 
                                style={{ marginRight: "0.5rem"}} 
                                onClick={editIconClick}
                            />
                        </>
                    :
                        <></>
                    }
                </PostInfoFlexDiv>
            </PostInfoFlexDiv>
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="end" marginBottom="0.5rem"> 
                {editMode 
                ? 
                <>
                    <CommentInput type="text" width="80%" defaultValue={content} onChange={(e) => {setEditInputValue(e.target.value);}}/>
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
                    <PostInfoSpan width="33rem" color="black" marginLeft="4rem" fontSize="1.2rem">{content}</PostInfoSpan>
                    {localStorage.getItem('userId') ? 
                        <PostInfoSpan
                            color="#47a5fd" 
                            width="5rem"    
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
                            {showWriteReplies ? "댓글 안쓰기" : "댓글 쓰기"}
                        </PostInfoSpan>
                    :
                        <></>
                    }
                    <PostInfoSpan 
                        color="#47a5fd" 
                        width="5rem"
                        marginTop="0.5rem" 
                        fontSize="0.8rem"
                        onClick={() =>{
                            toggleReplies();
                            setClickGroupId(commentId);
                        }}
                    >
                        {showReplies ? "댓글 가리기" : "댓글 보기"}
                    </PostInfoSpan>
                    <PostInfoSpan
                        marginLeft="0.5rem"
                        width="8rem"
                        marginTop="0.5rem" 
                        fontSize="0.8rem" 
                        color="#a0a0a0"
                    >
                        {createdDate}
                    </PostInfoSpan>
                </>
                }
            </PostInfoFlexDiv>
        </PostInfoFlexDiv>
        </>
    );
}

export default ReadComment