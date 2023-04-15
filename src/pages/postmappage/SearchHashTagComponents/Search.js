import React from "react";
import styled from "styled-components";
import { IoSearchCircleSharp, IoFilterOutline } from "react-icons/io5";
import { useState } from "react";

const SearchContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    z-index: 1;
`;

const SearchInput = styled.input`
    width: 18%;
    height: 40%;
    border-style: solid;
    border-radius: 2rem;
    border-color: #47A5FD;
    z-index: 1;
`;

const FilterIconStyle = {
    marginRight : "2rem",
    marginLeft : "1rem",
    color: "#47A5FD"
}

const SearchIconStyle = {
    position: "absolute",
    right: "2rem",
    zIndex : "3",
    marginRight : "3rem",
    marginLeft : "1rem",
    color: "#47A5FD"
}

const Search = ({setSearchStr}) => {
    const [inputValue, setInputValue] = useState(null);
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleButtonClick = () => {
        setSearchStr(inputValue);
        setInputValue('');
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleButtonClick();
        }
    }

    return (
        <SearchContainer>
            <IoFilterOutline 
                size={30} 
                style={FilterIconStyle}
            />
            <IoSearchCircleSharp 
                size={30} 
                style={SearchIconStyle}
                onClick={handleButtonClick}
            />
            <SearchInput 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </SearchContainer>
    );
}

export default Search;