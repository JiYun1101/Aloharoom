import React from "react";
import styled from "styled-components";

const EmptyBoxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  z-index: 1;
`;

const EmptyBox = ({ setSearchStr }) => {
  return (
    <EmptyBoxContainer/>
  );
};

export default EmptyBox;
