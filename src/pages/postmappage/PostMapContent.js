import React from "react";
import SearchHashTag from "./SearchHashTag";

import styled from "styled-components";
import MapPost from "./MapPost";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const PostMapContentContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const newPostIconStyle = {
    position: "absolute",
    right: "2rem",
    bottom: "0.001rem",
    zIndex: "2",
    color: "#47a5fd"
};

const LinkToStyle = {
    textDecoration: "none",
    color: "inherit",
};

const PostMapContent = () => {
    return (
        <PostMapContentContainer>            
            <SearchHashTag/>
            <MapPost/>
            <Link to="/newPostPage" style={LinkToStyle}>
                <AiOutlinePlusCircle size={50} style={newPostIconStyle}/>
            </Link>
        </PostMapContentContainer>
    );
}

export default PostMapContent;