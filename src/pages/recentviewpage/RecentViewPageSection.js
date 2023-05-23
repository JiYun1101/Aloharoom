import React from "react";
import styled from "styled-components";
import RecentViewPageBox from "./RecentViewPageBox";

const RecentViewPageContainer = styled.div`
    width: 100%;  
`;

const RecentViewPageSection = () => {
    return (
    <RecentViewPageContainer>
        <RecentViewPageBox/>
    </RecentViewPageContainer>
    );
}

export default RecentViewPageSection;