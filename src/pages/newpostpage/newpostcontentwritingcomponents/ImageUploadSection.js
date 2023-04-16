import React from 'react'
import styled from 'styled-components'
import { BiImageAdd } from "react-icons/bi";

const ImageUploadDiv = styled.div`
    margin-top: 1rem;
    width: 90%;
    height: 3rem;
`;

const ImageUploadLabel = styled.label`
    color: #47a5fd;
    font-size: 1.3rem;
    cursor: pointer;
`;

const ImageUploadInput = styled.input`
    display: none;
`;

const ImageUploadSection = ({ handleImageFilesInputChange }) => {
    return (
        <ImageUploadDiv>
            <ImageUploadLabel htmlFor="imageUpload">이미지 업로드 <BiImageAdd size={25} htmlFor="imageUpload"/></ImageUploadLabel>
                <ImageUploadInput
                    type="file"
                    accept="image/*"
                    id="imageUpload"
                    multiple
                    onChange={handleImageFilesInputChange}
                />
        </ImageUploadDiv>
    );
}

export default ImageUploadSection