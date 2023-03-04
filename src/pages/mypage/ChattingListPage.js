import React from "react";
import styled from "styled-components";

const ChattingListDiv = styled.div`
    width: 490px;
    height: 510px;
    border-style: solid;
    border-color: green;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-x: hidden;
    overflow-y: auto;
`;

const ChattingElement = styled.div`
    width: 470px;
    min-height: 100px;
    border-style: solid;
    border-color: red; 
`;

const ChattingListPage = () => {
    return (
    <>
        <ChattingListDiv>    
            <ChattingElement/>
            <ChattingElement/>
            <ChattingElement/>
            <ChattingElement/>
            <ChattingElement/>
            <ChattingElement/>
            <ChattingElement/>
            <ChattingElement/>
            <ChattingElement/>
        </ChattingListDiv>
    </>
    );
}

export default ChattingListPage;