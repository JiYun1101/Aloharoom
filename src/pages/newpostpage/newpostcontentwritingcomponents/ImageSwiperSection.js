import React from 'react'
import styled from 'styled-components'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const DragDropDiv = styled.div`
    width: 100%;
`;

const UploadImg = styled.img`
    width: 20rem;
    height: 15rem;
    margin-left: 0.5%;
    margin-right: 0.5%;
    margin-top: 0.5%;
    margin-bottom: 0.5%;
`;

const droppableDivStyle = {
    width: "100%",
    height: "20rem",
    overflow: "auto",
}

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
        <DragDropDiv>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="image-list">
                    {(provided) => (
                        <div className='image-list' {...provided.droppableProps} ref={provided.innerRef} style={droppableDivStyle}>
                            {previewImages.map((previewImage, index) => (
                                <Draggable key={index.toString()} draggableId={index.toString()} index={index}>
                                    {(provided) => (
                                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            <UploadImg src={previewImage}/>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </DragDropDiv>
    );
}

export default ImageSwiperSection