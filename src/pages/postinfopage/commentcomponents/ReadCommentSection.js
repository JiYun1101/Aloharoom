import React, { useState } from "react";
import ReadComment from "./ReadComment";
import ReadReplyComment from "./ReadReplyComment";
import WriteReplyComment from "./WriteReplyComment";

const ReadCommentSection = ({
    data,
    makeCommentRequest,
    boardId,
    deleteComment,
    updateComment,
    myProfileURL,
    flag
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

    return (
        <>
            <ReadComment
                key={data.commentId}
                commentId={data.commentId}
                content={data.content}
                createdDate={data.createdDate}
                nickname={data.nickname}
                userId={data.userId}
                profileUrl={data.profileUrl}
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
                        <ReadReplyComment
                            key={data.commentId}
                            commentId={data.commentId}
                            content={data.content}
                            createdDate={data.createdDate}
                            nickname={data.nickname}
                            userId={data.userId}
                            profileUrl={data.profileUrl}
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
                <WriteReplyComment 
                    makeCommentRequest={makeCommentRequest}
                    boardId={boardId}
                    clickTargetUserId={clickTargetUserId}
                    clickTargetContent={clickTargetContent}
                    clickGroupId={clickGroupId}
                    myProfileURL={myProfileURL}
                    flag={flag}
                />
            )}
        </>
    );
}

export default ReadCommentSection;