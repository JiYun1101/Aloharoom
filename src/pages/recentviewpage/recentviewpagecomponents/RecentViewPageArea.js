import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardPost from "../../postmappage/MapPostComponents/CardPost";
import axios from "axios";
import { Link } from 'react-router-dom';
import baseURL from "../../api/baseURL";

const EmptyRecentViewAreaDiv = styled.div`
    width: 34.8vw;
    height: 56.9vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RecentViewAreaDiv = styled.div`
    margin-top: 0.7vh;
    margin-left: 1.3vw;
    width: 33.4vw;
    max-height: 55vh;
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

const RecentViewElementDiv = styled.div`
    position: relative;
    left: 0.6vw;
    width: 15vw;
    height: 40vh;
    display: flex;
    align-items: center;
`;

const LinkToCardStyle = {
    textDecoration: 'none',
    color: 'black'
}


const RecentViewPageArea = () => {
    const [responseData, setResponseData] = useState([]);
    async function fetchRecentViewData() {
        await axios.get(`${baseURL}/api/recentView`, {
            withCredentials:true
        })
        .then((response) => {
            setResponseData(response.data);
        })
        .catch((error) => {
            console.log(`axios fetchRecentViewData error`);
        })
    }
    useEffect(() => {
        fetchRecentViewData();
    }, [])
    return (
        <>
        {responseData.length === 0 ?
            <EmptyRecentViewAreaDiv>
                <div style={{color: "#a0a0a0"}}>최근본 방이 없습니다.</div>
            </EmptyRecentViewAreaDiv>
        :
            <RecentViewAreaDiv>
                {responseData.map((data, idx) => (
                    <RecentViewElementDiv key={idx}>
                        <Link to={`../postInfoPage/${data.boardId}`} style={LinkToCardStyle}>
                        <CardPost 
                            type="룸메이트" 
                            address={data.address}
                            boardId={data.boardId}
                            commentNum={data.commentNum}
                            flat={data.flat}
                            imageUrl={data.imgUrl}
                            nickname={data.nickname}
                            profileImgUrl={data.profileImgUrl}
                            rent={data.rent}
                            roomCount={data.roomCount}
                            startDate={data.startDate}
                            />    
                        </Link>
                    </RecentViewElementDiv>    
                ))}
            </RecentViewAreaDiv>
        }
        </>
    );
}

export default RecentViewPageArea;
