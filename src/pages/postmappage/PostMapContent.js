import React, { useEffect, useState } from "react";
import SearchHashTag from "./SearchHashTag";

import styled from "styled-components";
import MapPost from "./MapPost";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const PostMapContentContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const LinkToStyle = {
    textDecoration: "none",
    color: "inherit",
};

const NewPostIconStyle = {
    position: "absolute",
    right: "2rem",
    bottom: "0.001rem",
    zIndex: "2",
    color: '#bbbbbb'
};

const PostMapContent = () => {
    //전체 게시물 데이터 받아오기
    async function fetchViewPostData() {
        await axios
        .get("http://localhost:8080/api/board")
        .then((response) => {
            console.log("ViewPostData => response.data : ", response.data);
        })
        .catch((error) => {
            console.log("axios error");
        });
    }

    //한번 렌더링 될때 데이터를 받아온다.
    useEffect(() => {
        fetchViewPostData();
    }, []);

    //여기에 검색에 대한 상태 변수를 지정
    const [searchStr, setSearchStr] = useState(null);
    return (
        <PostMapContentContainer>            
            <SearchHashTag setSearchStr={setSearchStr}/>
            <MapPost searchStr={searchStr}/>
            <Link to="/newPostPage" style={LinkToStyle}> 
                <AiOutlinePlusCircle size={50} style={NewPostIconStyle} />
            </Link>
        </PostMapContentContainer>
    );
}

export default PostMapContent;
