import React from "react";
import styled from "styled-components";
import MyInfoPageBox from "./MyInfoPageBox";

const MyInfoPageContainer = styled.div`
    width: 100%;  
`;
const MyPageSection = () => {
    return (
        <MyInfoPageContainer>
            <MyInfoPageBox/>
        </MyInfoPageContainer>
    );
}

export default MyPageSection;