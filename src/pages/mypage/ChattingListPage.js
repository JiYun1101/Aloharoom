import React from "react";
import styled from "styled-components";

const ChattingListDiv = styled.div`
    margin-top: 1.5rem;
    margin-left: 0.5rem;
    width: 490px;
    max-height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 0.4rem;          /* 스크롤바의 너비 */
    }

    &::-webkit-scrollbar-thumb {
        height: 1%;             /* 스크롤바의 길이 */
        background: #BBBBBB;    /* 스크롤바의 색상 */
        border-radius: 1rem;
    }

    &::-webkit-scrollbar-track {
        background: white;      /*스크롤바 뒷 배경 색상*/
    }
`;

const ChattingElement = styled.div`
    width: 480px;
    min-height: 100px;
    display: flex;
    flex-direction: row;
    border-style: none none solid none;
    border-color: #BBBBBB;
    border-width: 0.05rem;
`;

const ChattingProfileDiv = styled.div`
    width: 100px;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ChattingProfileImg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 70%;
`;

const ChattingInfoDiv = styled.div`
    width: 360px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
`;

const ChattingNickNameDiv = styled.div`
    width: 350px;
    min-height: 45px;
`;

const ChattingNickNameSpan = styled.span`
    //ChattingNickNameDiv의 height 값과 동일해야함
    line-height: 45px;
    margin-left: 1rem;
    font-weight: 700;
`;


const ChattingContentDiv = styled.div`
    width: 350px;
    min-height: 45px;
`;

const ChattingContentSpan = styled.span`
    //ChattingContentDiv의 height 값과 동일해야함
    line-height: 45px;
    margin-left: 1rem;
`;
const ChattingListPage = () => {
    return (
    <>
        <ChattingListDiv>    
            <ChattingElement>
                <ChattingProfileDiv>
                    <ChattingProfileImg src="blue.png"/>
                </ChattingProfileDiv>
                <ChattingInfoDiv>
                    <ChattingNickNameDiv>
                        <ChattingNickNameSpan>gretea5</ChattingNickNameSpan>
                    </ChattingNickNameDiv>
                    <ChattingContentDiv>
                        <ChattingContentSpan>안녕하십니까 저는 한성대학교 4학년........</ChattingContentSpan>
                    </ChattingContentDiv>
                </ChattingInfoDiv>
            </ChattingElement>
            <ChattingElement>
                <ChattingProfileDiv>
                    <ChattingProfileImg src="blue.png"/>
                </ChattingProfileDiv>
                <ChattingInfoDiv>
                    <ChattingNickNameDiv>
                        <ChattingNickNameSpan>gretea5</ChattingNickNameSpan>
                    </ChattingNickNameDiv>
                    <ChattingContentDiv>
                        <ChattingContentSpan>안녕하십니까 저는 한성대학교 4학년........</ChattingContentSpan>
                    </ChattingContentDiv>
                </ChattingInfoDiv>
            </ChattingElement>
            <ChattingElement>
                <ChattingProfileDiv>
                    <ChattingProfileImg src="blue.png"/>
                </ChattingProfileDiv>
                <ChattingInfoDiv>
                    <ChattingNickNameDiv>
                        <ChattingNickNameSpan>gretea5</ChattingNickNameSpan>
                    </ChattingNickNameDiv>
                    <ChattingContentDiv>
                        <ChattingContentSpan>안녕하십니까 저는 한성대학교 4학년........</ChattingContentSpan>
                    </ChattingContentDiv>
                </ChattingInfoDiv>
            </ChattingElement>
            <ChattingElement>
                <ChattingProfileDiv>
                    <ChattingProfileImg src="blue.png"/>
                </ChattingProfileDiv>
                <ChattingInfoDiv>
                    <ChattingNickNameDiv>
                        <ChattingNickNameSpan>gretea5</ChattingNickNameSpan>
                    </ChattingNickNameDiv>
                    <ChattingContentDiv>
                        <ChattingContentSpan>안녕하십니까 저는 한성대학교 4학년........</ChattingContentSpan>
                    </ChattingContentDiv>
                </ChattingInfoDiv>
            </ChattingElement>
            <ChattingElement>
                <ChattingProfileDiv>
                    <ChattingProfileImg src="blue.png"/>
                </ChattingProfileDiv>
                <ChattingInfoDiv>
                    <ChattingNickNameDiv>
                        <ChattingNickNameSpan>gretea5</ChattingNickNameSpan>
                    </ChattingNickNameDiv>
                    <ChattingContentDiv>
                        <ChattingContentSpan>안녕하십니까 저는 한성대학교 4학년........</ChattingContentSpan>
                    </ChattingContentDiv>
                </ChattingInfoDiv>
            </ChattingElement>
            <ChattingElement>
                <ChattingProfileDiv>
                    <ChattingProfileImg src="blue.png"/>
                </ChattingProfileDiv>
                <ChattingInfoDiv>
                    <ChattingNickNameDiv>
                        <ChattingNickNameSpan>gretea5</ChattingNickNameSpan>
                    </ChattingNickNameDiv>
                    <ChattingContentDiv>
                        <ChattingContentSpan>안녕하십니까 저는 한성대학교 4학년........</ChattingContentSpan>
                    </ChattingContentDiv>
                </ChattingInfoDiv>
            </ChattingElement>
        </ChattingListDiv>    
    </>
    );
}

export default ChattingListPage;