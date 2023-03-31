import React from "react";
import styled from "styled-components";
import CardPost from "./CardPost";

const CardPostContainer = styled.div`
    width: 93%;
    height: 95%;
    margin-left: 3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0.5rem;          /* 스크롤바의 너비 */
    }

    &::-webkit-scrollbar-thumb {
        height: 1%;             /* 스크롤바의 길이 */
        background: #47A5FD;    /* 스크롤바의 색상 */
        border-radius: 1rem;
    }

    &::-webkit-scrollbar-track {
        background: white;      /*스크롤바 뒷 배경 색상*/
    }
`;

const CardPosts = () => {
    return (
        <CardPostContainer>
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
        </CardPostContainer>
    );
}

export default CardPosts;