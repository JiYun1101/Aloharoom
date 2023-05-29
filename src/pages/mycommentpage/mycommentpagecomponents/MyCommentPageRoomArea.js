import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardPost from "../../postmappage/MapPostComponents/CardPost";
import axios from "axios";
import { Link } from 'react-router-dom';
import baseURL from "../../api/baseURL";

const EmptyMyCommentPageRoomAreaDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MyCommentPageRoomAreaDiv = styled.div`
    margin-top: 0.7vh;
    margin-left: 1.4vw;
    width: 33.3vw;
    max-height: 55vh;
    display: flex;  
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    gap: 1.1vw;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0.4rem;          /* 스크롤바의 너비 */
    }

    &::-webkit-scrollbar-thumb {
        height: 1%;             /* 스크롤바의 길이 */
        background: #bbbbbb;    /* 스크롤바의 색상 */
        border-radius: 1rem;
    }

    &::-webkit-scrollbar-track {
        background: white;      /*스크롤바 뒷 배경 색상*/
    }
`;

const MyCommentPageRoomElementDiv = styled.div`
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
const MyCommentPageRoomArea = () => {
    const [responseData, setResponseData] = useState([]);

    async function fetchMyCommentRoomInfo() {
        await axios.get(`${baseURL}/api/board/my/comment`, {
            withCredentials:true
        })
        .then((response) => { 
            setResponseData(response.data);
        })
        .catch((error) => { console.log(`axios fetchMyCommentRoomInfo error`);})
    }

    useEffect(() => {
        fetchMyCommentRoomInfo();
    }, [])
    return (
    <>
        {responseData.length === 0 ?
            <EmptyMyCommentPageRoomAreaDiv>
                <div style={{color: "#a0a0a0"}}>댓글을 작성한 방이 없습니다.</div>
            </EmptyMyCommentPageRoomAreaDiv>
        :
            <MyCommentPageRoomAreaDiv>
                {responseData.map((data, idx) => (
                    <MyCommentPageRoomElementDiv key={idx}>
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
                    </MyCommentPageRoomElementDiv>    
                ))}
            </MyCommentPageRoomAreaDiv>
        }
    </>
    );
}

export default MyCommentPageRoomArea;