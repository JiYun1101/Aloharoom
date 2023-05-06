import React, { useState } from "react";
import ReadComment from "./ReadComment";
import ReadReplyComment from "./ReadReplyComment";
import WriteReplyComment from "./WriteReplyComment";

const ReadCommentSection = ({
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
    return (
        <>
            <ReadComment
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
                            showWriteReplies={showWriteReplies}
                            toggleWriteReplies={toggleWriteReplies}
                            setClickTargetUserId={setClickTargetUserId}
                            setClickTargetContent={setClickTargetContent}
                            setClickGroupId={setClickGroupId}
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
                />
            )}
        </>
    );
}

export default ReadCommentSection;