import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

const LikedListDiv = styled.div`
    margin-top: 1.5rem;
    margin-left: 2.1rem;
    width: 465px;
    max-height: 480px;
    display: flex;  
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    gap: 1rem;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 0.4rem;          /* 스크롤바의 너비 */
    }

    &::-webkit-scrollbar-thumb {
        height: 1%;             /* 스크롤바의 길이 */
        background: #BBBBBB;    /* 스크롤바의 색상 */
        border-radius: 1rem;
    }

    &::-webkit-scrollbar-track {
        background: white;      /*스크롤바 뒷 배경 색상*/
    }
`;
/* 지윤이에게 물어보기 위에 하트가 있는것이 의미가 있는지 */
const LikedElementDiv = styled.div`
    position: relative;
    left: 0.6rem;
    width: 200px;
    height: 300px;
`;

const LikedPostCard = styled.div`
    position: absolute;
    top: 0.7rem;
    left: 0.5rem;
    width: 180px;
    height: 280px;
    border-style: solid;
    border-color: #47A5FD;
    border-radius: 0.5rem;
`;

const heartStyle = {
    position: "absolute",
    top: "0px",
    right: "0px",
    zIndex: "3",
    color: "#47A5FD"
};

const LikedListPage = () => {
    return (
    <>
        <LikedListDiv>
            <LikedElementDiv>
                <LikedPostCard/>
                <AiFillHeart size={30} style={heartStyle}/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
                <AiFillHeart size={30} style={heartStyle}/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
                <AiFillHeart size={30} style={heartStyle}/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
                <AiFillHeart size={30} style={heartStyle}/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
                <AiFillHeart size={30} style={heartStyle}/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
                <AiFillHeart size={30} style={heartStyle}/>
            </LikedElementDiv>
        </LikedListDiv>
    </>
    );
}

export default LikedListPage;