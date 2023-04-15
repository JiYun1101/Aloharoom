import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { DatePicker } from 'antd';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from "axios";

SwiperCore.use([Pagination]);

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
  color: #47a5fd;
  font-size: 1rem;
  line-height: 2rem;
`;

const MonthNameTitleSpan = styled.span`
  color: #47a5fd;
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
  color: #47a5fd;
  font-size: 1rem;
  line-height: 3rem;
`;

const AddressTitleDiv = styled.div`
  margin-top: 1.5rem;
  width: 90%;
  height: 2rem;
`;

const AddressTitleSpan = styled.span`
  color: #47a5fd;
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
  color: #47a5fd;
  font-size: 1rem;
  line-height: 3rem;
`;

const TypeTitleDiv = styled.div`
  width: 40%;
  height: 3rem;
`;

const TypeTitleSpan = styled.span`
  color: #47a5fd;
  font-size: 1rem;
  line-height: 3rem;
`;

const FlatTitleDiv = styled.div`
  width: 20%;
  height: 3rem;
`;

const FlatTitleSpan = styled.span`
  color: #47a5fd;
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
  border-radius: 0.3rem;
  background-color: white;
  border-color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
  color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
  margin-right: 0.5rem;
  :hover {
    border-color: #47a5fd;
    color: #47a5fd;
  }
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
  border-radius: 0.3rem;
  background-color: white;
  margin-right: 0.5rem;
  border-color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
  color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
  :hover {
    border-color: #47a5fd;
    color: #47a5fd;
  }
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
  color: #47a5fd;
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
  color: #47a5fd;
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
  background-color: #47a5fd;
  margin-right: 0.5rem;
`;

const ManageMentSpan = styled.span`
  color: #47a5fd;
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
  background-color: #47a5fd;
  margin-right: 0.5rem;
`;

const GuaranteeSpan = styled.span`
  color: #47a5fd;
  font-size: 1rem;
  margin-right: 2rem;
`;

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
  color: #47a5fd;
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
  border-radius: 0.3rem;
  background-color: white;
  border-color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
  color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
  :hover {
    border-color: #47a5fd;
    color: #47a5fd;
  }
`;

const MyHashTagTitleDiv = styled.div`
  margin-top: 1.5rem;
  width: 90%;
  height: 2rem;
`;

const MyHashTagTitleSpan = styled.span`
  color: #47a5fd;
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
  border-radius: 0.3rem;
  background-color: white;
  border-color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
  color: ${(props) => (props.selected ? "#47A5FD" : "#bbbbbb")};
  :hover {
    border-color: #47a5fd;
    color: #47a5fd;
  }
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

const BackPageIconStyle = {
  position: "absolute",
  top: "1rem",
  left: "1rem",
  color: "#47a5fd",
};

const NewPostPage = () => {
  //체크 박스 클릭시 활성화 되도록 하는 상태 변수
  const [maintenanceChecked, setMaintenanceChecked] = useState(false);
  const [depositChecked, setDepositChecked] = useState(false);
  const handleMaintenanceCheckboxChange = () => {
    setMaintenanceChecked(!maintenanceChecked);
  };
  const handleDepositCheckboxChange = () => {
    setDepositChecked(!depositChecked);
  };
  //방 개수 버튼 클릭 상태 변수
  const [selectedRoomCountButton, setSelectedRoomCountButton] = useState(null);
  const handleRoomCountButtonClick = (buttonIndex) => {
    setSelectedRoomCountButton(buttonIndex);
  };
  //주거형태 버튼 클릭 상태 변수
  const [selectedTypeInfoButton, setSelectedTypeInfoButton] = useState(null);
  const handleTypeInfoButton = (buttonIndex) => {
    setSelectedTypeInfoButton(buttonIndex);
  };
  //집 해시태그 버튼 클릭 상태 변수
  const [selectedHouseHashTagButtons, setSelectedHouseHashTagButtons] =
    useState([]);
  const handleHouseHashTagButtonClick = (index) => {
    if (selectedHouseHashTagButtons.includes(index)) {
      setSelectedHouseHashTagButtons(
        selectedHouseHashTagButtons.filter((i) => i !== index)
      );
    } else {
      setSelectedHouseHashTagButtons([...selectedHouseHashTagButtons, index]);
    }
  };
  //내 해시태그 버튼 클릭 상태 변수
  const [selectedMyHashTagButtons, setSelectedMyHashTagButtons] = useState([]);
  const handleMyHashTagButtonClick = (index) => {
    if (selectedMyHashTagButtons.includes(index)) {
      setSelectedMyHashTagButtons(
        selectedMyHashTagButtons.filter((i) => i !== index)
      );
    } else {
      setSelectedMyHashTagButtons([...selectedMyHashTagButtons, index]);
    }
  };

  //입주 가능 날짜
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [count, setCount] = useState("0");
  const [roomCount, setRoomCount] = useState("");
  const [address, setAddress] = useState("");
  const [homeType, setHomeType] = useState("");
  const [tradeType, setTradeType] = useState("월세");
  const [price, setPrice] = useState("");
  const [deposit, setDeposit] = useState("");
  const [rent, setRent] = useState("0");
  const [flat, setFlat] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [floor, setFloor] = useState("2");
  const [totalFloor, setTotalFloor] = useState("3");
  const [startDate, setStartDate] = useState("");
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [imgFiles, setImgFiles] = useState([]);

  const [previewImages, setPreviewImages] = useState([]);

  console.log("==============================");
  console.log("title ", title);
  console.log("contents ", contents);
  console.log("roomCount ", roomCount);
  console.log("address ", address);
  console.log("homeType ", homeType);
  console.log("tradeType ", tradeType);
  console.log("price ", price);
  console.log("deposit ", deposit);
  console.log("rent ", rent);
  console.log("flat ", flat);
  console.log("maintenance ", maintenance);
  console.log("floor ", floor);
  console.log("totalFloor ", totalFloor);
  console.log("startDate ", startDate);
  console.log("x ", x);
  console.log("y ", y);
  console.log("imgFiles ", imgFiles);
  console.log("==============================");

  //입주 가능 날짜 설정 함수
  const startDateOnChange = (date, dateString) => {
    setStartDate(dateString);
  };
  //위도 경도 설정 함수
  const searchLatLng = () => {
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(address, (data, status, _pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setX(data[0].x.toString());
        setY(data[0].y.toString());
      }
    });
  };

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
    const PostInfoSubmit = () => {
        const data = {
            "title": title,
            "contents": contents,
            "count": count,
            "roomCount": roomCount,
            "address": address,
            "homeType": homeType,
            "tradeType": tradeType,
            "price": price,
            "deposit": deposit,
            "rent": rent,
            "flat": flat,
            "maintenance": maintenance,
            "floor": floor,
            "totalFloor": totalFloor,
            "startDate": startDate,
            "x": x,
            "y": y
        }
        const jsonData = JSON.stringify(data);
        const blob = new Blob([jsonData], { type: "application/json"});
        const formData = new FormData();
        formData.append("boardAddDto", blob);
        for(let i = 0; i < imgFiles.length; i++) {
            formData.append("imgFiles", imgFiles[i]);
        }
        axios.post("http://localhost:8080/api/board", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

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
                                <MoveInDateTitleSpan>입주 가능 날짜</MoveInDateTitleSpan>
                            </MoveInDateDiv>
                        </MoveInDateMonthNameDiv>
                        <MoveInDateMonthInfoDiv>
                            <MoveInDateInfoDiv>
                                <DatePicker onChange={startDateOnChange}/>
                            </MoveInDateInfoDiv>
                        </MoveInDateMonthInfoDiv>
                        <AddressTitleDiv>
                            <AddressTitleSpan>주소</AddressTitleSpan>
                        </AddressTitleDiv>
                        <AddressInfoDiv>
                            <AddressInput 
                                type="text" 
                                value={address}
                                onChange={(e) => { 
                                    setAddress(e.target.value);
                                }}
                                onBlur={() => {
                                    searchLatLng();
                                }}
                            />
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
                                <RoomCountButton 
                                    selected={selectedRoomCountButton === 0} 
                                    onClick={() => {
                                        handleRoomCountButtonClick(0);
                                        setRoomCount("1");
                                    }}
                                >
                                    원 룸
                                </RoomCountButton>
                                <RoomCountButton 
                                    selected={selectedRoomCountButton === 1} 
                                    onClick={() => {
                                        handleRoomCountButtonClick(1);
                                        setRoomCount("2");
                                    }}
                                >
                                    투-쓰리룸
                                </RoomCountButton>
                            </RoomCountInfoDiv>
                            <TypeInfoDiv>
                                <TypeInfoButton
                                    selected={selectedTypeInfoButton === 0}
                                    onClick={() => {
                                        handleTypeInfoButton(0);
                                        setHomeType("오피스텔");
                                    }}
                                >
                                    오피스텔
                                </TypeInfoButton>
                                <TypeInfoButton
                                    selected={selectedTypeInfoButton === 1}
                                    onClick={() => {
                                        handleTypeInfoButton(1);
                                        setHomeType("아파트")
                                    }}
                                >
                                    아파트
                                </TypeInfoButton>
                            </TypeInfoDiv>
                            <FlatInfoDiv>
                                <FlatInfoInput type="text" onChange={(e) => { setFlat(e.target.value)}}/>
                            </FlatInfoDiv>
                        </RoomCountTypeFlatInfoDiv>
                        <PriceTitleDiv>
                            <PriceTitleSpan>가격</PriceTitleSpan>
                        </PriceTitleDiv>
                        <PriceInfoDiv>
                            <PriceInputSelectDiv>
                                <PriceInput type="text" onChange={(e) => { setPrice(e.target.value); }}/>
                                <PriceSpan>(</PriceSpan>
                                <PriceSelect value={tradeType} onChange={(e) => { setTradeType(e.target.value)}}>
                                    <PriceOption value="월세">월세</PriceOption>
                                    <PriceOption value="전세">전세</PriceOption>
                                    <PriceOption value="매매">매매</PriceOption>
                                </PriceSelect>
                                <PriceSpan>)</PriceSpan>
                            </PriceInputSelectDiv>
                            <ManageMentDiv>
                                <ManageMentPriceCheckbox type="checkbox" checked={maintenanceChecked} onChange={handleMaintenanceCheckboxChange}/>
                                <ManageMentSpan>관리비 별도</ManageMentSpan>
                                <MangeMentInputText type="text" disabled={!maintenanceChecked} onChange={(e) => { setMaintenance(e.target.value);}}/>
                            </ManageMentDiv>
                        </PriceInfoDiv>
                        <GuaranteeDiv>
                            <GuaranteeEmptyDiv/>
                            <GuaranteeCheckBoxDiv>
                                <GuaranteePriceCheckbox type="checkbox" checked={depositChecked} onChange={handleDepositCheckboxChange}/>
                                <GuaranteeSpan>보증금 별도</GuaranteeSpan>
                                <GuaranteeInputText type="text" disabled={!depositChecked} onChange={(e) => { setDeposit(e.target.value);}}/>
                            </GuaranteeCheckBoxDiv>
                        </GuaranteeDiv>
                        <HouseHashTagTitleDiv>
                            <HouseHashTagTitleSpan>집 해시태그</HouseHashTagTitleSpan>
                            <HouseHashTagTitleInfoSpan>(클릭으로 해시태그를 적용시킬 수 있습니다.)</HouseHashTagTitleInfoSpan>
                        </HouseHashTagTitleDiv>
                        <HouseHashTagButtonDiv>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(1)}
                                onClick={() => handleHouseHashTagButtonClick(1)}
                            >#비흡연자</HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(2)}
                                onClick={() => handleHouseHashTagButtonClick(2)}
                            >#역세권</HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(3)}
                                onClick={() => handleHouseHashTagButtonClick(3)}
                            >#남향</HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(4)}
                                onClick={() => handleHouseHashTagButtonClick(4)}
                            >#편의점 근처</HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(5)}
                                onClick={() => handleHouseHashTagButtonClick(5)}
                            >#조용한</HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(6)}
                                onClick={() => handleHouseHashTagButtonClick(6)}
                            >#비흡연자</HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(7)}
                                onClick={() => handleHouseHashTagButtonClick(7)}
                            >#역세권</HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(8)}
                                onClick={() => handleHouseHashTagButtonClick(8)}
                            >#남향</HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(9)}
                                onClick={() => handleHouseHashTagButtonClick(9)}
                            >#편의점 근처</HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(10)}
                                onClick={() => handleHouseHashTagButtonClick(10)}
                            >#조용한</HouseHashTagButton>
                        </HouseHashTagButtonDiv>
                        <MyHashTagTitleDiv>
                            <MyHashTagTitleSpan>내 해시태그</MyHashTagTitleSpan>
                        </MyHashTagTitleDiv>    
                        <MyHashTagButtonDiv>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(1)}
                                onClick={() => handleMyHashTagButtonClick(1)}
                            >
                                #비흡연자
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(2)}
                                onClick={() => handleMyHashTagButtonClick(2)}
                            >
                                #역세권
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(3)}
                                onClick={() => handleMyHashTagButtonClick(3)}
                            >
                                #남향
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(4)}
                                onClick={() => handleMyHashTagButtonClick(4)}
                            >
                                #조용한
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(5)}
                                onClick={() => handleMyHashTagButtonClick(5)}
                            >
                                #비흡연자
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(6)}
                                onClick={() => handleMyHashTagButtonClick(6)}
                            >
                                #역세권
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(7)}
                                onClick={() => handleMyHashTagButtonClick(7)}
                            >
                                #남향
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(8)}
                                onClick={() => handleMyHashTagButtonClick(8)}
                            >
                                #조용한
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(9)}
                                onClick={() => handleMyHashTagButtonClick(9)}
                            >
                                #비흡연자
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(10)}
                                onClick={() => handleMyHashTagButtonClick(10)}
                            >
                                #역세권
                            </MyHashTagButton>
                            <MyHashTagButton
                                selected={selectedMyHashTagButtons.includes(11)}
                                onClick={() => handleMyHashTagButtonClick(11)}
                            >
                                #남향
                            </MyHashTagButton>
                        </MyHashTagButtonDiv>
                    </NewPostContentInfoDiv>
                </NewPostContentInfoContainer>
                <NewPostContentWritingContainer>
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
                </NewPostContentWritingContainer>
            </NewPostContentDiv>
        </NewPostContainer>
    );
}


export default NewPostPage;
