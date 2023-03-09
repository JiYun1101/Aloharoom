import React from "react";
import styled from "styled-components";
import KakaoMapPart from "./MapPostComponents/KakaoMapPart";

const MapPostContainer = styled.div`
    position: absolute;
    top: 10.1rem;
    width: 99.5%;
    height: 82%;
    display: flex;
`;

const PostSection = styled.div`
    border-width: 0.1rem;
    border-style: solid;
    border-color: #47A5FD;
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PostCardSection = styled.div`
    width: 90%;
    height: 95%;
    margin-left: 6.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    gap: 2rem;
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

const PostCard = styled.div`
    width: 25%;
    height: 15rem;
    border-style: solid;
    border-color: #47A5FD;
    border-radius: 1rem;
`;

const MapPost = () => {
    return (
        <MapPostContainer>
            <KakaoMapPart/>
            <PostSection>
                <PostCardSection>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                </PostCardSection>
            </PostSection>
        </MapPostContainer>
    );
}

export default MapPost;