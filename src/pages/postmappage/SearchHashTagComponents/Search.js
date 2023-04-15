import React from "react";
import styled from "styled-components";
import { IoSearchCircleSharp, IoFilterOutline } from "react-icons/io5";

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

    const onChangeSearchStr = (e) => {
        console.log('onChangeSearchStr doing');
        setSearchStr(e.target.value);
    }
    
    return (
        <SearchContainer>
            <IoFilterOutline size={30} style={FilterIconStyle}/>
            <IoSearchCircleSharp size={30} style={SearchIconStyle}/>
            <SearchInput type="text" onKeyUp={onChangeSearchStr}/>
        </SearchContainer>
    );
}

export default Search;