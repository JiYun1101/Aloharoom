import React from 'react'
import PostInfoFlexDiv from '../PostInfoFlexDiv';
import PostInfoSpan from '../PostInfoSpan';
import UserProfileImg from '../UserProfileImg';

const ReadReplyComment = () => {
    return (
        <PostInfoFlexDiv width="85%" minHeight="6rem" flexDirection="column" marginTop="0.5rem" marginLeft="15%" borderStyle="solid" borderRadius="0.5rem" borderColor="#47a5fd">
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center">
                <UserProfileImg marginLeft="0.7rem" borderRadius="10rem" width="2.5rem" height="2.5rem" src = "blue.png"/>
                <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="0.5rem">wkdgns1979</PostInfoSpan>
            </PostInfoFlexDiv>
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center"> 
                <PostInfoSpan color="black" marginLeft="4rem" fontSize="1.2rem">안녕하세요!</PostInfoSpan>
                <PostInfoSpan color="#47a5fd" marginLeft="1rem" marginTop="0.5rem" fontSize="0.8rem">답글 쓰기</PostInfoSpan>
            </PostInfoFlexDiv>
        </PostInfoFlexDiv>
    );
}

export default ReadReplyComment