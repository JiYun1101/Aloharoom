import React from "react";
import styled from "styled-components";

const MyPageDiv = styled.div`
    //position: relative;
    width: 100%;
    height: 50rem;
    border-color: green;
    border-style: solid;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
`;

const MyPageBox = styled.div`
    border-radius: 0.6rem;
    border-color: #47A5FD;
    border-style: solid;
    width: 35rem;
    height: 35rem;
`;



const MyPageSection = () => {
    return (
        <MyPageDiv>
            <MyPageBox/>
        </MyPageDiv>
    );
}

export default MyPageSection;