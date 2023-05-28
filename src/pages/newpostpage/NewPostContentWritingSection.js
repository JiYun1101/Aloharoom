import React from "react";
import styled from "styled-components";
import PostContentSection from "./newpostcontentwritingcomponents/PostContentSection";
import ImageUploadSection from "./newpostcontentwritingcomponents/ImageUploadSection";
import ImageSwiperSection from "./newpostcontentwritingcomponents/ImageSwiperSection";
import PostButtonSection from "./newpostcontentwritingcomponents/PostButtonSection";
import { useState } from "react";

const NewPostContentWritingDiv = styled.div`
    width: 80%;
    height: 89vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NewPostContentWritingArea = styled.div`
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 1rem;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NewPostContentImageArea = styled.div`
    margin-top: 2%;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 1rem;
    width: 100%;
    height: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NewPostContentWritingSection = ({
    contents,
    imgFiles,
    previewImages,
    setContents,
    setImgFiles,
    setPreviewImages,
    PostInfoSubmit,
    modifyPost
}) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    const removeElementByIndex = (index) => {
        const newPreviewImages = [...previewImages];
        const newImgFiles = [...imgFiles]
        newPreviewImages.splice(index, 1);
        newImgFiles.splice(index, 1);
        setPreviewImages(newPreviewImages);
        setImgFiles(newImgFiles);
    };

    const handleImageFilesInputChange = (e) => {
        const files = e.target.files;
        setImgFiles([...imgFiles, ...files]);
        console.log('imgFiles ', imgFiles);
        const images = [];
        for(let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onload = () => {
                images.push(reader.result);
                if (images.length === files.length) {
                    setPreviewImages([...previewImages, ...images]);
                }
            };
            reader.readAsDataURL(files[i]);
        }
    };

    return (
        <NewPostContentWritingDiv>
            <NewPostContentWritingArea>
                <PostContentSection 
                    contents={contents}
                    setContents={setContents}
                />
            </NewPostContentWritingArea>
            <NewPostContentImageArea>
                <ImageUploadSection 
                    handleImageFilesInputChange={handleImageFilesInputChange}
                    selectedImage={selectedImage}
                    removeElementByIndex={removeElementByIndex}
                />
                <ImageSwiperSection 
                    imgFiles={imgFiles}
                    previewImages={previewImages}
                    selectedImage={selectedImage}
                    handleImageClick={handleImageClick}
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
}

export default NewPostContentWritingSection;