import React from "react";
import styled from "styled-components";
import { FaRegCommentDots } from "react-icons/fa";

const Card = styled.div`
  width: 15.5rem;
  height: 22rem;
  border-style: solid;
  border-color: #bbbbbb;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-color: #a0a0a0;
  &:hover {
    border-color: #47a5fd;
  }
`;

const RoomTypeDiv = styled.div`
  width: 90%;
  height: 2rem;
  display: flex;
  align-items: flex-end;
`;

const RoomTypeButton = styled.button`
  background-color: white;
  width: 4.5rem;
  height: 1.5rem;
  color: #47a5fd;
  font-weight: 500;
  font-size: 0.8rem;
  border: 2px solid #47a5fd;
  border-radius: 0.5rem;
`;

const MoveInDateDiv = styled.div`
  width: 88%;
  height: 2rem;
`;

const MoveInDateSpan = styled.span`
  font-size: 0.8rem;
  color: black;
  line-height: 2rem;
`;

const AddressInfoDiv = styled.div`
  width: 88%;
  height: 2.5rem;
`;

const AddressInfoSpan = styled.span`
  font-size: 1.1rem;
  font-weight: 550;
`;

const PriceInfoDiv = styled.div`
  width: 88%;
  height: 2rem;
`;

const PriceInfoSpan = styled.span`
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 600;
`;

const CardImageDiv = styled.div`
  width: 99%;
  height: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.img`
  width: 95%;
  height: 10rem;
`;

const ProfileCommentDiv = styled.div`
  width: 95%;
  height: 2rem;
  display: flex;
  flex-direction: row;
`;

const ProfileDiv = styled.div`
  width: 65%;
  height: 2rem;
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 70%;
`;

const ProfileSpan = styled.span`
  margin-left: 0.5rem;
  color: black;
  font-size: 0.9rem;
`;

const CommentDiv = styled.div`
  width: 34%;
  height: 2rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const CommentLogoStyle = {
  marginRight: "0.5rem",
};

const CommentSpan = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 0.5rem;
`;

const CardPost = ({
    type,
    address,
    boardId,
    commentNum,
    flat,
    imageUrl,
    nickname,
    rent,
    roomCount,
    startDate,
    profileImgUrl
}) => {
    return (
        <Card>
            <RoomTypeDiv>
                <RoomTypeButton>{type}</RoomTypeButton>
            </RoomTypeDiv>
            <MoveInDateDiv>
                <MoveInDateSpan>입주 가능일 : {startDate}</MoveInDateSpan>
            </MoveInDateDiv>
            <AddressInfoDiv>
                <AddressInfoSpan>{address}</AddressInfoSpan>
            </AddressInfoDiv>
            <PriceInfoDiv>
                <PriceInfoSpan>{rent}만원</PriceInfoSpan>
            </PriceInfoDiv>
            <CardImageDiv>
                <CardImage src={imageUrl}/>
            </CardImageDiv>
            <ProfileCommentDiv>
                <ProfileDiv>
                    <ProfileImg src={profileImgUrl}/>
                    <ProfileSpan>{nickname}</ProfileSpan>
                </ProfileDiv>
                <CommentDiv>
                    <CommentSpan>{commentNum}</CommentSpan>
                    <FaRegCommentDots size={25} style={CommentLogoStyle}/>
                </CommentDiv>
            </ProfileCommentDiv>
        </Card>
        );
}

export default CardPost;
