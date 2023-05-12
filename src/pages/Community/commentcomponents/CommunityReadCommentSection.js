import React, { useState } from "react";
import CommunityReadComment from "./CommunityReadComment";
import CommunityReadReplyComment from "./CommunityReadReplyComment";
import CommunityWriteReplyComment from "./CommunityWriteReplyComment";
import axios from "axios";
import baseURL from "../../api/baseURL";
const CommunityReadCommentSection = ({
    data,
    makeCommentRequest,
    boardId
}) => {
    const [clickTargetUserId, setClickTargetUserId] = useState();
    const [clickTargetContent, setClickTargetContent] = useState();
    const [clickGroupId, setClickGroupId] = useState();
    const [showReplies, setShowReplies] = useState(false);
    const [showWriteReplies, setShowWriteReplies] = useState(false);
    const toggleReplies = () => {
        setShowReplies(!showReplies);
    };
    const toggleWriteReplies = () => {
        setShowWriteReplies(!showWriteReplies);
    }
    async function deleteComment(commentId) {
        await axios.delete(`${baseURL}/api/comment/${commentId}`)
        .then((response) => { window.location.reload();})
        .catch((error) => {console.log('deleteComment axios error')});
    }

    async function updateComment(commentId, content) {
        await axios.patch(`${baseURL}/api/comment`, {
            "homeCommentId": commentId, 
            "content": content
        })
        .then((response) => { window.location.reload();})
        .catch((error) => {console.log('updateComment axios error')});
    }

    return (
        <>
            <CommunityReadComment
                key={data.commentId}
                commentId={data.commentId}
                content={data.content}
                createdDate={data.createdDate}
                nickname={data.nickname}
                userId={data.userId}
                showReplies={showReplies}
                showWriteReplies={showWriteReplies}
                toggleReplies={toggleReplies}
                toggleWriteReplies={toggleWriteReplies}
                setClickTargetUserId={setClickTargetUserId}
                setClickTargetContent={setClickTargetContent}
                setClickGroupId={setClickGroupId}
                deleteComment={deleteComment}
                updateComment={updateComment}
            />
            {showReplies && (
                <>
                    {data.commentDtos.map((data, index) => (
                        <CommunityReadReplyComment
                            key={data.commentId}
                            commentId={data.commentId}
                            content={data.content}
                            createdDate={data.createdDate}
                            nickname={data.nickname}
                            userId={data.userId}
                            showWriteReplies={showWriteReplies}
                            toggleWriteReplies={toggleWriteReplies}
                            setClickTargetUserId={setClickTargetUserId}
                            setClickTargetContent={setClickTargetContent}
                            deleteComment={deleteComment}
                            updateComment={updateComment}
                        />
                    ))}
                </>
            )}
            {showWriteReplies && (
                <CommunityWriteReplyComment 
                    makeCommentRequest={makeCommentRequest}
                    boardId={boardId}
                    clickTargetUserId={clickTargetUserId}
                    clickTargetContent={clickTargetContent}
                    clickGroupId={clickGroupId}
                />
            )}
        </>
    );
}

export default CommunityReadCommentSection;