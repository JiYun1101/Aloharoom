import React from "react";
import styled from "styled-components";

const MyPageContainer = styled.div`
    width: 100%;  
    text-align: center;
`;

const MyPageBox = styled.div`
    position: relative;
    /* 기준이 되는 조상 페이지 */
    margin-top: 5rem;
    /* 위 간격 */
    max-width: 500px;
    /* 좌우 간격 */
    min-height: 600px;
    max-height: 600px;
    /* min/max-height = 크기고정 */

    left: 50%;
    transform: translate(-50%, 0);
    /* 중앙고정 */

    background-color: #ffffff;
    border: 2px solid;
    border-radius: 1.8rem;
    border-color: #85afe1;
    /* 페이지 디자인 */
    display: flex;
    flex-direction: column;
`;

const MyPageNavDiv = styled.div`
    max-width: 500px;
    min-height: 70px;
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-style: none none solid none;
    border-color: #BBBBBB;
    border-width: 0.05rem;
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
        <MyPageContainer>
            <MyPageBox>
                <MyPageNavDiv>
                    <MyPageNav>내 정보</MyPageNav>
                    <MyPageNav>좋아요 목록</MyPageNav>
                    <MyPageNav>채팅</MyPageNav>
                </MyPageNavDiv>
            </MyPageBox>
        </MyPageContainer>
    );
}

export default MyPageSection;