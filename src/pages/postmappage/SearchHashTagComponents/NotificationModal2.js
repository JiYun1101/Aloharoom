import React from "react";
import styled from "styled-components";
import FilterForm from "./FilterForm";

const NotificationModalDiv2 = styled.div`
  position: absolute;
  z-index: 999;
  width: 45rem;
  height: 45rem;
  background-color: white;
  top: 15%;
  right: 2%;
  border-style: solid;
  border-width: 0.1rem;
  border-color: #47a5fd;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  //z-index: 1;
`;

const NotificationModalHeaderDiv2 = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const NotificationDiv3 = styled.div`
  width: 20%;
  height: 3rem;
  display: flex; /* 가운데 정렬을 위해 display: flex; 추가 */
  justify-content: center; /* 가로 방향 가운데 정렬 */
  align-items: left; /* 세로 방향 가운데 정렬 */
  z-index: 999;
`;

const Notification3 = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 15px;
  color: #47a5fd;
`;

const NotificationTitleDiv2 = styled.div`
  width: 100%;
  margin-left: 0px;
  height: 3rem;
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

const NotificationTitle2 = styled.div`
  font-weight: 500;
  font-size: 2rem;
  text-align: center; 
  margin-top: 1.4px;
`;

const NotificationModalCloseButtonDiv2 = styled.div`
  display: flex;
  align-items: center;
`;

const NotificationModalCloseButton2 = styled.button`
  margin-right: 3.5rem;
  font-size: 2.5rem;
  background-color: white;
  border-radius: 0.5rem;
  border-style: none;
  z-index: 999;
  cursor: pointer;
`;

const FilterFormDiv = styled.div`
  width: 44.7rem;
  height: 42rem;
  display: flex;
  justify-content: center;
  align-items: center; 
  overflow-y: auto;
  &::-webkit-scrollbar {
        width: 0.5rem;          
    }

  &::-webkit-scrollbar-thumb {
    height: 1%;             
    background: #bbbbbb;    
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: white;      
  }
`;

const FilterForm2 = styled.div`
  width: 40rem;
  height: 40rem;
`;

const FilterClearButton = styled.button`
  width: auto;
  height: 2.5rem;
  font-size: 1.5rem;
  color: #a0a0a0;
  background-color: #E2E2E2;
  border-style: none;
  border-radius: 0.5rem;
  margin-top: 15px;
  cursor: pointer;
`;



const NotificationModal2 = ({ 
  ModalClose,
  fetchCardPostData,
  fetchFilterCardPostData,
  myLikeHashtags,
  myLikeHomeHashtags
}) => {
  return (
    <NotificationModalDiv2>
      <NotificationModalHeaderDiv2>
        <NotificationDiv3>
          <FilterClearButton
            onClick={() => {
              localStorage.removeItem('pressFilterButton');
              localStorage.removeItem('gender');
              localStorage.removeItem('roomCount');
              localStorage.removeItem('homeType');
              localStorage.removeItem('ageRange');
              localStorage.removeItem('flatRange');
              localStorage.removeItem('rentRange');
              localStorage.removeItem('likeHashtags');
              localStorage.removeItem('likeHomeHashtags');
              localStorage.setItem('pressFilterButton', 0);
              fetchCardPostData();
              ModalClose();
            }}
          >
            초기화
          </FilterClearButton>
        </NotificationDiv3>
        <NotificationTitleDiv2>
          <NotificationTitle2>{`맞춤 필터`}</NotificationTitle2>
        </NotificationTitleDiv2>
        <NotificationModalCloseButtonDiv2>
          <NotificationModalCloseButton2
            onClick={ModalClose}
          >
            x
          </NotificationModalCloseButton2>
        </NotificationModalCloseButtonDiv2>
      </NotificationModalHeaderDiv2>
      <FilterFormDiv>
        <FilterForm2>
          <FilterForm
            ModalClose={ModalClose}
            fetchFilterCardPostData={fetchFilterCardPostData}
            myLikeHashtags={myLikeHashtags}
            myLikeHomeHashtags={myLikeHomeHashtags}
          />
        </FilterForm2>
      </FilterFormDiv>
    </NotificationModalDiv2>
  );
};

export default NotificationModal2;
