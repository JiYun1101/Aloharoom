import React, { useState } from "react";
import styled from "styled-components";
import NotificationModal2 from "./NotificationModal2";
import { IoFilterOutline } from "react-icons/io5";
import { Input } from "antd";
const { Search } = Input;

const SearchSectionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  z-index: 1;
`;

const FilterIconStyle = {
  marginRight: "2rem",
  marginLeft: "1rem",
  color: "#47A5FD",
};

const SearchSection = ({
  setSearchStr,
  fetchCardPostData,
  fetchFilterCardPostData
}) => {
  const [NotifyModalOpen, setNotifyModalOpen] = useState(false);
  const ModalOpen = () => {
    setNotifyModalOpen(true);
  };

  const ModalClose = () => {
    setNotifyModalOpen(false);
  };

  const onSearch = (value) => {
    setSearchStr(value);
  }

  return (
    <SearchSectionContainer>
      {" "}
      {NotifyModalOpen ? 
        <NotificationModal2 
          ModalClose={ModalClose}
          fetchCardPostData={fetchCardPostData}
          fetchFilterCardPostData={fetchFilterCardPostData}
          /> 
        : 
        <></>
      }
      {localStorage.getItem('userId') ? <IoFilterOutline size={30} style={FilterIconStyle} onClick={ModalOpen} /> : <></>}
      <Search
        placeholder="지명을 입력하세요"
        size="large"
        allowClear
        onSearch={onSearch}
        style={{
          width: 300,
          marginRight: "0.7rem"
        }}
      />
    </SearchSectionContainer>
  );
};

export default SearchSection;
