import React from "react";
import styled from "styled-components";
import CardPost from "../../postmappage/MapPostComponents/CardPost";
import axios from "axios";
import { Link } from 'react-router-dom';
import baseURL from "../../api/baseURL";
import { useEffect } from "react";
import { useState } from "react";

const MyWriteRoomPageAreaContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LinkToCardStyle = {
    textDecoration: 'none',
    color: 'black'
}

const MyWriteRoomPageArea= () => {
    const [responseData, setResponseData] = useState({});
    async function fetchMyWriteRoomInfo() {
        await axios.get(`${baseURL}/api/board/my/board`, {
            withCredentials:true
        })
        .then((response) => { 
            console.log('response data', response.data);
            setResponseData(response.data);
        })
        .catch((error) => {console.log(`axios fetchMyWriteRoomInfo error`);})
    }
    useEffect(() => {
        fetchMyWriteRoomInfo();
    }, []);
    return (
        <>
        {Object.keys(responseData).length === 0 ? 
            <MyWriteRoomPageAreaContainer>
                <div style={{color: "#a0a0a0"}}>작성한 방이 없습니다.</div>
            </MyWriteRoomPageAreaContainer>    
        :
            <MyWriteRoomPageAreaContainer>
                <Link 
                    to={`../postInfoPage/${responseData.boardId}`}
                    style={LinkToCardStyle}>
                <CardPost
                    type="룸메이트"
                    address={responseData.address}
                    boardId={responseData.boardId}
                    commentNum={responseData.commentNum}
                    flat={responseData.flat}
                    imageUrl={responseData.imgUrl}
                    nickname={responseData.nickname}
                    profileImgUrl={responseData.profileImgUrl}
                    rent={responseData.rent}
                    roomCount={responseData.roomCount}
                    startDate={responseData.startDate}
                />
                </Link>
            </MyWriteRoomPageAreaContainer>
        }
        
        </>
    );
}

export default MyWriteRoomPageArea;