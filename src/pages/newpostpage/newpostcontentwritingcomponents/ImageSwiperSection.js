import React from 'react'
import styled from 'styled-components'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

SwiperCore.use([Pagination]);

const ImageSwiperDiv = styled.div`
    width: 90%;
    height: 9rem;
`;

const SwiperContainer = styled.div`
    margin-top: 0.5rem;
    .swiper-slide {
        margin-right: 20px;
    }
`;

const UploadImg = styled.img`
    width: 12rem;
    height: 8rem;
`;

// const ImageSwiperSection = ({ imgFiles, previewImages }) => {
//     return (
//         <ImageSwiperDiv>
//             <SwiperContainer>
//                 <Swiper
//                 // install Swiper modules
//                 modules={[Navigation, Scrollbar, Pagination, A11y]}
//                 spaceBetween={1}
//                 slidesPerView={3}
//                 navigation
//                 onSwiper={(swiper) => console.log(swiper)}
//                 onSlideChange={() => console.log('slide change')}
//                 > 
//                     {previewImages.map((previewImage, idx) => (
//                         <SwiperSlide key={idx}>
//                             <UploadImg key={idx} src={previewImage}/>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </SwiperContainer>
//         </ImageSwiperDiv>
//     );
// }

// const ulStyle = {
//     listStyleType: "none", 
// }

// const liStyle = {
//     //marginRight: "10px",
//     //borderStyle: "solid"
// }

const ImageSwiperSection = ({
    imgFiles,
    previewImages,
    setImgFiles,
    setPreviewImages
}) => {

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const newPreviewImages = Array.from(previewImages);
        const [reorderedPreviewImages] = newPreviewImages.splice(result.source.index, 1);
        newPreviewImages.splice(result.destination.index, 0, reorderedPreviewImages);
        setPreviewImages(newPreviewImages);
    };

    return (
        <ImageSwiperDiv>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="image-list">
                    {(provided) => (
                        <div className='image-list' {...provided.droppableProps} ref={provided.innerRef} style={{listStyleType: "none", borderStyle: "solid", display: "flex", flexWrap: "wrap"}}>
                            {previewImages.map((previewImage, index) => (
                                <Draggable key={index.toString()} draggableId={index.toString()} index={index}>
                                    {(provided) => (
                                        <span {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            <UploadImg src={previewImage}/>
                                        </span>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </ImageSwiperDiv>
    );
}

export default ImageSwiperSection