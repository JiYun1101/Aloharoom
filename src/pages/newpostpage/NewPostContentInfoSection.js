import React from "react";
import styled from "styled-components";
import FirstSection from "./newpostcontentinfocomponents/FirstSection";
import AddressInfoSection from "./newpostcontentinfocomponents/AddressInfoSection";
import RoomCountTypeFlatInfoSection from "./newpostcontentinfocomponents/RoomCountTypeFlatInfoSection";
import PriceInfoSection from "./newpostcontentinfocomponents/PriceInfoSection";
import GuaranteeSection from "./newpostcontentinfocomponents/GuaranteeSection";
import HouseHashTagButtonSection from "./newpostcontentinfocomponents/HouseHashTagButtonSection";
import MyHashTagButtonSection from "./newpostcontentinfocomponents/MyHashTagButtonSection";
import SecondSection from "./newpostcontentinfocomponents/SecondSection";
import axios from "axios";
import baseURL from "../api/baseURL";
import { useEffect } from "react";
import { useState } from "react";

const NewPostContentInfoContainer = styled.div`
  border-style: solid;
  border-color: #47a5fd;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  height: 95%;
`;

const NewPostContentInfoDiv = styled.div`
  //border-style: solid;
  width: 99%;
  height: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0.4rem;          /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 1%;             /* 스크롤바의 길이 */
    background: #BBBBBB;    /* 스크롤바의 색상 */
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: none;      /*스크롤바 뒷 배경 색상*/
  }  
`;

const TitleDiv = styled.div`
  width: 90%;
  height: ${props => props.height ||  '0rem'};
  margin-top: ${props => props.marginTop || '1rem'};
  display: flex;
  flex-direction: row;
  font-weight: ${props => props.fontWeight};
`;

const TitleBox = styled.div`
  width: ${props => props.width || '0rem'};
  height: ${props => props.height || '0rem'};
`;

const TitleSpan = styled.span`
  font-size: ${ props => props.fontSize || "1rem"};
  line-height: ${ props => props.lineHeight || "0rem"};
  margin-right: ${ props => props.marginRight || "0rem"};
  font-weight: ${props => props.fontWeight};
`;

const NewPostContentInfoSection = ({   
    address,
    startDate,
    roomCount,
    homeType,
    flat,
    price,
    tradeType,
    maintenance,
    deposit,
    rent,
    floor,
    totalFloor,
    ageRange,
    openChatUrl,
    setOpenChatUrl,
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
    setDeposit,
    setRent,
    setFloor,
    setTotalFloor,
    setAgeRange,
    setAddressData,
    showAddressInfoModal
}) => {
    const [myHashtags, setMyHashtags] = useState([]);
    const [myHomeHashtags, setMyHomeHashtags] = useState([]);
    async function fetchHashTag() {
      await axios.get(`${baseURL}/api/home`, {
        withCredentials:true
      })
      .then((response) => {
        setMyHashtags(response.data.myHashtags);
        setMyHomeHashtags(response.data.myHomeHashtags);
      })
      .catch((error) => { console.log(`fetchHashTag axios error`)})
    }
    //위도 경도 설정 함수
    const searchLatLng = () => {
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(address, (data, status, _pagination) => {
          if (status === window.kakao.maps.services.Status.OK) {
            setX(data[0].y.toString());
            setY(data[0].x.toString());
            setAddress(data[0].road_address_name.toString());
            setAddressData(data[0]);
          }
          else {
            setX(null);
            setY(null);
            setAddressData(null);
          }
        });
    };

    useEffect(() => {
      fetchHashTag();
    }, [])

    return (
        <NewPostContentInfoContainer>
        <NewPostContentInfoDiv>
                        <TitleDiv height="4vh" marginTop="2vh">
                            <TitleBox width="90%" height="4vh">
                              <TitleSpan fontSize="1rem" lineHeight="4vh" fontWeight="600">입주 가능 날짜</TitleSpan>
                            </TitleBox>
                            <TitleBox width="90%" height="4vh">
                              <TitleSpan fontSize="1rem" lineHeight="4vh" fontWeight="600">룸메이트 가격</TitleSpan>
                            </TitleBox>
                        </TitleDiv>
                        <FirstSection
                          startDate={startDate}
                          rent={rent}
                          setStartDate={setStartDate}
                          setRent={setRent}
                        />
                        <TitleDiv height="3.5vh" marginTop="1.5vh">
                            <TitleSpan fontSize="1rem" lineHeight="3.5vh" fontWeight="600">룸메이트 선호 연령층</TitleSpan>
                        </TitleDiv>
                        <SecondSection 
                          ageRange={ageRange}
                          setAgeRange={setAgeRange}
                        />
                        <TitleDiv height="3.5vh" marginTop="1.5vh">
                            <TitleSpan fontSize="1rem" lineHeight="3.5vh" fontWeight="600">주소</TitleSpan>
                        </TitleDiv>
                        <AddressInfoSection
                          address={address}
                          setAddress={setAddress}
                          searchLatLng={searchLatLng}
                          showAddressInfoModal={showAddressInfoModal}
                        />
                        <TitleDiv height="4vh" marginTop="1.5vh">
                            <TitleBox width="25%" height="4vh">
                                <TitleSpan fontSize="1rem" lineHeight="4vh" fontWeight="600">방 개수</TitleSpan>
                            </TitleBox>
                            <TitleBox width="25%" height="4vh">
                                <TitleSpan fontSize="1rem" lineHeight="4vh" fontWeight="600">주거형태</TitleSpan>
                            </TitleBox>
                            <TitleBox width="16%" height="4vh">
                                <TitleSpan fontSize="1rem" lineHeight="4vh" fontWeight="600">전체층수</TitleSpan>
                            </TitleBox>
                            <TitleBox width="16%" height="4vh">
                                <TitleSpan fontSize="1rem" lineHeight="4vh" fontWeight="600">층수</TitleSpan>
                            </TitleBox>
                            <TitleBox width="16%" height="4vh">
                                <TitleSpan fontSize="1rem" lineHeight="4vh" fontWeight="600">평수</TitleSpan>
                            </TitleBox>
                        </TitleDiv>
                        <RoomCountTypeFlatInfoSection
                          roomCount={roomCount}
                          homeType={homeType}
                          flat={flat}
                          floor={floor}
                          totalFloor={totalFloor}
                          setRoomCount={setRoomCount}
                          setHomeType={setHomeType}
                          setFlat={setFlat}
                          setFloor={setFloor}
                          setTotalFloor={setTotalFloor}
                        />
                        <TitleDiv height="3.5vh" marginTop="1.5vh">
                            <TitleSpan fontSize="1rem" lineHeight="3.5vh" fontWeight="600">가격</TitleSpan>
                        </TitleDiv> 
                        <PriceInfoSection
                          price={price}
                          tradeType={tradeType}
                          maintenance={maintenance}
                          setPrice={setPrice}
                          setTradeType={setTradeType}
                          setMaintenance={setMaintenance}
                        />
                        <TitleDiv height="3vh" marginTop="1.5vh">
                            <TitleSpan fontSize="1rem" lineHeight="3vh" fontWeight="600">카카오톡 오픈채팅 링크</TitleSpan>
                        </TitleDiv> 
                        <GuaranteeSection 
                          deposit={deposit}
                          openChatUrl={openChatUrl}
                          setDeposit={setDeposit} 
                          setOpenChatUrl={setOpenChatUrl}
                        />
                        <TitleDiv height="4vh" marginTop="2vh">
                            <TitleSpan fontSize="1rem" marginRight="3.5vh" lineHeight="3.5vh" fontWeight="600">내 해시태그</TitleSpan>
                        </TitleDiv> 
                        <MyHashTagButtonSection
                          myHashtags={myHashtags}
                        />
                        <TitleDiv height="4vh" marginTop="2vh">
                            <TitleSpan fontSize="1rem" marginRight="2rem" lineHeight="3.5vh" fontWeight="600">집 해시태그</TitleSpan>
                        </TitleDiv>
                        <HouseHashTagButtonSection 
                          myHomeHashtags={myHomeHashtags}
                        />
        </NewPostContentInfoDiv>
        </NewPostContentInfoContainer>
    );
}

export default NewPostContentInfoSection;