import React from "react";
import styled from "styled-components";
import MyInfoPageBox from "./MyInfoPageBox";

const MyInfoPageContainer = styled.div`
    width: 100%;  
`;
const MyPageSection = ({
    isMyProfileUpdateModalOpen,
    setIsMyProfileUpdateModalOpen,
    responseData,
    myHashtags,
    myHomeHashtags,
    likeHashtags,
    likeHomeHashtags,
    fetchMyInfoData
}) => {
    return (
        <MyInfoPageContainer>
            <MyInfoPageBox
                isMyProfileUpdateModalOpen={isMyProfileUpdateModalOpen}
                setIsMyProfileUpdateModalOpen={setIsMyProfileUpdateModalOpen}
                responseData={responseData}
                myHashtags={myHashtags}
                myHomeHashtags={myHomeHashtags}
                likeHashtags={likeHashtags}
                likeHomeHashtags={likeHomeHashtags}
                fetchMyInfoData={fetchMyInfoData}
            />
        </MyInfoPageContainer>
    );
}

export default MyPageSection;