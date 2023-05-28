import React from "react";
import styled from "styled-components";

const MyWriteTitleContainer = styled.div`
    max-width: 40vw;
    min-height: 8vh;
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 1.2rem;
    border-style: none none solid none;
    border-color: #BBBBBB;
    border-width: 0.05rem;
`;

const MyWriteTitleNav = styled.div`
    font-weight: 600;
    cursor: pointer;
    border-bottom: ${props => (props.underline ? 'solid #47a5fd 0.2rem' : 'none')};
    &:hover {
        border-bottom: solid #47a5fd 0.2rem;
    }
`;


const MyWritePageTitle = ({
    roomClick,
    communityClick,
    roomClicked,
    communityClicked
}) => {
    return (
    <MyWriteTitleContainer>
        <MyWriteTitleNav
            underline={roomClick}
            onClick={roomClicked}
        >
            방 작성
        </MyWriteTitleNav>
        <MyWriteTitleNav
            underline={communityClick}
            onClick={communityClicked}
        >
            커뮤니티 작성
        </MyWriteTitleNav>
    </MyWriteTitleContainer>
    );
}

export default MyWritePageTitle;