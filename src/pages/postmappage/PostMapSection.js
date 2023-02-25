import React from "react";
import styled from "styled-components";
import { Tag, HStack } from '@chakra-ui/react';
import { IoSearchCircleSharp, IoFilterOutline } from "react-icons/io5";

const PostMapBox = styled.div`
    position: relative;
    width: 100%;
    height: 50rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const SearchHashTagBox = styled.div`
    position: absolute;
    top: 0.1rem;
    width: 99.5%;
    height: 20%;
    border-color: green;
    border-style: solid;
    display: flex;
    flex-direction: column;
`;

const SearchBox = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    border-color: yellow;
    border-style: solid;
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
    border-color: brown;
    border-style: solid;
    display: flex;
`;

const TitleSection = styled.div`
    width: 50%;
    border-color: brown;
    border-style: solid;
    display: flex;
    align-items: center;
`;

const HashSection = styled.div`
    width: 50%;
    border-color: brown;
    border-style: solid;
    display: flex;
    flex-direction: row-reverse;
    align-content: center;
`;

const TitleSpan = styled.span`
    margin-left: 1rem;
    font-weight: 700;
    font-size: 1.7rem;
`;


const MapPostBox = styled.div`
    position: absolute;
    top: 10.1rem;
    width: 99.5%;
    height: 82%;
    border-color: blue;
    border-style: solid;
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

const PostMapSection = () => {
    return (
        <PostMapBox>            
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
                        <HStack>
                            <Tag colorScheme={'blue'}>#해시태그1</Tag>
                            <Tag colorScheme='blue'>#해시태그1</Tag>
                            <Tag colorScheme='blue'>#해시태그1</Tag>
                            <Tag colorScheme='blue'>#해시태그1</Tag>
                            <Tag colorScheme='blue'>#해시태그1</Tag>
                        </HStack>
                    </HashSection>
                </HashTagBox>
            </SearchHashTagBox>
            <MapPostBox>
            </MapPostBox>
        </PostMapBox>
    );
}

export default PostMapSection;