import React, { useEffect, useState } from "react";
import styled from "styled-components";
import KakaoMapPart from "./MapPostComponents/KakaoMapPart";
import Post from "./MapPostComponents/Post";
import axios from "axios";

const MapPostContainer = styled.div`
    position: absolute;
    top: 10.1rem;
    width: 99.5%;
    height: 82%;
    display: flex;
`;

const MapPost = ({searchStr}) => {
    //서버에서 전달 받을 상태 변수
    const [cardPostData, setCardPostData] = useState([]);
    //전체 게시물 데이터 받아오기
    async function fetchCardPostData() {
        await axios
        .get("http://localhost:8080/api/board")
        .then((response) => {
            setCardPostData(response.data);
            console.log("cardPostData => response.data : ", response.data);
        })
        .catch((error) => {
            console.log("axios error");
        });
    }

    //한번 렌더링 될때 데이터를 받아온다.
    useEffect(() => {
        fetchCardPostData();
    }, []);


    return (
        <MapPostContainer>
            <KakaoMapPart 
                searchStr={searchStr} 
                cardPostData={cardPostData}
            />
            <Post cardPostData={cardPostData}/>
        </MapPostContainer>
    );
}

export default MapPost;