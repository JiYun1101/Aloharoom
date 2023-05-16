import React, { useState } from "react";
import styled from "styled-components";
import PostTitleSection from "../newpostpage/newpostcontentwritingcomponents/PostTitleSection";
import PostContentSection from "../newpostpage/newpostcontentwritingcomponents/PostContentSection";
import ImageUploadSection from "../newpostpage/newpostcontentwritingcomponents/ImageUploadSection";
import ImageSwiperSection from "../newpostpage/newpostcontentwritingcomponents/ImageSwiperSection";
import PostButtonSection from "../newpostpage/newpostcontentwritingcomponents/PostButtonSection";
import PostCodeSection from "../newpostpage/newpostcontentwritingcomponents/PostCodeSection";

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

const NewPostContentWritingSection2 = ({
  setTitle,
  imgFiles,
  setContents,
  setCode,
  setImgFiles,
  PostInfoSubmit,
}) => {
  const [previewImages, setPreviewImages] = useState([]);

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
      <PostCodeSection setCode={setCode} />
      <NewPostContentWritingArea>
        <PostTitleSection setTitle={setTitle} />
        <PostContentSection setContents={setContents} />
      </NewPostContentWritingArea>
      <NewPostContentImageArea>
        <ImageUploadSection
          handleImageFilesInputChange={handleImageFilesInputChange}
        />
        <ImageSwiperSection previewImages={previewImages} />
        <PostButtonSection PostInfoSubmit={PostInfoSubmit} />
      </NewPostContentImageArea>
    </NewPostContentWritingDiv>
  );
};

export default NewPostContentWritingSection2;
