import React, { useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import PostMapContent from "./postmappage/PostMapContent";

const PostMapPage = () => {
  //전체 게시물 데이터 받아오기
  async function fetchViewPostData() {
    await axios
      .get("http://localhost:8080/api/board")
      .then((response) => {
        console.log("response.data : ", response.data);
      })
      .catch((error) => {
        console.log("axios error");
      });
  }

  //한번 렌더링 될때 데이터를 받아온다.
  useEffect(() => {
    fetchViewPostData();
  }, []);

  return (
    <>
      <Header />
      <PostMapContent />
    </>
  );
};

export default PostMapPage;
