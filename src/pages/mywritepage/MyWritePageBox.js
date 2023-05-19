import React from "react";
import styled from "styled-components";
import MyWritePageTitle from "./mywritepagecomponents/MyWritePageTitle";
import MyWritePageContent from "./mywritepagecomponents/MyWritePageContent";
import { useState } from "react";

const MyWritePageContainer = styled.div`
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


const MyWritePageBox = () => {
    const [roomClick, setRoomClick] = useState(true);
    const [communityClick, setCommunityClick] = useState(false);
    const roomClicked = () => {
        setRoomClick(true)
        setCommunityClick(false);
    }
    const communityClicked = () => {
        setCommunityClick(true);
        setRoomClick(false);
    }
    return (
        <MyWritePageContainer>
            <MyWritePageTitle
                roomClicked={roomClicked}
                communityClicked={communityClicked}
            />
            <MyWritePageContent
                roomClick={roomClick}
                communityClick={communityClick}
            />
        </MyWritePageContainer>
    );
}

export default MyWritePageBox;