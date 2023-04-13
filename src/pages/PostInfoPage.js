import React from "react";
import styled from "styled-components";

const PostInfoPageContainer = styled.div`
    height: 80rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostInfoPageBox = styled.div`
    border-style: solid;
    width: 50rem;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

// const PostInfoImageBox = styled.div`
//     margin-top: 3rem;
//     border-style: solid;
//     width: 100%;
//     height: 15rem;
// `;

const PostInfoPage = () => {
    return (
        <PostInfoPageContainer>
            <PostInfoPageBox>
                {/* <PostInfoImageBox>

                </PostInfoImageBox> */}
            </PostInfoPageBox>
        </PostInfoPageContainer>
    );
}

export default PostInfoPage;