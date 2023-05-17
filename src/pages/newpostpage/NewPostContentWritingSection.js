import React from "react";
import styled from "styled-components";
import PostContentSection from "./newpostcontentwritingcomponents/PostContentSection";
import ImageUploadSection from "./newpostcontentwritingcomponents/ImageUploadSection";
import ImageSwiperSection from "./newpostcontentwritingcomponents/ImageSwiperSection";
import PostButtonSection from "./newpostcontentwritingcomponents/PostButtonSection";

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
    width: 100%;
    height: 50%;
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
                <ImageUploadSection handleImageFilesInputChange={handleImageFilesInputChange}/>
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
}

export default NewPostContentWritingSection;