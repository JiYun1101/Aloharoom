import React, { useState } from "react";
import ReadComment from "./ReadComment";
import ReadReplyComment from "./ReadReplyComment";
import WriteReplyComment from "./WriteReplyComment";

const ReadCommentSection = ({data}) => {
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
                        />
                    ))}
                </>
            )}
            {showWriteReplies && (
                <WriteReplyComment/>
            )}
        </>
    );
}

export default ReadCommentSection;