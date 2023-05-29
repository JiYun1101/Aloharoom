import React from "react";
import styled from "styled-components";
import RecentViewPageArea from "./RecentViewPageArea"; 

const RecentViewPageContentDiv = styled.div`
    max-width: 50vw;
    min-height: 45vh;
`;

const RecentViewPageContent = () => {
    return (
        <RecentViewPageContentDiv>
            <RecentViewPageArea/>
        </RecentViewPageContentDiv>
    );
}

export default RecentViewPageContent;