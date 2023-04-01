import React from 'react'
import styled from 'styled-components'

const PostNavContainer = styled.div`
    color: #47A5FD;
    &:hover {
        text-decoration: underline;
        text-decoration-color: #47A5FD;
        text-decoration-thickness: 0.13rem;
        text-underline-offset: 0.5rem;
    }
`;

const PostNav = ({clickFunc, NavName}) => {
    return (
        <PostNavContainer onClick={clickFunc}>{NavName}</PostNavContainer>
    )
}

export default PostNav;