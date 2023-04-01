import React from "react";
import RoommateCardPosts from "./RoommateSectionComponents/RoommateCardPosts";
import ShareHousePosts from "./ShareHouseSectionComponents/ShareHousePosts";

const CardPosts = ({roommatePosts, sharehousePosts}) => {
    return (
        <>
            {roommatePosts ?  <RoommateCardPosts/>: <></>}
            {sharehousePosts ? <ShareHousePosts/>:  <></>}
        </>
    );
}

export default CardPosts;