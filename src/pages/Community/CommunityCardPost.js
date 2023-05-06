import React from "react";
import CardPostContainer2 from "./CardPostContainer";
import CardPost from "./Community";
import { Link } from "react-router-dom";

const LinkToCardStyle = {
  textDecoration: "none",
  color: "black",
};

const CommunityCardPost = ({ cardPostData }) => {
  return (
    <CardPostContainer2>
      {cardPostData &&
        cardPostData.map((data, idx) => (
          <Link
            to={`../communityInfoPage/${data.boardId}`}
            style={LinkToCardStyle}
            key={idx}
          >
            <CardPost
              type="룸메이트"
              address={data.address}
              boardId={data.boardId}
              commentNum={data.commentNum}
              flat={data.flat}
              imageUrls={data.imageUrls}
              nickname={data.nickname}
              rent={data.rent}
              roomCount={data.roomCount}
              startDate={data.startDate}
            />
          </Link>
        ))}
    </CardPostContainer2>
  );
};

export default CommunityCardPost;
