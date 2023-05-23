import React from "react";
import styled from "styled-components";

const RecentViewPageTitleContainer = styled.div`
    max-width: 38rem;
    min-height: 70px;
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border-style: none none solid none;
    border-color: #BBBBBB;
    border-width: 0.05rem;
`;

const RecentViewPageTitle = ({title}) => {
    return (
        <RecentViewPageTitleContainer>
            <div>{title}</div>
        </RecentViewPageTitleContainer>
    );
}

export default RecentViewPageTitle;