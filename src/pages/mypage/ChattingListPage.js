import React from "react";
import styled from "styled-components";

const ChattingListDiv = styled.div`
    width: 490px;
    max-height: 510px;
    border-style: solid;
    border-color: green;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-x: hidden;
    overflow-y: scroll;
`;

const ChattingListPage = () => {
    return (
    <>
        <ChattingListDiv>
        </ChattingListDiv>
    </>
    );
}

export default ChattingListPage;