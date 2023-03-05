import React from "react";
import styled from "styled-components";

const LikedListDiv = styled.div`
    margin-top: 1.5rem;
    margin-left: 1.2rem;
    width: 480px;
    max-height: 480px;
    display: flex;  
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
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

const LikedElementDiv = styled.div`
    position: relative;
    width: 110px;
    height: 150px;
    border-style: solid;
    border-color: blue;
`;

const LikedPostCard = styled.div`
    position: absolute;
    width: 105px;
    height: 145px;
`;

const LikedListPage = () => {
    return (
    <>
        <LikedListDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
            <LikedElementDiv>
                <LikedPostCard/>
            </LikedElementDiv>
        </LikedListDiv>
    </>
    );
}

export default LikedListPage;