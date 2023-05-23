import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import NewPostContentWritingSection from "./NewPostContentWritingSection"; // 변경된 부분
import baseURL from "../../api/baseURL";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

const NewPostContentSection2 = ({ showAddressInfoModal, setAddressData }) => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imgFiles, setImgFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const updateID = useParams().id;
  useEffect(() => {
    if (updateID != null) {
      FetchPostInfoData();
    }
  }, []);

  async function FetchPostInfoData() {
    try {
      const response = await axios.get(
        `${baseURL}/api/communityboard/edit/${updateID}`
      );
      console.log("FetchPostInfoData: ", response.data);
      setTitle(response.data.title);
      setCode(response.data.code);
      setContents(response.data.contents);
      urlsToFileList(response.data.imgUrls);
    } catch (error) {
      console.log("FetchPostInfoData axios error", error);
    }
  }

  console.log("==============================");
  console.log("title ", title);
  console.log("contents ", contents);
  console.log("imgFiles ", imgFiles);
  console.log("code ", code);
  console.log("==============================");

  const modifyPost = () => {
    const data = {
      title: title,
      contents: contents,
      code: code,
    };

    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const formData = new FormData();
    formData.append("communityEditDto", blob); // 수정된 부분
    for (let i = 0; i < imgFiles.length; i++) {
      formData.append("imgFiles", imgFiles[i]);
    }
    axios
      .patch(`${baseURL}/api/communityboard/edit/${updateID}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        navigate(`../CommunityPage`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const PostInfoSubmit = () => {
    const data = {
      title: title,
      contents: contents,
      code: code,
    };
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const formData = new FormData();
    formData.append("communityBoardDto", blob); // 수정된 부분
    for (let i = 0; i < imgFiles.length; i++) {
      formData.append("imgFiles", imgFiles[i]);
    }
    axios
      .post(`${baseURL}/api/communityboard`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((response) => {
        navigate(`../CommunityPage`); // 수정된 부분: postMapPage로 이동
      })
      .catch((error) => {
        console.log(error);
      });
  };
  async function urlsToFileList(urls) {
    console.log("urls ", urls);
    const files = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        const fileName = url.substring(url.lastIndexOf("/") + 1);
        return new File([blob], fileName, { type: blob.type });
      })
    );
    console.log("files ", files);
    setImgFiles(files);
    setPreviewImages(urls);
  }

  return (
    <NewPostContentDiv>
      <NewPostContentWritingContainer2>
        <NewPostContentWritingSection
          setTitle={setTitle}
          contents={contents}
          setCode={setCode}
          imgFiles={imgFiles}
          previewImages={previewImages}
          setContents={setContents}
          setImgFiles={setImgFiles}
          setPreviewImages={setPreviewImages}
          PostInfoSubmit={PostInfoSubmit}
          modifyPost={modifyPost}
        />
      </NewPostContentWritingContainer2>
      {/* <PostCodeSection handleSubmit={PostInfoSubmit} setCode={setCode} /> */}
    </NewPostContentDiv>
  );
};

export default NewPostContentSection2;
