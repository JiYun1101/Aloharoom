import React from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import NewPostHeaderSection from "./newpostpage2/NewPostHeaderSection";
import NewPostContentSection from "./newpostpage2/NewPostContentSection";
import { useState } from "react";
import AddressInfoModal from "../modal/AddressInfoModal";

const NewPostContainer = styled.div`
  position: relative;
  height: 57rem;
  display: flex;
  flex-direction: column;
`;

const BackPageIconStyle = {
  position: "absolute",
  top: "1rem",
  left: "1rem",
  color: "#47a5fd",
};

const NewCommunityPostPage = () => {
  const [isAddressInfoModalOpen, setIsAddressInfoModalOpen] = useState(false);
  const [addressData, setAddressData] = useState(null);
  const navigate = useNavigate();
  const showAddressInfoModal = () => {
    setIsAddressInfoModalOpen(true);
  };
  const handleAddressInfoOk = () => {
    setIsAddressInfoModalOpen(false);
  };
  const handleAddressInfoCancel = () => {
    setIsAddressInfoModalOpen(false);
  };
  return (
    <>
      {isAddressInfoModalOpen ? (
        <AddressInfoModal
          isAddressInfoModalOpen={isAddressInfoModalOpen}
          handleOk={handleAddressInfoOk}
          handelCancel={handleAddressInfoCancel}
          addressData={addressData}
        />
      ) : (
        <></>
      )}
      <NewPostContainer>
        <AiOutlineLeft
          size={40}
          style={BackPageIconStyle}
          onClick={() => navigate(-1)}
        />
        <NewPostHeaderSection />
        <NewPostContentSection
          showAddressInfoModal={showAddressInfoModal}
          setAddressData={setAddressData}
        />
      </NewPostContainer>
    </>
  );
};

export default NewCommunityPostPage;
