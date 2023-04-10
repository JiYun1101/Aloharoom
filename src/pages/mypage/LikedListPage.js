import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import CardPost from "../postmappage/MapPostComponents/CardPost";

const LikedListDiv = styled.div`
    margin-top: 0.5rem;
    margin-left: 1.5rem;
    width: 35.7rem;
    max-height: 480px;
    display: flex;  
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    gap: 1.2rem;
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
    width: 16rem;
    height: 24rem;;
    display: flex;
    align-items: center;
`;

const heartStyle = {
    position: "absolute",
    top: "0.2rem",
    right: "0px",
    zIndex: "3",
    color: "#47A5FD"
};

const LikedListPage = () => {
    return (
    <>
        <LikedListDiv>
            <LikedElementDiv>
                <CardPost type="룸메이트"/>    
                <AiFillHeart size={40} style={heartStyle}/>
            </LikedElementDiv>
            <LikedElementDiv>
                <CardPost type="쉐어하우스"/>    
                <AiFillHeart size={40} style={heartStyle}/>
            </LikedElementDiv>
            <LikedElementDiv>
                <CardPost type="룸메이트"/>    
                <AiFillHeart size={40} style={heartStyle}/>
            </LikedElementDiv>
            <LikedElementDiv>
                <CardPost type="쉐어하우스"/>    
                <AiFillHeart size={40} style={heartStyle}/>
            </LikedElementDiv>
            <LikedElementDiv>
                <CardPost type="쉐어하우스"/>    
                <AiFillHeart size={40} style={heartStyle}/>
            </LikedElementDiv>
            <LikedElementDiv>
                <CardPost type="룸메이트"/>    
                <AiFillHeart size={40} style={heartStyle}/>
            </LikedElementDiv>
            <LikedElementDiv>
                <CardPost type="쉐어하우스"/>    
                <AiFillHeart size={40} style={heartStyle}/>
            </LikedElementDiv>
        </LikedListDiv>
    </>
    );
}

export default LikedListPage;