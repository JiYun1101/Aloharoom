import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
    position: absolute;
    top: 43rem;
    left: 18.5vw;
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    overflow: auto;
    gap: 2rem;
`;

const CardPost = styled.div`
    min-width: 20%;
    height: 20rem;
    border-color: black;
    border-style: solid;
    border-radius: 1rem;
`;

const CardPostSection = () => {
    return (
        <CardBox>
            <CardPost/>
            <CardPost/>
            <CardPost/>
            <CardPost/>
            <CardPost/>
            <CardPost/>
            <CardPost/>
            <CardPost/>
            <CardPost/>
            <CardPost/>
            <CardPost/>
        </CardBox>
    );
}

export default CardPostSection;
