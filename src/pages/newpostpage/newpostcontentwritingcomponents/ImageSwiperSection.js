import React from 'react'
import styled from 'styled-components'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const DragDropDiv = styled.div`
    width: 100%;
`;

const UploadImg = styled.img`
    width: 30vw;
    height: 35vh;
    margin-left: 3.5%;
    margin-right: 0.5%;
    margin-top: 0.5%;
    margin-bottom: 0.5%;
    border: ${({ isSelected }) => (isSelected ? '2px solid red' : 'none')};
`;

const droppableDivStyle = {
    width: "100%",
    height: "35vh",
    overflow: "auto",
}

const ImageSwiperSection = ({
    imgFiles,
    previewImages,
    selectedImage,
    handleImageClick,
    setImgFiles,
    setPreviewImages
}) => {
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const newImgFiles = Array.from(imgFiles);
        const newPreviewImages = Array.from(previewImages);
        const [reorderedImgFiles] = newImgFiles.splice(result.source.index, 1);
        const [reorderedPreviewImages] = newPreviewImages.splice(result.source.index, 1);
        newImgFiles.splice(result.destination.index, 0, reorderedImgFiles);
        newPreviewImages.splice(result.destination.index, 0, reorderedPreviewImages);
        setImgFiles(newImgFiles);
        setPreviewImages(newPreviewImages);
    };
    
    return (
        <>
        {previewImages.length === 0 ?
            <div
                style={{
                    width: "100%",
                    height: "75%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <div style={{ color: "#bbbbbb "}}>업로드한 이미지가 없습니다.</div>
            </div>
        :
            <DragDropDiv>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="image-list">
                        {(provided) => (
                            <div className='image-list' {...provided.droppableProps} ref={provided.innerRef} style={droppableDivStyle}>
                                {previewImages.map((previewImage, index) => (
                                    <Draggable key={index.toString()} draggableId={index.toString()} index={index}>
                                        {(provided) => (
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <UploadImg 
                                                    src={previewImage}
                                                    isSelected={selectedImage === index}
                                                    onClick={() => handleImageClick(index)}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </DragDropDiv>
        }
        </>
    );
}

export default ImageSwiperSection