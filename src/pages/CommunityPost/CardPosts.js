import React from "react";
import styled from "styled-components";
import CardPost from "./CardPost";

const CardPostListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CardPosts = ({
  code,
  cardPostData,
  setCardPostData,
}) => {
  console.log('cardPostData', cardPostData);
  return (
    <CardPostListWrapper>
        <CardPost
          code={code}
          cardPostData={cardPostData}
          setCardPostData={setCardPostData}
        />
    </CardPostListWrapper>
  );
};

export default CardPosts;
