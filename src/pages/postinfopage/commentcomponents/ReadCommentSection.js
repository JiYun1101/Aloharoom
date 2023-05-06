import React, { useState } from "react";
import ReadComment from "./ReadComment";
import ReadReplyComment from "./ReadReplyComment";

const ReadCommentSection = ({data}) => {
    const [showReplies, setShowReplies] = useState(false);
    const toggleReplies = () => {
        setShowReplies(!showReplies);
    };
    return (
        <>
            <ReadComment
                key={data.commentId}
                commentId={data.commentId}
                content={data.content}
                createdDate={data.createdDate}
                nickname={data.nickname}
                userId={data.userId}
                toggleReplies={toggleReplies}
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
                        />
                    ))}
                </>
            )}
        </>
    );
}

export default ReadCommentSection;