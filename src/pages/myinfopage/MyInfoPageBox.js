import React from "react";
import styled from "styled-components";
import MyPageTitle from "./myinfopagecomponents/MyInfoPageTitle";
import MyInfoPageContent from "./myinfopagecomponents/MyInfoPageContent";

const MyPageBoxContainer = styled.div`
    position: relative;
    /* 기준이 되는 조상 페이지 */
    margin-top: 5rem;
    /* 위 간격 */
    max-width: 600px;
    /* 좌우 간격 */
    min-height: 600px;
    max-height: 700px;
    /* min/max-height = 크기고정 */
    
    left: 50%;
    transform: translate(-50%, 5%);
    /* 중앙고정 */

    background-color: #ffffff;
    border: 2px solid;
    border-radius: 1.8rem;
    border-color: #85afe1;
    /* 페이지 디자인 */
    display: flex;
    flex-direction: column;
`;


const MyPageBox = () => {
    return (
        <MyPageBoxContainer>
            <MyPageTitle title="내 정보"/>
            <MyInfoPageContent/>
        </MyPageBoxContainer>
    );
}

export default MyPageBox;