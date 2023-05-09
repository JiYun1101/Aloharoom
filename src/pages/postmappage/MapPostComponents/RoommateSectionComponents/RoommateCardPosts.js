import React from "react";
import CardPostContainer from "../CardPostContainer";
import CardPost from "../CardPost";
import { Link } from "react-router-dom";

const LinkToCardStyle = {
  textDecoration: "none",
  color: "black",
};

const RoommateCardPosts = ({cardPostData}) => {
    return (
        <CardPostContainer>
            {cardPostData.map((data, idx) => (
                <Link key={idx} to={`../postInfoPage/${data.boardId}`} style={LinkToCardStyle}>
                    <CardPost 
                        key={idx}
                        type="룸메이트"
                        address={data.address}
                        boardId={data.boardId}
                        commentNum={data.commentNum}
                        flat={data.flat}
                        imageUrl={data.imageUrl}
                        nickname={data.nickname}
                        rent={data.rent}
                        roomCount={data.roomCount}
                        startDate={data.startDate}
                    />
                </Link>
            ))}
        </CardPostContainer>
    );
}

export default RoommateCardPosts;