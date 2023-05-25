import React, { useState } from 'react'
import PostInfoFlexDiv from '../PostInfoFlexDiv';
import PostInfoSpan from '../PostInfoSpan';
import UserProfileImg from '../UserProfileImg';
import CommentInput from '../CommentInput';
import CommentWriteButton from '../CommentWriteButton';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import DeleteCommentModal from '../../modal/DeleteCommentModal';

const ReadReplyComment = ({
    commentId,
    content,
    createdDate,
    nickname,
    userId,
    profileUrl,
    showWriteReplies,
    toggleWriteReplies,
    setClickTargetUserId,
    setClickTargetContent,
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
        <PostInfoFlexDiv width="85%" minHeight="7rem" flexDirection="column" marginTop="0.5rem" marginLeft="15%"  borderBottom="solid #bbbbbb">
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center" flexDirection="row">
                <PostInfoFlexDiv width="50%" minHeight="100%" alignItems="center">
                    <UserProfileImg marginLeft="0.7rem" borderRadius="10rem" width="2.5rem" height="2.5rem" src={profileUrl}/>
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
            <PostInfoFlexDiv width="100%" minHeight="4rem" alignItems="center"> 
                {editMode
                ? 
                    <>
                        <CommentInput type="text" width="80%" defaultValue={content} onChange={(e) => { setEditInputValue(e.target.value);}}/>
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
                        {localStorage.getItem('userId') ? 
                            <PostInfoSpan 
                                color="#47a5fd"
                                marginLeft="1rem"
                                marginTop="0.5rem"
                                fontSize="0.8rem"
                                onClick={() => {
                                    setClickTargetUserId(userId);
                                    setClickTargetContent(content);
                                    toggleWriteReplies();
                                }}
                            >
                                {showWriteReplies ? "답글 안쓰기" : "답글 쓰기"}
                            </PostInfoSpan>
                        :
                            <></>
                        }
                        <PostInfoSpan
                            marginLeft="1rem"
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

export default ReadReplyComment