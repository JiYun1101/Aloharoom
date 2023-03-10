import React from "react";
import styled from "styled-components";
import MyPageBox from "./mypagecomponents/MyPageBox";


const MyPageContainer = styled.div`
    width: 100%;  
    //text-align: center;
`;
const MyPageSection = () => {
    return (
        <MyPageContainer>
            <MyPageBox/>
        </MyPageContainer>
    );
}

export default MyPageSection;