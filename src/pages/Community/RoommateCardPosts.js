import React from "react";
import CardPostContainer from "./CardPostContainer";
import CardPost from "./CardPost";
import { Link } from "react-router-dom";

const LinkToCardStyle = {
  textDecoration: "none",
  color: "black",
};

const RoommateCardPosts = ({ cardPostData, clickedCommunityId }) => {
  return (
    <CardPostContainer>
      {cardPostData.map((data, idx) => (
        <Link
          to={{
            pathname: `../CommunityInfoPage/${clickedCommunityId}`,
            state: { id: data.boardId },
          }}
          style={LinkToCardStyle}
          key={data.boardId}
        >
          <CardPost
            type="룸메이트"
            address={data.address}
            boardId={data.boardId}
            commentNum={data.commentNum}
            flat={data.flat}
            imageUrls={data.imageUrls}
            nickname={data.nickname}
            startDate={data.startDate}
          />
        </Link>
      ))}
    </CardPostContainer>
  );
};

export default RoommateCardPosts;
