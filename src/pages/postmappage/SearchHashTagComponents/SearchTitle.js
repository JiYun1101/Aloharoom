import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Title from "./Title";

const SearchTitleContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
`;

const SearchTitle = ({
    cardPostData,
    setSearchStr,
    setCardPostData
}) => {
    return (
        <SearchTitleContainer>
            <Title/>
            <Search 
                cardPostData={cardPostData}
                setSearchStr={setSearchStr}
                setCardPostData={setCardPostData}
            />
        </SearchTitleContainer>
    );
}

export default SearchTitle;