import React from "react";
import RoommateCardPosts from "./RoommateSectionComponents/RoommateCardPosts";
import ShareHousePosts from "./ShareHouseSectionComponents/ShareHousePosts";

const CardPosts = ({
    roommatePosts,
    sharehousePosts,
    cardPostData
}) => {
    return (
        <>
            {roommatePosts ?  <RoommateCardPosts cardPostData={cardPostData}/>: <></>}
            {sharehousePosts ? <ShareHousePosts/>:  <></>}
        </>
    );
}

export default CardPosts;