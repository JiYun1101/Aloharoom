import React from 'react'
import PostInfoFlexDiv from '../PostInfoFlexDiv';
import PostInfoSpan from '../PostInfoSpan';
import UserProfileImg from '../UserProfileImg';

const ReadReplyComment = ({
    commentId,
    content,
    //createdDate,
    nickname,
    userId,
    showWriteReplies,
    toggleWriteReplies,
    setClickTargetUserId,
    setClickTargetContent,
    setClickGroupId
}) => {
    return (
        <PostInfoFlexDiv width="85%" minHeight="6rem" flexDirection="column" marginTop="0.5rem" marginLeft="15%" borderStyle="solid" borderRadius="0.5rem" borderColor="#47a5fd">
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center">
                <UserProfileImg marginLeft="0.7rem" borderRadius="10rem" width="2.5rem" height="2.5rem" src = "blue.png"/>
                <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="0.5rem">{nickname}</PostInfoSpan>
            </PostInfoFlexDiv>
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center"> 
                <PostInfoSpan color="black" marginLeft="4rem" fontSize="1.2rem">{content}</PostInfoSpan>
                <PostInfoSpan 
                    color="#47a5fd"
                    marginLeft="1rem"
                    marginTop="0.5rem"
                    fontSize="0.8rem"
                    onClick={() => {
                        setClickTargetUserId(userId);
                        setClickTargetContent(content);
                        setClickGroupId(commentId);
                        toggleWriteReplies();
                    }}
                >
                    {showWriteReplies ? "답글 안쓰기" : "답글 쓰기"}
                </PostInfoSpan>
            </PostInfoFlexDiv>
        </PostInfoFlexDiv>
    );
}

export default ReadReplyComment