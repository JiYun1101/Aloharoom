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

const NewPostContentInfoDiv = styled.div`
  border-style: solid;
  border-color: #47a5fd;
  border-radius: 1rem;
  width: 85%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
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
`;

const TitleBox = styled.div`
  width: ${props => props.width || '0rem'};
  height: ${props => props.height || '0rem'};
`;

const TitleSpan = styled.span`
  color: #47a5fd;
  font-size: ${ props => props.fontSize || "1rem"};
  line-height: ${ props => props.lineHeight || "0rem"};
  margin-right: ${ props => props.marginRight || "0rem"};
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
    setTitle,
    setAgeRange
}) => {
    //위도 경도 설정 함수
    const searchLatLng = () => {
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(address, (data, status, _pagination) => {
          if (status === window.kakao.maps.services.Status.OK) {
            setX(data[0].y.toString());
            setY(data[0].x.toString());
            setTitle(data[0].road_address_name.toString());
          }
          else {
            setX(null);
            setY(null);
          }
        });
    };

    return (
        <NewPostContentInfoDiv>
                        <TitleDiv height="2rem" marginTop="2rem">
                            <TitleBox width="90%" height="2rem ">
                              <TitleSpan fontSize="1rem" lineHeight="2rem">입주 가능 날짜</TitleSpan>
                            </TitleBox>
                            <TitleBox width="90%" height="2rem ">
                              <TitleSpan fontSize="1rem" lineHeight="2rem">룸메이트 가격</TitleSpan>
                            </TitleBox>
                        </TitleDiv>
                        <FirstSection
                          startDate={startDate}
                          rent={rent}
                          setStartDate={setStartDate}
                          setRent={setRent}
                        />
                        <TitleDiv height="2rem" marginTop="1rem">
                            <TitleSpan fontSize="1rem" lineHeight="2rem">룸메이트 선호 연령층</TitleSpan>
                        </TitleDiv>
                        <SecondSection 
                          ageRange={ageRange}
                          setAgeRange={setAgeRange}
                        />
                        <TitleDiv height="2rem" marginTop="1rem">
                            <TitleSpan fontSize="1rem" lineHeight="2rem">주소</TitleSpan>
                        </TitleDiv>
                        <AddressInfoSection
                          address={address}
                          setAddress={setAddress}
                          searchLatLng={searchLatLng}
                        />
                        <TitleDiv height="3rem" marginTop="1.5rem">
                            <TitleBox width="25%" height="3rem">
                                <TitleSpan fontSize="1rem" lineHeight="3rem">방 개수</TitleSpan>
                            </TitleBox>
                            <TitleBox width="25%" height="3rem">
                                <TitleSpan fontSize="1rem" lineHeight="3rem">주거형태</TitleSpan>
                            </TitleBox>
                            <TitleBox width="16%" height="3rem">
                                <TitleSpan fontSize="1rem" lineHeight="3rem">전체층수</TitleSpan>
                            </TitleBox>
                            <TitleBox width="16%" height="3rem">
                                <TitleSpan fontSize="1rem" lineHeight="3rem">층수</TitleSpan>
                            </TitleBox>
                            <TitleBox width="16%" height="3rem">
                                <TitleSpan fontSize="1rem" lineHeight="3rem">평수</TitleSpan>
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
                        <TitleDiv height="2rem" marginTop="1.5rem">
                            <TitleSpan fontSize="1rem" lineHeight="2rem">가격</TitleSpan>
                        </TitleDiv> 
                        <PriceInfoSection
                          price={price}
                          tradeType={tradeType}
                          maintenance={maintenance}
                          setPrice={setPrice}
                          setTradeType={setTradeType}
                          setMaintenance={setMaintenance}
                        />
                        <GuaranteeSection 
                          deposit={deposit}
                          setDeposit={setDeposit} 
                        />
                        <TitleDiv height="2rem" marginTop="1.5rem">
                            <TitleSpan fontSize="1rem" marginRight="2rem">집 해시태그</TitleSpan>
                        </TitleDiv>
                        <HouseHashTagButtonSection/>
                        <TitleDiv height="2rem" marginTop="1.5rem">
                            <TitleSpan fontSize="1rem" marginRight="2rem">내 해시태그</TitleSpan>
                        </TitleDiv>    
                        <MyHashTagButtonSection/>
                    </NewPostContentInfoDiv>
    );
}

export default NewPostContentInfoSection;