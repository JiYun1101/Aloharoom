import React, { useEffect, useState } from "react";
import Header from "../Header";
import PostContent from "./PostContent";
import axios from "axios";
import baseURL from "../api/baseURL";

const PostPage = () => {
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
      <PostContent />
    </>
  );
};

export default PostPage;
