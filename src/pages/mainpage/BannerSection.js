import React from "react";
import styled from "styled-components";
import aloharoom from "../../img/aloharoom.jpg";

const BannerImageBox = styled.div`
  position: absolute;
  top: 4rem;
`;

const BannerImage = styled.img`
  width: 60rem;
  height: 33rem;
  border-radius: 0.5rem;
`;

const BannerSection = () => {
  return (
    <BannerImageBox>
      <BannerImage src={aloharoom} />
      {/* <BannerImage src="aloharoom.jpg" /> */}
    </BannerImageBox>
  );
};

export default BannerSection;
