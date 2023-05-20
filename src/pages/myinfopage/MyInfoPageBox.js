import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyPageTitle from "./myinfopagecomponents/MyInfoPageTitle";
import MyInfoPageContent from "./myinfopagecomponents/MyInfoPageContent";
import HoverHashTagButton from "../HoverHashTagButton";
import MyProfileUpdateModal from "../modal/MyProfileUpdateModal";
import axios from "axios";
import baseURL from "../api/baseURL";

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
    const [responseData, setResponseData] = useState({});
    const [myHashtags, setMyHashtags] = useState([]);
    const [myHomeHashtags, setMyHomeHashtags] = useState([]);
    const [likeHashtags, setLikeHashtags] = useState([]);
    const [likeHomeHashtags, setLikeHomeHashtags] = useState([]);
    async function fetchMyInfoData() {
        await axios.get(`${baseURL}/api/myPage`, {
            withCredentials:true
        }) 
        .then((response) => {
            console.log('response.data', response.data);
            setResponseData(response.data);
            setMyHashtags(response.data.myHashtags);
            setMyHomeHashtags(response.data.myHomeHashtags);
            setLikeHashtags(response.data.likeHashtags);
            setLikeHomeHashtags(response.data.likeHomeHashtags);
        })
        .catch((error) => {
            console.log(`axios MyInfoPage error`);
        })
    }
    const showMyProfileUpdateModal = () => {setIsMyProfileUpdateModalOpen(true);}
    const handleMyProfileUpdateModalCancel = () => {setIsMyProfileUpdateModalOpen(false);}
    useEffect(() => {
        fetchMyInfoData();
    }, []);

    useEffect(() => {
        fetchMyInfoData();
    }, [isMyProfileUpdateModalOpen, responseData]);
    return (
        <>
        {isMyProfileUpdateModalOpen ? 
            <MyProfileUpdateModal
                isMyProfileUpdateModalOpen={isMyProfileUpdateModalOpen}
                setIsMyProfileUpdateModalOpen={setIsMyProfileUpdateModalOpen}
                handelCancel={handleMyProfileUpdateModalCancel}
                fetchMyInfoData={fetchMyInfoData}
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
            <MyInfoPageContent
                responseData={responseData}
                myHashtags={myHashtags}
                myHomeHashtags={myHomeHashtags}
                likeHashtags={likeHashtags}
                likeHomeHashtags={likeHomeHashtags}
                fetchMyInfoData={fetchMyInfoData}
            />
        </MyPageBoxContainer>
        </>
    );
}

export default MyPageBox;