import React from "react";
import CardPost2 from "./CardPost2";
import CommunityCardPost from "./CommunityCardPost";

const CardPosts = ({ roommatePosts, sharehousePosts, cardPostData }) => {
  return (
    <>
      {roommatePosts ? (
        <CommunityCardPost cardPostData={cardPostData} />
      ) : (
        <></>
      )}
      {sharehousePosts ? <CommunityCardPost /> : <></>}
    </>
  );
};

export default CardPosts;
