import React from "react";
import styled from "styled-components";
import EmptyBox from "./SearchHashTagComponents/EmptyBox";
import SearchTitle from "./SearchHashTagComponents/SearchTitle";

const SearchHashTagContainer = styled.div`
    position: absolute;
    top: 0.1rem;
    width: 99.5%;
    height: 20%;
    display: flex;
    flex-direction: column;
`;

const SearchHashTag = ({ 
  setSearchStr,
  fetchCardPostData,
  fetchFilterCardPostData
}) => {
  return (
    <SearchHashTagContainer>
      <EmptyBox/>
      <SearchTitle 
        setSearchStr={setSearchStr}
        fetchCardPostData={fetchCardPostData}
        fetchFilterCardPostData={fetchFilterCardPostData}
      />
    </SearchHashTagContainer>
  );
};

export default SearchHashTag;
