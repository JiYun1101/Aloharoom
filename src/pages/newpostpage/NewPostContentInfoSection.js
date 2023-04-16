import React, { useState} from "react";
import styled from "styled-components";
import { DatePicker } from 'antd';

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


const NewPostContentInfoSection = ({   
    address,
    tradeType,
    setAddress,
    setStartDate,
    setX,
    setY,
    setRoomCount,
    setHomeType,
    setFlat,
    setPrice,
    setTradeType,
    setMaintenance,
    setDeposit
}) => {

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
    return (
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
                                onChange={(e) => { setAddress(e.target.value); }}
                                onBlur={() => { searchLatLng(); }}
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
                            >
                              #비흡연자
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(2)}
                                onClick={() => handleHouseHashTagButtonClick(2)}
                            >
                              #역세권
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(3)}
                                onClick={() => handleHouseHashTagButtonClick(3)}
                            >
                              #남향
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(4)}
                                onClick={() => handleHouseHashTagButtonClick(4)}
                            >
                              #편의점 근처
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(5)}
                                onClick={() => handleHouseHashTagButtonClick(5)}
                            >
                              #조용한
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(6)}
                                onClick={() => handleHouseHashTagButtonClick(6)}
                            >
                              #비흡연자
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(7)}
                                onClick={() => handleHouseHashTagButtonClick(7)}
                            >
                              #역세권
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(8)}
                                onClick={() => handleHouseHashTagButtonClick(8)}
                            >
                              #남향
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(9)}
                                onClick={() => handleHouseHashTagButtonClick(9)}
                            >
                              #편의점 근처
                            </HouseHashTagButton>
                            <HouseHashTagButton
                                selected={selectedHouseHashTagButtons.includes(10)}
                                onClick={() => handleHouseHashTagButtonClick(10)}
                            >
                              #조용한
                            </HouseHashTagButton>
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
    );
}

export default NewPostContentInfoSection;