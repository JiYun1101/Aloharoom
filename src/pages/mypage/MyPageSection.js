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
`;

const MyPageSection = () => {
    return (
        <MyPageContainer>
            <MyPageBox/>
        </MyPageContainer>
    );
}

export default MyPageSection;