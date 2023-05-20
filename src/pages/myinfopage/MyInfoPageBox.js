import React, { useState } from "react";
import styled from "styled-components";
import MyPageTitle from "./myinfopagecomponents/MyInfoPageTitle";
import MyInfoPageContent from "./myinfopagecomponents/MyInfoPageContent";
import HoverHashTagButton from "../HoverHashTagButton";
import MyProfileUpdateModal from "../modal/MyProfileUpdateModal";

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
    const [isMyProfileUpdateModalOpen, setIsMyProfileUpdateModalOpen] = useState(false);
    const showMyProfileUpdateModal = () => {setIsMyProfileUpdateModalOpen(true);}
    const handleMyProfileUpdateModalCancel = () => {setIsMyProfileUpdateModalOpen(false);}
    const handleMyProfileUpdateModalOk = () => { setIsMyProfileUpdateModalOpen(false); }
    return (
        <>
        {isMyProfileUpdateModalOpen ? 
            <MyProfileUpdateModal
                isMyProfileUpdateModalOpen={isMyProfileUpdateModalOpen}
                handleOk={handleMyProfileUpdateModalOk}
                handelCancel={handleMyProfileUpdateModalCancel}
            />
        :
            <></>
        }
        <MyPageBoxContainer>
            <HoverHashTagButton 
                onClick={() => {
                    showMyProfileUpdateModal();
                }}
                style={{ position: "absolute", top:"1rem", right: "1rem"}}
            >
                내 정보 수정
            </HoverHashTagButton>
            <MyPageTitle title="내 정보"/>
            <MyInfoPageContent/>
        </MyPageBoxContainer>
        </>
    );
}

export default MyPageBox;