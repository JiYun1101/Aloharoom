import React from "react";
import styled from "styled-components";

const MyPageDiv = styled.div`
    //position: relative;
    width: 99.5%;
    height: 50rem;
    border-color: green;
    border-style: solid;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
`;

const MyPageBox = styled.div`
    border-radius: 0.6rem;
    border-color: #47A5FD;
    border-style: solid;
    width: 35rem;
    height: 35rem;
    display: flex;
    flex-direction: column;
`;

const MyPageNavDiv = styled.div`
    border-color: blue;
    border-style: solid;
    width: 99%;
    height: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const MyPageNav = styled.div`
    &:hover {
        text-decoration: underline;
        text-decoration-color: #47A5FD;
        text-decoration-thickness: 0.15rem;
        text-underline-offset: 0.6rem;
    }
`;




const MyPageSection = () => {
    return (
        <MyPageDiv>
            <MyPageBox>
                <MyPageNavDiv>
                    <MyPageNav>내 정보</MyPageNav>
                    <MyPageNav>좋아요 목록</MyPageNav>
                    <MyPageNav>채팅</MyPageNav>
                </MyPageNavDiv>
            </MyPageBox>
        </MyPageDiv>
    );
}

export default MyPageSection;