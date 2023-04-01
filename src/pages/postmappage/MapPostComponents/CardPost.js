import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 31%;
    height: 20rem;
    border-style: solid;
    border-color: #47A5FD;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const RoomTypeDiv = styled.div`
    width: 90%;
    height: 2rem;
    display: flex;
    align-items: flex-end;
`;

const RoomTypeButton = styled.button`
    background-color: white;
    width: 4rem;
    height: 1.5rem;
    color: #bbbbbb;
    font-weight: 500;
    font-size: 0.8rem;
    border: 2px solid #bbbbbb;
    border-radius: 0.5rem;
    
`;

const CardPost = () => {
    return (
        <Card>
            <RoomTypeDiv>
                <RoomTypeButton>룸메이트</RoomTypeButton>
            </RoomTypeDiv>
        </Card>
        );
}

export default CardPost;