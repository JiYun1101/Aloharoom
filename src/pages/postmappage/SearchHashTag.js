import React from "react";
import styled from "styled-components";
import { Tag, HStack } from '@chakra-ui/react';
import { IoSearchCircleSharp, IoFilterOutline } from "react-icons/io5";

const SearchHashTagBox = styled.div`
    position: absolute;
    top: 0.1rem;
    width: 99.5%;
    height: 20%;
    display: flex;
    flex-direction: column;
`;

const SearchBox = styled.div`
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

const HashTagBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
`;

const TitleSection = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`;

const HashSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row-reverse;
    align-content: center;
`;

const TitleSpan = styled.span`
    margin-left: 1rem;
    font-weight: 700;
    font-size: 1.7rem;
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

const TagTotalStyle = {
    marginRight : "2rem",
    fontWeight : "800"
}

const SearchHashTag = () => {
    return (
        <SearchHashTagBox>
            <SearchBox>
                <IoFilterOutline size={30} style={FilterIconStyle}/>
                <IoSearchCircleSharp size={30} style={SearchIconStyle}/>
                <SearchInput type="text"/>
            </SearchBox>
            <HashTagBox>
                <TitleSection>
                    <TitleSpan>지도에서 위치 찾기</TitleSpan>
                </TitleSection>
                <HashSection>
                    <HStack
                        spacing={25} 
                        style={TagTotalStyle}>
                        <Tag>#해시태그1</Tag>
                        <Tag>#해시태그2</Tag>
                        <Tag>#해시태그3</Tag>
                        <Tag>#해시태그4</Tag>
                        <Tag>#해시태그5</Tag>
                    </HStack>
                </HashSection>
            </HashTagBox>
        </SearchHashTagBox>
    );
}

export default SearchHashTag;