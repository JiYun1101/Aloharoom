import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NewPostContentWritingSection2 from "./NewPostContentWritingSection2";
// import PostCodeSection from "../newpostpage/newpostcontentwritingcomponents/PostCodeSection";

const NewPostContentDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const NewPostContentWritingContainer2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewCommunityPostContentSection2 = () => {
  // const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imgFiles, setImgFiles] = useState([]);
  const [code, setCode] = useState("");

  console.log("==============================");
  console.log("title ", title);
  console.log("contents ", contents);
  console.log("imgFiles ", imgFiles);
  console.log("code ", code);
  console.log("==============================");

  const PostInfoSubmit = () => {
    const data = {
      title: title,
      contents: contents,
      code: code,
    };

    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const formData = new FormData();
    formData.append("communityBoardDto", blob);
    for (let i = 0; i < imgFiles.length; i++) {
      formData.append("imgFiles", imgFiles[i]);
    }
    axios
      .post("http://localhost:8080/api/communityboard", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("HTTP Status: 200");
        } else {
          console.log("HTTP Status: ", response.status);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <NewPostContentDiv>
      <NewPostContentWritingContainer2>
        <NewPostContentWritingSection2
          setTitle={setTitle}
          setContents={setContents}
          setImgFiles={setImgFiles}
          setCode={setCode}
          PostInfoSubmit={PostInfoSubmit}
        />
      </NewPostContentWritingContainer2>
      {/* <PostCodeSection handleSubmit={PostInfoSubmit} setCode={setCode} /> */}
    </NewPostContentDiv>
  );
};

export default NewCommunityPostContentSection2;
