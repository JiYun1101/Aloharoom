import React, { useState } from "react";
import styled from "styled-components";
import PostTitleSection from "../newpostpage2/newpostcontentwritingcomponents/PostTitleSection";
import PostContentSection from "../newpostpage2/newpostcontentwritingcomponents/PostContentSection";
import ImageUploadSection from "../newpostpage2/newpostcontentwritingcomponents/ImageUploadSection";
import ImageSwiperSection from "../newpostpage2/newpostcontentwritingcomponents/ImageSwiperSection";
import PostButtonSection from "../newpostpage2/newpostcontentwritingcomponents/PostButtonSection";
import PostCodeSection from "../newpostpage2/newpostcontentwritingcomponents/PostCodeSection";
import { useParams } from "react-router-dom";

const NewPostContentWritingDiv = styled.div`
  margin-top: -1rem;
  width: 80%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NewPostContentWritingArea = styled.div`
  margin-top: 1rem;
  border-style: solid;
  border-color: #bbbbbb;
  border-radius: 1rem;
  width: 100%;
  height: 68%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewPostContentImageArea = styled.div`
  width: 100%;
  height: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RoomTypeDiv = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RoomTypeButton = styled.button`
  background-color: white;
  width: 4.5rem;
  height: 1.5rem;
  color: #47a5fd;
  font-weight: 500;
  font-size: 0.8rem;
  border: 2px solid #47a5fd;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const NewPostContentWritingSection = ({
  title,
  code,
  setTitle,
  contents,
  setCode,
  imgFiles,
  previewImages,
  setContents,
  setImgFiles,
  setPreviewImages,
  PostInfoSubmit,
  modifyPost,
}) => {
  const Id = useParams().id;
  const IdExist = Id != null;
  console.log("이거", title);
  const handleImageFilesInputChange = (e) => {
    const files = e.target.files;
    setImgFiles((prevImgFiles) => [...prevImgFiles, ...files]);
    console.log("imgFiles ", imgFiles);
    const images = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = () => {
        images.push(reader.result);
        if (images.length === files.length) {
          setPreviewImages((prevPreviewImages) => [
            ...prevPreviewImages,
            ...images,
          ]);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <NewPostContentWritingDiv>
      {IdExist ? (
        <RoomTypeButton>
          {code === 1
            ? "방자랑"
            : code === 2
            ? "정보공유"
            : code === 3
            ? "자유"
            : ""}
        </RoomTypeButton>
      ) : (
        <PostCodeSection code={code} setCode={setCode} />
      )}
      <NewPostContentWritingArea>
        <PostTitleSection title={title} setTitle={setTitle} />
        <PostContentSection contents={contents} setContents={setContents} />
      </NewPostContentWritingArea>
      <NewPostContentImageArea>
        <ImageUploadSection
          handleImageFilesInputChange={handleImageFilesInputChange}
        />
        <ImageSwiperSection
          imgFiles={imgFiles}
          previewImages={previewImages}
          setImgFiles={setImgFiles}
          setPreviewImages={setPreviewImages}
        />
        <PostButtonSection
          PostInfoSubmit={PostInfoSubmit}
          modifyPost={modifyPost}
        />
      </NewPostContentImageArea>
    </NewPostContentWritingDiv>
  );
};

export default NewPostContentWritingSection;
