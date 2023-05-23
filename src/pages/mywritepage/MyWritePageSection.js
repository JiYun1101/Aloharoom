import React from "react";
import styled from "styled-components";
import MyWritePageBox from "./MyWritePageBox";

const MyWritePageContainer = styled.div`
    width: 100%;  
`;

const MyWritePageSection = () => {
    return (
        <MyWritePageContainer>
            <MyWritePageBox/>
        </MyWritePageContainer>
    );
}

export default MyWritePageSection;