import React from "react";
import styled from "styled-components";
import { BiImageAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from "react";

SwiperCore.use([Pagination]);

const NewPostContentWritingDiv = styled.div`
    width: 80%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const NewPostContentWritingArea = styled.div`
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 1rem;
    width: 100%;
    height: 68%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostTitleDiv = styled.div`
    margin-top: 1rem;
    width: 90%;
    height: 3rem;
`;

const PostTitleInput = styled.input`
    width: 99%;
    height: 3rem;
    font-size: 1.3rem;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: solid 0.1rem #bbbbbb;
    :focus {
        outline: none;
    }
`;

const PostContentDiv = styled.div`
    margin-top: 1rem;
    width: 90%;
    height: 28rem;
`;

const PostContentTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    font-size: 1rem;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: none;
    :focus {
        outline: none;
    }
`;

const NewPostContentImageArea = styled.div`
    width: 100%;
    height: 32%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

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

const ImageSwiperDiv = styled.div`
    width: 90%;
    height: 9rem;
`;

const SwiperContainer = styled.div`
    margin-top: 0.5rem;
    .swiper-slide {
        margin-right: 1px; /* SwiperSlide 간격 조정 */
    }
`;

const UploadImg = styled.img`
    width: 12rem;
    height: 8rem;
`;

const PostButtonDiv = styled.div`
    margin-top: 0.5rem;
    width: 90%;
    height: 2rem;
    display: flex;
    flex-direction: row-reverse;
`;

const PostButton = styled.button`
    width: 7rem;
    height: 2rem;
    font-size: 1rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #47a5fd;
    border-radius: 0.3rem;
    background-color: #47a5fd;
    color: white;
`;


const NewPostContentWritingSection = ({
    setTitle,
    setContents,
    setImgFiles,
    PostInfoSubmit
}) => {
    const navigate = useNavigate();
    const [previewImages, setPreviewImages] = useState([]);

    const handleImageFilesInputChange = (e) => {
        setImgFiles(e.target.files);
        const files = e.target.files;
        const images = [];
        for(let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onload = () => {
                images.push(reader.result);
                if (images.length === files.length) {
                setPreviewImages(images);
                }
            };
            reader.readAsDataURL(files[i]);
            }
        };

    return (
        <NewPostContentWritingDiv>
                        <NewPostContentWritingArea>
                            <PostTitleDiv>
                                <PostTitleInput 
                                    type="text" 
                                    placeholder="제목을 입력해주세요." 
                                    onChange={(e) => { setTitle(e.target.value);}}
                                />
                            </PostTitleDiv>
                            <PostContentDiv>
                                <PostContentTextArea 
                                    placeholder="집에 대한 상세한 내용을 작성해주세요. (인원, 교통시설, 편의시설, 층수 등)"
                                    onChange={(e) => { setContents(e.target.value);}}
                                />
                            </PostContentDiv>
                        </NewPostContentWritingArea>
                        <NewPostContentImageArea>
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
                            <ImageSwiperDiv>
                                    <SwiperContainer>
                                        <Swiper
                                            // install Swiper modules
                                            modules={[Navigation, Scrollbar, Pagination, A11y]}
                                            spaceBetween={1}
                                            slidesPerView={3}
                                            navigation
                                            onSwiper={(swiper) => console.log(swiper)}
                                            onSlideChange={() => console.log('slide change')}
                                        > 
                                        { previewImages.map((previewImage, idx) => (
                                            <SwiperSlide>
                                                <UploadImg key={idx} src={previewImage}/>
                                            </SwiperSlide>
                                        ))}                                            
                                        </Swiper>
                                    </SwiperContainer>
                                </ImageSwiperDiv>
                                <PostButtonDiv>
                                    <PostButton onClick={() => {
                                        PostInfoSubmit();
                                        navigate(-1);
                                    }}>올리기</PostButton>
                                </PostButtonDiv>
                        </NewPostContentImageArea>
                    </NewPostContentWritingDiv>
    );
}

export default NewPostContentWritingSection;