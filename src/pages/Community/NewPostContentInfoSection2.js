import React from "react";
import styled from "styled-components";
import MoveInDateMonthInfoSection from "../newpostpage/newpostcontentinfocomponents/MoveInDateMonthInfoSection";
import AddressInfoSection from "../newpostpage/newpostcontentinfocomponents/AddressInfoSection";
import RoomCountTypeFlatInfoSection from "../newpostpage/newpostcontentinfocomponents/RoomCountTypeFlatInfoSection";
import PriceInfoSection from "../newpostpage/newpostcontentinfocomponents/PriceInfoSection";
import GuaranteeSection from "../newpostpage/newpostcontentinfocomponents/GuaranteeSection";
import HouseHashTagButtonSection from "../newpostpage/newpostcontentinfocomponents/HouseHashTagButtonSection";
import MyHashTagButtonSection from "../newpostpage/newpostcontentinfocomponents/MyHashTagButtonSection";

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

const MoveInDateTitleSpan = styled.span`
  color: #47a5fd;
  font-size: 1rem;
  line-height: 2rem;
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

const NewPostContentInfoSection2 = ({
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
  setDeposit,
}) => {
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
      <MoveInDateMonthInfoSection startDateOnChange={startDateOnChange} />
      <AddressTitleDiv>
        <AddressTitleSpan>주소</AddressTitleSpan>
      </AddressTitleDiv>
      <AddressInfoSection
        address={address}
        setAddress={setAddress}
        searchLatLng={searchLatLng}
      />
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
      <RoomCountTypeFlatInfoSection
        setRoomCount={setRoomCount}
        setHomeType={setHomeType}
        setFlat={setFlat}
      />
      <PriceTitleDiv>
        <PriceTitleSpan>가격</PriceTitleSpan>
      </PriceTitleDiv>
      <PriceInfoSection
        tradeType={tradeType}
        setPrice={setPrice}
        setTradeType={setTradeType}
        setMaintenance={setMaintenance}
      />
      <GuaranteeSection setDeposit={setDeposit} />
      <HouseHashTagTitleDiv>
        <HouseHashTagTitleSpan>집 해시태그</HouseHashTagTitleSpan>
        <HouseHashTagTitleInfoSpan>
          (클릭으로 해시태그를 적용시킬 수 있습니다.)
        </HouseHashTagTitleInfoSpan>
      </HouseHashTagTitleDiv>
      <HouseHashTagButtonSection />
      <MyHashTagTitleDiv>
        <MyHashTagTitleSpan>내 해시태그</MyHashTagTitleSpan>
      </MyHashTagTitleDiv>
      <MyHashTagButtonSection />
    </NewPostContentInfoDiv>
  );
};

export default NewPostContentInfoSection2;
