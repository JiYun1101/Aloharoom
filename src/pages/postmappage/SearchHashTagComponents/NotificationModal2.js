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

  border-style: solid;
  border-width: 0.1rem;
  border-color: #47a5fd;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
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
  display: flex; /* 가운데 정렬을 위해 display: flex; 추가 */
  justify-content: center; /* 가로 방향 가운데 정렬 */
  align-items: center; /* 세로 방향 가운데 정렬 */
`;

const NotificationTitle2 = styled.div`
  font-weight: 400;
  font-size: 2rem;
  text-align: center; /* 가운데 정렬 */
  margin-top: 1.4px;
  color: #47a5fd;
`;

const NotificationModalCloseButtonDiv2 = styled.div`
  display: flex;
  align-items: center;
`;

const NotificationModalCloseButton2 = styled.button`
  margin-right: 3.5rem;
  font-size: 2.5rem;
  color: #47a5fd;
  background-color: white;
  border-radius: 0.5rem;
  border-style: none;
  z-index: 999;
`;

const FilterFormDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* 가로 방향 가운데 정렬 */
  align-items: center; /* 세로 방향 가운데 정렬 */
`;

const FilterForm2 = styled.div`
  margin-top: 5rem;
  width: 40rem;
  height: 40rem;
`;

const NotificationModal2 = ({ ModalClose = (f) => f }) => {
  return (
    <NotificationModalDiv2>
      <NotificationModalHeaderDiv2>
        <NotificationDiv3>
          <Notification3>초기화</Notification3>
        </NotificationDiv3>
        <NotificationTitleDiv2>
          <NotificationTitle2>맞춤필터</NotificationTitle2>
        </NotificationTitleDiv2>
        <NotificationModalCloseButtonDiv2>
          <NotificationModalCloseButton2 onClick={ModalClose}>
            x
          </NotificationModalCloseButton2>
        </NotificationModalCloseButtonDiv2>
      </NotificationModalHeaderDiv2>
      <FilterFormDiv>
        <FilterForm2>
          <FilterForm />
        </FilterForm2>
      </FilterFormDiv>
    </NotificationModalDiv2>
  );
};

export default NotificationModal2;