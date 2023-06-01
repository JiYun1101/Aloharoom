import React from "react";
import Header from "./Header";
import MyCommentPageSection from "./mycommentpage/MyCommentPageSection";
import axios from "axios";
import baseURL from "./api/baseURL";
import { useState } from "react";
import { useEffect } from "react";

const MyCommentPage = () => {
    const [myProfileData, setMyProfileData] = useState("");
    async function fetchMyInfoData() {
        await axios.get(`${baseURL}/api/myPage`, {
            withCredentials:true
        }) 
        .then((response) => {
            setMyProfileData(response.data.profileUrl);
        })
        .catch((error) => {
            console.log(`axios MyInfoPage error`);
        })
    }
    useEffect(() => {
        fetchMyInfoData();
    }, []);
    return (
    <>
        <Header
            myProfileData={myProfileData}
            setMyProfileData={setMyProfileData}
        />
        <MyCommentPageSection/>
    </>
    );
}

export default MyCommentPage;