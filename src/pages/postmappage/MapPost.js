import React, { useEffect, useState } from "react";
import styled from "styled-components";
import KakaoMapPart from "./MapPostComponents/KakaoMapPart";
import Post from "./MapPostComponents/Post";
import axios from "axios";
import baseURL from "../api/baseURL";

const MapPostContainer = styled.div`
    position: absolute;
    top: 10.1rem;
    width: 99.5%;
    height: 82%;
    display: flex;
`;

const MapPost = ({
    searchStr,
    cardPostData,
    setCardPostData
}) => {
    const [swLat, setSWLat] = useState("");
    const [swLon, setSWLon] = useState("");
    const [neLat, setNELat] = useState("");
    const [neLon, setNELon] = useState("");

    async function fetchCardPostData() {
        await axios
        .get(`${baseURL}/api/board`, {
            params: {
                southWestLatitude: swLat,
                southWestLongitude: swLon,
                northEastLatitude: neLat,
                northEastLongitude: neLon
            }
        })
        .then((response) => {
            setCardPostData(response.data);
            console.log("cardPostData => response.data : ", response.data);
        })
        .catch((error) => {
            console.log("fetchCardPostData axios error");
        });
    }

    //위도 경도 값이 변할때마다 데이터를 가져온다.
    useEffect(() => {
        //여기서 필터링을 눌렀는지 안눌렀는지에 대해서
        fetchCardPostData();
    }, [swLat, swLon, neLat, neLon]);


    return (
        <MapPostContainer>
            <KakaoMapPart 
                searchStr={searchStr} 
                cardPostData={cardPostData}
                setSWLat={setSWLat}
                setSWLon={setSWLon}
                setNELat={setNELat}
                setNELon={setNELon}
            />
            <Post cardPostData={cardPostData}/>
        </MapPostContainer>
    );
}

export default MapPost;