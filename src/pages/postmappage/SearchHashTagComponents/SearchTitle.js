import React from "react";
import styled from "styled-components";
import SearchSection from "./SearchSection";
import Title from "./Title";

const SearchTitleContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
`;

const SearchTitle = ({
    setSearchStr,
    fetchCardPostData,
    fetchFilterCardPostData
}) => {
    return (
        <SearchTitleContainer>
            <Title/>
            <SearchSection 
                setSearchStr={setSearchStr}
                fetchCardPostData={fetchCardPostData}
                fetchFilterCardPostData={fetchFilterCardPostData}

            />
        </SearchTitleContainer>
    );
}

export default SearchTitle;