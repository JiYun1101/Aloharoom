import React from "react";
import styled from "styled-components";

const MyInfoDiv = styled.div`
    margin-top: 1.5rem;
    margin-left: 0.5rem;
    width: 480px;
    height: 480px;
    border-style: solid;
    border-color: red;
    display: flex;
    flex-direction: column;
`;

const MyInfoPage = () => {
    return (
        <>
            <MyInfoDiv>
            </MyInfoDiv>
        </>
    );
}

export default MyInfoPage;