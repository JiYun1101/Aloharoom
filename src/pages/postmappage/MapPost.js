import React from "react";
import styled from "styled-components";
import KakaoMapPart from "./MapPostComponents/KakaoMapPart";
import Post from "./MapPostComponents/Post";

const MapPostContainer = styled.div`
    position: absolute;
    top: 10.1rem;
    width: 99.5%;
    height: 82%;
    display: flex;
`;

const MapPost = ({searchStr}) => {
    return (
        <MapPostContainer>
            <KakaoMapPart searchStr={searchStr}/>
            <Post/>
        </MapPostContainer>
    );
}

export default MapPost;