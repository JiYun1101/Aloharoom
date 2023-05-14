import RoommateCardPosts from "./RoommateCardPosts";
// import ShareHousePosts from "./ShareHouseSectionComponents/ShareHousePosts";

const CardPosts = ({ roommatePosts, cardPostData, clickedCommunityId }) => {
  return (
    <>
      {roommatePosts ? (
        <RoommateCardPosts
          cardPostData={cardPostData}
          clickedCommunityId={clickedCommunityId}
        />
      ) : (
        <></>
      )}
      {/* {sharehousePosts ? <ShareHousePosts /> : <></>} */}
    </>
  );
};

export default CardPosts;
