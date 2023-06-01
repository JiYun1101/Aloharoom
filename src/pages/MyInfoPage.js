import React from "react";
import Header from "./Header";
import MyInfoPageSection from "./myinfopage/MyInfoPageSection";
import { useState } from "react";
import axios from "axios";
import baseURL from "./api/baseURL";
import { useEffect } from "react";

const MyInfoPage = () => {
    const [isMyProfileUpdateModalOpen, setIsMyProfileUpdateModalOpen] = useState(false);
    const [responseData, setResponseData] = useState({});
    const [myHashtags, setMyHashtags] = useState([]);
    const [myHomeHashtags, setMyHomeHashtags] = useState([]);
    const [likeHashtags, setLikeHashtags] = useState([]);
    const [likeHomeHashtags, setLikeHomeHashtags] = useState([]);
    const [myProfileData, setMyProfileData] = useState("");
    async function fetchMyInfoData() {
        await axios.get(`${baseURL}/api/myPage`, {
            withCredentials:true
        }) 
        .then((response) => {
            setResponseData(response.data);
            setMyHashtags(response.data.myHashtags);
            setMyHomeHashtags(response.data.myHomeHashtags);
            setLikeHashtags(response.data.likeHashtags);
            setLikeHomeHashtags(response.data.likeHomeHashtags);
            setMyProfileData(response.data.profileUrl);
        })
        .catch((error) => {
            console.log(`axios MyInfoPage error`);
        })
    }
    useEffect(() => {
        fetchMyInfoData();
    }, []);
    useEffect(() => {
        fetchMyInfoData();
        console.log('모달이 닫혔을때, 열렸을때');
    }, [isMyProfileUpdateModalOpen]);
    return (
        <>
            <Header 
                myProfileData={myProfileData}
                setMyProfileData={setMyProfileData}
            />
            <MyInfoPageSection
                isMyProfileUpdateModalOpen={isMyProfileUpdateModalOpen}
                setIsMyProfileUpdateModalOpen={setIsMyProfileUpdateModalOpen}
                responseData={responseData}
                myHashtags={myHashtags}
                myHomeHashtags={myHomeHashtags}
                likeHashtags={likeHashtags}
                likeHomeHashtags={likeHomeHashtags}
                fetchMyInfoData={fetchMyInfoData}
            />
        </>
    );
}

export default MyInfoPage;