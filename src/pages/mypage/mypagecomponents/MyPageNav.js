import React from "react";
import styled from "styled-components";

const MyPageNavContainer = styled.div`
    &:hover {
        text-decoration: underline;
        text-decoration-color: #47A5FD;
        text-decoration-thickness: 0.15rem;
        text-underline-offset: 0.6rem;
    }
`;

const MyPageNav = ({value, clickFunc}) => {
    return (
        <MyPageNavContainer onClick={clickFunc}>
            {value}
        </MyPageNavContainer>
    );
}

export default MyPageNav;