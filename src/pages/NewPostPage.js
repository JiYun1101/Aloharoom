import React from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

const NewPostContainer = styled.div`
    position: relative;
    height: 57rem;
    display: flex;
    flex-direction: column;
`;

const NewPostHeaderDiv = styled.div`
    height: 3rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 500;
    color: #47a5fd;
`;

const NewPostContentDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const NewPostContentInfoContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NewPostContentInfoDiv = styled.div`
    border-style: solid;
    border-color: #47a5fd;
    border-radius: 1rem;
    width: 80%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MoveInDateMonthNameDiv = styled.div`
    margin-top: 1rem;
    width: 90%;
    height: 2rem;
    display: flex;
    flex-direction: row;
`;

const MoveInDateDiv = styled.div`
    width: 60%;
    height: 2rem;
`;

const MonthNameDiv = styled.div`
    width: 39%;
    height: 2rem;
`;


const MoveInDateTitleSpan = styled.span`
    color: #47A5FD;
    font-size: 1rem;
    line-height: 2rem;
`;

const MonthNameTitleSpan = styled.span`
    color: #47A5FD;
    font-size: 1rem;
    line-height: 2rem;
`;

const MoveInDateMonthInfoDiv = styled.div`
    width: 90%;
    height: 3rem;
    display: flex;
    flex-direction: row;
`;

const MoveInDateInfoDiv = styled.div`
    width: 60%;
    height: 3rem;
    display: flex;
    align-items: center;
`;

const MonthInfoDiv = styled.div`
    width: 39%;
    height: 3rem;
    display: flex;
    align-items: center;
`;

const MonthInfoInput = styled.input`
    width: 3rem;
    height: 2rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
`;

const MonthInfoSpan = styled.span`
    color: #47A5FD;
    font-size: 1rem;
    line-height: 3rem;
`;

const AddressTitleDiv = styled.div`
    margin-top: 1.5rem;
    width: 90%;
    height: 2rem;
`;

const AddressTitleSpan = styled.span`
    color: #47A5FD;
    font-size: 1rem;
    line-height: 2rem;
`;

const AddressInfoDiv = styled.div`
    width: 90%;
    height: 3rem;
    display: flex;
    align-items: center;
`;

const AddressInput = styled.input`
    width: 30rem;
    height: 2rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
`;

const RoomCountTypeFlatTitleDiv = styled.div`
    margin-top: 1.5rem;
    width: 90%;
    height: 3rem;
    display: flex;
    flex-direction: row;
`;

const RoomCountTitleDiv = styled.div`
    width: 40%;
    height: 3rem;
`;

const RoomCountTitleSpan = styled.span`
    color: #47A5FD;
    font-size: 1rem;
    line-height: 3rem;
`;

const TypeTitleDiv = styled.div`
    width: 40%;
    height: 3rem;
`;

const TypeTitleSpan = styled.span`
    color: #47A5FD;
    font-size: 1rem;
    line-height: 3rem;
`;

const FlatTitleDiv = styled.div`
    width: 20%;
    height: 3rem;
`;

const FlatTitleSpan = styled.span`
    color: #47A5FD;
    font-size: 1rem;
    line-height: 3rem;
`;

const RoomCountTypeFlatInfoDiv = styled.div`
    width: 90%;
    height: 3rem;
    display: flex;
    flex-direction: row;
`;

const RoomCountInfoDiv = styled.div`
    width: 40%;
    height: 3rem;
    display: flex;
    align-items: center;
`;

const RoomCountButton = styled.button`
    width: 6rem;
    height: 2rem;
    font-size: 1.2rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
    background-color: white;
    color: #bbbbbb;
    margin-right: 0.5rem;
`;

const TypeInfoDiv = styled.div`
    width: 40%;
    height: 3rem;
    display: flex;
    align-items: center;
`;

const TypeInfoButton = styled.button`
    width: 6rem;
    height: 2rem;
    font-size: 1.2rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
    background-color: white;
    color: #bbbbbb;
    margin-right: 0.5rem;
`;

const FlatInfoDiv = styled.div`
    width: 20%;
    height: 3rem;
    display: flex;
    align-items: center;
`;

const FlatInfoInput = styled.input`
    width: 5rem;
    height: 2rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
`;

const PriceTitleDiv = styled.div`
    margin-top: 1.5rem;
    width: 90%;
    height: 2rem;
`;

const PriceTitleSpan = styled.span`
    color: #47A5FD;
    font-size: 1rem;
    line-height: 2rem;
`;

const PriceInfoDiv = styled.div`
    width: 90%;
    height: 3rem;
    display: flex;
    flex-direction: row;
`;

const PriceInputSelectDiv = styled.div`
    width: 55%;
    height: 3rem;
    display: flex;
    align-items: center;
`;

const PriceInput = styled.input`
    width: 5rem;
    height: 2rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
    margin-right: 0.5rem;
`;

const PriceSpan = styled.span`
    color: #47A5FD;
    font-size: 1.2rem;
`;

const PriceSelect = styled.select`
    width: 150px;
    height: 35px;
    background-size: 20px;
    padding: 5px 30px 5px 10px;
    border-radius: 4px;
    outline: 0 none;
`;

const PriceOption = styled.option`
    color: black;
`;

const ManageMentDiv = styled.div`
    width: 45%;
    height: 3rem;
    display: flex;
    align-items: center;
`;

const ManageMentPriceCheckbox = styled.input`
    background-color: #47A5FD;
    margin-right: 0.5rem;
`;

const ManageMentSpan = styled.span`
    color: #47A5FD;
    font-size: 1rem;
    margin-right: 2rem;
`;

const MangeMentInputText = styled.input`
    width: 8rem;
    height: 2rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
`;

const GuaranteeDiv = styled.div`
    margin-top: 1.5rem;
    width: 90%;
    height: 3rem;
    display: flex;
    flex-direction: row;
`;

const GuaranteeEmptyDiv = styled.div`
    width: 55%;
    height: 3rem;
`;

const GuaranteeCheckBoxDiv = styled.div`
    width: 45%;
    height: 3rem;
`;

const GuaranteePriceCheckbox = styled.input`
    background-color: #47A5FD;
    margin-right: 0.5rem;
`;

const GuaranteeSpan = styled.span`
    color: #47A5FD;
    font-size: 1rem;
    margin-right: 2rem;
`

const GuaranteeInputText = styled.input`
    width: 8rem;
    height: 2rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
`;

const HouseHashTagTitleDiv = styled.div`
    margin-top: 1.5rem;
    width: 90%;
    height: 2rem;
`;

const HouseHashTagTitleSpan = styled.span`
    color: #47A5FD;
    font-size: 1rem;
    margin-right: 2rem;
`;

const HouseHashTagTitleInfoSpan = styled.span`
    color: #bbbbbb;
    font-size: 0.8rem;
`;

const HouseHashTagButtonDiv = styled.div`
    width: 90%;
    height: 4.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const HouseHashTagButton = styled.button`
    width: 7rem;
    height: 2rem;
    font-size: 1rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
    background-color: white;
    color: #bbbbbb;
`;

const MyHashTagTitleDiv = styled.div`
    margin-top: 1.5rem;
    width: 90%;
    height: 2rem;
`;

const MyHashTagTitleSpan = styled.span`
    color: #47A5FD;
    font-size: 1rem;
    margin-right: 2rem;
`;

const MyHashTagTitleInfoSpan = styled.span`
    color: #bbbbbb;
    font-size: 0.8rem;
`;

const MyHashTagButtonDiv = styled.div`
    width: 90%;
    height: 4.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const MyHashTagButton = styled.button`
    width: 7rem;
    height: 2rem;
    font-size: 1rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 0.3rem;
    background-color: white;
    color: #bbbbbb;
`;








































const NewPostContentWritingContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NewPostContentWritingDiv = styled.div`
    width: 80%;
    height: 95%;
    display: flex;
    flex-direction: column;
`;

const NewPostContentWritingArea = styled.div`
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 1rem;
    width: 100%;
    height: 68%;
`;

const NewPostContentImageArea = styled.div`
    border-style: solid;
    border-color: #bbbbbb;
    border-radius: 1rem;
    width: 100%;
    height: 32%;
`;

const BackPageIconStyle = {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    color: "#47a5fd"
};

const NewPostPage = () => {
    const navigate = useNavigate();
    return (
        <NewPostContainer>
            <AiOutlineLeft size={40} style={BackPageIconStyle} onClick={() => navigate(-1)}/>
            <NewPostHeaderDiv>
                새 글 쓰기
            </NewPostHeaderDiv>
            <NewPostContentDiv>
                <NewPostContentInfoContainer>
                    <NewPostContentInfoDiv>
                        <MoveInDateMonthNameDiv>
                            <MoveInDateDiv>
                                <MoveInDateTitleSpan>입주 가능 날짜(~마감날)</MoveInDateTitleSpan>
                            </MoveInDateDiv>
                            <MonthNameDiv>
                                <MonthNameTitleSpan>매월</MonthNameTitleSpan>
                            </MonthNameDiv>
                        </MoveInDateMonthNameDiv>
                        <MoveInDateMonthInfoDiv>
                            <MoveInDateInfoDiv>
                                <RangePicker/>
                            </MoveInDateInfoDiv>
                            <MonthInfoDiv>
                                <MonthInfoInput type="text"/>
                                <MonthInfoSpan>일</MonthInfoSpan>
                            </MonthInfoDiv>
                        </MoveInDateMonthInfoDiv>
                        <AddressTitleDiv>
                            <AddressTitleSpan>주소</AddressTitleSpan>
                        </AddressTitleDiv>
                        <AddressInfoDiv>
                            <AddressInput type="text"/>
                        </AddressInfoDiv>
                        <RoomCountTypeFlatTitleDiv>
                            <RoomCountTitleDiv>
                                <RoomCountTitleSpan>방 개수</RoomCountTitleSpan>
                            </RoomCountTitleDiv>
                            <TypeTitleDiv>
                                <TypeTitleSpan>주거형태</TypeTitleSpan>
                            </TypeTitleDiv>
                            <FlatTitleDiv>
                                <FlatTitleSpan>평수</FlatTitleSpan>
                            </FlatTitleDiv>
                        </RoomCountTypeFlatTitleDiv>
                        <RoomCountTypeFlatInfoDiv>
                            <RoomCountInfoDiv>
                                <RoomCountButton>원 룸</RoomCountButton>
                                <RoomCountButton>투-쓰리룸</RoomCountButton>
                            </RoomCountInfoDiv>
                            <TypeInfoDiv>
                                <TypeInfoButton>오피스텔</TypeInfoButton>
                                <TypeInfoButton>아파트</TypeInfoButton>
                            </TypeInfoDiv>
                            <FlatInfoDiv>
                                <FlatInfoInput type="text"/>
                            </FlatInfoDiv>
                        </RoomCountTypeFlatInfoDiv>
                        <PriceTitleDiv>
                            <PriceTitleSpan>가격</PriceTitleSpan>
                        </PriceTitleDiv>
                        <PriceInfoDiv>
                            <PriceInputSelectDiv>
                                <PriceInput type="text"/>
                                <PriceSpan>(</PriceSpan>
                                <PriceSelect>
                                    <PriceOption value="월세">월세</PriceOption>
                                    <PriceOption value="전세">전세</PriceOption>
                                    <PriceOption value="매매">매매</PriceOption>
                                </PriceSelect>
                                <PriceSpan>)</PriceSpan>
                            </PriceInputSelectDiv>
                            <ManageMentDiv>
                                <ManageMentPriceCheckbox type="checkbox"/>
                                <ManageMentSpan>관리비 별도</ManageMentSpan>
                                <MangeMentInputText type="text"/>
                            </ManageMentDiv>
                        </PriceInfoDiv>
                        <GuaranteeDiv>
                            <GuaranteeEmptyDiv/>
                            <GuaranteeCheckBoxDiv>
                                <GuaranteePriceCheckbox type="checkbox"/>
                                <GuaranteeSpan>보증금 별도</GuaranteeSpan>
                                <GuaranteeInputText type="text"/>
                            </GuaranteeCheckBoxDiv>
                        </GuaranteeDiv>
                        <HouseHashTagTitleDiv>
                            <HouseHashTagTitleSpan>집 해시태그</HouseHashTagTitleSpan>
                            <HouseHashTagTitleInfoSpan>(클릭으로 해시태그를 적용시킬 수 있습니다.)</HouseHashTagTitleInfoSpan>
                        </HouseHashTagTitleDiv>
                        <HouseHashTagButtonDiv>
                            <HouseHashTagButton>#비흡연자</HouseHashTagButton>
                            <HouseHashTagButton>#역세권</HouseHashTagButton>
                            <HouseHashTagButton>#남향</HouseHashTagButton>
                            <HouseHashTagButton>#편의점 근처</HouseHashTagButton>
                            <HouseHashTagButton>#조용한</HouseHashTagButton>
                            <HouseHashTagButton>#비흡연자</HouseHashTagButton>
                            <HouseHashTagButton>#역세권</HouseHashTagButton>
                            <HouseHashTagButton>#남향</HouseHashTagButton>
                            <HouseHashTagButton>#편의점 근처</HouseHashTagButton>
                            <HouseHashTagButton>#조용한</HouseHashTagButton>
                        </HouseHashTagButtonDiv>
                        <MyHashTagTitleDiv>
                            <MyHashTagTitleSpan>내 해시태그</MyHashTagTitleSpan>
                        </MyHashTagTitleDiv>    
                        <MyHashTagButtonDiv>
                            <MyHashTagButton>#비흡연자</MyHashTagButton>
                            <MyHashTagButton>#역세권</MyHashTagButton>
                            <MyHashTagButton>#남향</MyHashTagButton>
                            <MyHashTagButton>#조용한</MyHashTagButton>
                            <MyHashTagButton>#비흡연자</MyHashTagButton>
                            <MyHashTagButton>#역세권</MyHashTagButton>
                            <MyHashTagButton>#남향</MyHashTagButton>
                            <MyHashTagButton>#조용한</MyHashTagButton>
                            <MyHashTagButton>#비흡연자</MyHashTagButton>
                            <MyHashTagButton>#역세권</MyHashTagButton>
                            <MyHashTagButton>#남향</MyHashTagButton>
                        </MyHashTagButtonDiv>
                    </NewPostContentInfoDiv>
                </NewPostContentInfoContainer>
                <NewPostContentWritingContainer>
                    <NewPostContentWritingDiv>
                        <NewPostContentWritingArea>
                        </NewPostContentWritingArea>
                        <NewPostContentImageArea>
                        </NewPostContentImageArea>
                    </NewPostContentWritingDiv>
                </NewPostContentWritingContainer>
            </NewPostContentDiv>
        </NewPostContainer>
    );
}

export default NewPostPage;