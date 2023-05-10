import React, { useState } from "react";
import styled from "styled-components";
import NotificationModal2 from "./NotificationModal2";
import { IoSearchCircleSharp, IoFilterOutline } from "react-icons/io5";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SearchSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  z-index: 1;
`;

const SearchInput = styled.input`
  width: 36%;
  height: 40%;
  border-style: solid;
  border-radius: 2rem;
  border-color: #47a5fd;
  z-index: 1;
`;

const FilterIconStyle = {
  marginRight: "2rem",
  marginLeft: "1rem",
  color: "#47A5FD",
};

const SearchIconStyle = {
  position: "absolute",
  right: "2rem",
  zIndex: "3",
  marginRight: "3rem",
  marginLeft: "1rem",
  color: "#47A5FD",
};

const Search = ({
  cardPostData,
  setSearchStr,
  setCardPostData
}) => {
  const [inputValue, setInputValue] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setSearchStr(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };
  const [NotifyModalOpen, setNotifyModalOpen] = useState(false);

  const ModalOpen = () => {
    setNotifyModalOpen(true);
  };

  const ModalClose = () => {
    setNotifyModalOpen(false);
  };

  return (
    <SearchSection>
      {" "}
      {NotifyModalOpen ? 
        <NotificationModal2 
          cardPostData={cardPostData}
          setCardPostData={setCardPostData}
          ModalClose={ModalClose}
          /> 
        : 
        <></>
      }
      <IoFilterOutline size={30} style={FilterIconStyle} onClick={ModalOpen} />
      <IoSearchCircleSharp
        size={30}
        style={SearchIconStyle}
        onClick={handleButtonClick}
      />
      <SearchInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </SearchSection>
  );
};

export default Search;
