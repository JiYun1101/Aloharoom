import React, { useEffect, useState } from "react";
import styled from "styled-components";
import KakaoMapPart from "./KakaoMapPart";
import Post from "./Post";
import axios from "axios";

const MapPostContainer = styled.div`
  position: absolute;
  top: 10.1rem;
  width: 99.5%;
  height: 82%;
  display: flex;
`;

const MapPost = ({ clickedCommunityId, setClickedCommunityId }) => {
  const [cardPostData, setCardPostData] = useState([]);

  async function fetchCardPostData(id) {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/communityboard?clickedCommunityId=${clickedCommunityId}`
      );
      setCardPostData(response.data);
      // console.log("cardPostData => response.data : ", response.data.clickedCommunityId);
      console.log("cardPostData => response.data : ", response.data);
    } catch (error) {
      console.log("axios error");
    }
  }

  function handleClickPost(post) {
    setClickedCommunityId(post.clickedCommunityId);
  }

  useEffect(() => {
    async function fetchData() {
      await fetchCardPostData(clickedCommunityId);
    }
    fetchData();
  }, [clickedCommunityId]);

  return (
    <MapPostContainer>
      {/* <KakaoMapPart searchStr={searchStr} cardPostData={cardPostData} /> */}
      <Post
        clickedCommunityId={clickedCommunityId}
        cardPostData={cardPostData}
        handleClickPost={handleClickPost}
      />
    </MapPostContainer>
  );
};

export default MapPost;
