import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Title from "./Title";

const SearchTitleContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
`;

const SearchTitle = ({setSearchStr}) => {
    return (
        <SearchTitleContainer>
            <Title/>
            <Search setSearchStr={setSearchStr}/>
        </SearchTitleContainer>
    );
}

export default SearchTitle;