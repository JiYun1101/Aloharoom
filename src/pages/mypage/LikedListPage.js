import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import CardPost from "../postmappage/MapPostComponents/CardPost";
import axios from "axios";
import { Link } from 'react-router-dom';

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

const LinkToCardStyle = {
    textDecoration: 'none',
    color: 'black'
}

const LikedListPage = () => {
    const [responseData, setResponseData] = useState([]);
    async function fetchLikePost() {
        await axios.get(`http://localhost:8080/api/heart`, {
            withCredentials:true
        })
        .then((response) => {
            console.log('response.data: ', response.data);
            setResponseData(response.data);
        })
        .catch((error) => {
            console.log('fetchLikePost fetch error');
        })
    }

    useEffect(() => {
        fetchLikePost();
    }, []);

    return (
        <LikedListDiv>
            {responseData.map((data, idx) => (
                <LikedElementDiv key={idx}>
                    <Link to={`../postInfoPage/${data.boardId}`} style={LinkToCardStyle}>
                    <CardPost 
                        type="룸메이트" 
                        address={data.address}
                        boardId={data.boardId}
                        commentNum={data.commentNum}
                        flat={data.flat}
                        imageUrls={data.imgUrl}
                        nickname={data.nickname}
                        profileImgUrl={data.profileImgUrl}
                        rent={data.rent}
                        roomCount={data.roomCount}
                        startDate={data.startDate}
                        />    
                    </Link>
                    <AiFillHeart size={40} style={heartStyle}/>
                </LikedElementDiv>    
            ))}
        </LikedListDiv>
    );
}

export default LikedListPage;