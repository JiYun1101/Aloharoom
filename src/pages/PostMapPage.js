import React from "react";
import Header from "./Header";
import PostMapContent from "./postmappage/PostMapContent";
import { useState } from "react";
import axios from "axios";
import baseURL from "./api/baseURL";
import { useEffect } from "react";

const PostMapPage = () => {
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
      <PostMapContent />
    </>
  );
};

export default PostMapPage;
