import React from "react";
import styled from "styled-components";
import { Map } from 'react-kakao-maps-sdk';

const MapPostBox = styled.div`
    position: absolute;
    top: 10.1rem;
    width: 99.5%;
    height: 82%;
    display: flex;
`;

const kakaoMapStyle = {
    width: "55%",
    height: "100%"
};

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
        <MapPostBox>
                <Map 
                    center={{ lat: 33.5563, lng: 126.79581 }}   // 지도의 중심 좌표
                    style={kakaoMapStyle} // 지도 크기
                    level={3}                                   // 지도 확대 레벨
                />
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
        </MapPostBox>
    );
}

export default MapPost;