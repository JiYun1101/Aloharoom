import React from 'react'
import CardPostContainer from '../CardPostContainer'
import CardPost from '../CardPost'

const RoommateCardPosts = ({cardPostData}) => {
    return (
        <CardPostContainer>
            {cardPostData.map((data, idx) => (
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
            ))}
        </CardPostContainer>
    );
}

export default RoommateCardPosts


