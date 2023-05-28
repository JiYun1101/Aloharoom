import React from "react";
import styled from "styled-components";
import LikeListPageTitle from "./likelistpagecomponents/LikeListPageTitle";
import LikeListPageContent from "./likelistpagecomponents/LikeListPageContent";

const LikeListPageBoxContainer = styled.div`
    position: relative;
    /* 기준이 되는 조상 페이지 */
    margin-top: 9vh;
    /* 위 간격 */
    max-width: 35vw;
    /* 좌우 간격 */
    height: 65vh;
    /* min/max-height = 크기고정 */
    
    left: 50%;
    transform: translate(-50%, 5%);
    /* 중앙고정 */

    background-color: #ffffff;
    border: 2px solid;
    border-radius: 1.8rem;
    border-color: #47A5FD;
    /* 페이지 디자인 */
    display: flex;
    flex-direction: column;
`;

const LikeListPageBox = () => {
    return (
    <LikeListPageBoxContainer>
        <LikeListPageTitle title="좋아요 목록"/>
        <LikeListPageContent/>
    </LikeListPageBoxContainer>
    );
}

export default LikeListPageBox;