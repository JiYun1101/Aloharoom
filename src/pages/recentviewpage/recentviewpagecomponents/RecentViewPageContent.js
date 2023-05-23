import React from "react";
import styled from "styled-components";
import RecentViewPageArea from "./RecentViewPageArea"; 

const RecentViewPageContentDiv = styled.div`
    max-width: 500px;
    min-height: 525px;
`;

const RecentViewPageContent = () => {
    return (
        <RecentViewPageContentDiv>
            <RecentViewPageArea/>
        </RecentViewPageContentDiv>
    );
}

export default RecentViewPageContent;