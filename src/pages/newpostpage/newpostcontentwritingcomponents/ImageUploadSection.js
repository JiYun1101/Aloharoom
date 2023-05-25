import React from 'react'
import styled from 'styled-components'
import { BiImageAdd } from "react-icons/bi";

const ImageUploadDiv = styled.div`
    margin-top: 2vh;
    margin-left: 1vw;
    width: 100%;
    height: 3.5vh;
`;

const ImageUploadLabel = styled.label`
    font-size: 1.3rem;
    font-weight: ${props => props.fontWeight};
    cursor: pointer;
    vertical-align: center;
`;

const ImageUploadInput = styled.input`
    display: none;
`;

const ImageUploadSection = ({ handleImageFilesInputChange }) => {
    return (
        <ImageUploadDiv>
            <ImageUploadLabel 
                htmlFor="imageUpload"
                fontWeight="600"
            >
                이미지 업로드 
                <BiImageAdd size={25} htmlFor="imageUpload"/>
            </ImageUploadLabel>
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