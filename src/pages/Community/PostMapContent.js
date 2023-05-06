import React, { useState } from "react";
// import SearchHashTag from "./SearchHashTag";

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

const LinkToStyle = {
  textDecoration: "none",
  color: "inherit",
};

const NewPostIconStyle = {
  position: "absolute",
  right: "2rem",
  bottom: "0.001rem",
  zIndex: "2",
  color: "#bbbbbb",
};

const PostMapContent = () => {
  //여기에 검색에 대한 상태 변수를 지정
  const [searchStr, setSearchStr] = useState(null);

  return (
    <PostMapContentContainer>
      {/* <SearchHashTag setSearchStr={setSearchStr} /> */}
      <MapPost searchStr={searchStr} />
      <Link to="/newCommunityPostPage" style={LinkToStyle}>
        <AiOutlinePlusCircle size={50} style={NewPostIconStyle} />
      </Link>
    </PostMapContentContainer>
  );
};

export default PostMapContent;
