import React from "react";
import styled from "styled-components";
import Search from "./SearchHashTagComponents/Search";
import HashTagTitle from "./SearchHashTagComponents/HashTagTitle";

const SearchHashTagContainer = styled.div`
    position: absolute;
    top: 0.1rem;
    width: 99.5%;
    height: 20%;
    display: flex;
    flex-direction: column;
`;

const SearchHashTag = ({setSearchStr}) => {
    return (
        <SearchHashTagContainer>
            <Search setSearchStr={setSearchStr}/>
            <HashTagTitle/>
        </SearchHashTagContainer>
    );
}

export default SearchHashTag;
