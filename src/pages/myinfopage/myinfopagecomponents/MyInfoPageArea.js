import React from "react";
import styled from "styled-components";
import HashTagButton from "../../HashTagButton";
const MyInfoFlexDiv = styled.div`
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    align-items: ${props => props.alignItems};
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    overflow-x: ${props => props.overflowX};
    overflow-y: ${props => props.overflowY};
    border-style: ${props => props.borderStyle};
    border-color: ${props => props.borderColor};
    border-width: ${props => props.borderWidth};
    border-radius: ${props => props.borderRadius};
    flex-wrap: ${props => props.flexWrap};
    gap: ${props => props.gap};
    &::-webkit-scrollbar {
        width: 0.5rem;          /* 스크롤바의 너비 */
    }

    &::-webkit-scrollbar-thumb {
        height: 1%;             /* 스크롤바의 길이 */
        background: #bbbbbb;    /* 스크롤바의 색상 */
        border-radius: 1rem;
    }
    &::-webkit-scrollbar-track {
        background: white;      /*스크롤바 뒷 배경 색상*/
    }
`;

const MyInfoSpan = styled.span`
    line-height: ${props => props.lineHeight};
    margin-left: ${props => props.marginLeft};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    margin-right: ${props => props.marginRight};
`

const MyInfoProfile = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    border-radius: ${props => props.borderRadius};
`;
//아이디, 비밀번호, 닉네임, 나이, 성별, 프로필 사진, 해시태그 목록
const MyInfoPage = ({
    responseData,
    myHashtags,
    myHomeHashtags,
    likeHashtags,
    likeHomeHashtags,
    fetchMyInfoData
}) => {

  return (
      <MyInfoFlexDiv marginTop="0.7vh" marginLeft="0.4vw" width="34.2vw" height="55vh" alignItems="center" justifyContent="center">
        <MyInfoFlexDiv width="34.2vw" height="55vh" flexDirection="column" overflowY="auto" overflowX="auto" alignItems="center">
          <MyInfoFlexDiv width="99%" height="25vh">
            <MyInfoFlexDiv width="40%" height="25vh" alignItems="center" justifyContent="center">
              <MyInfoProfile width="70%" height="70%" borderRadius="70%" src={responseData.profileUrl} />
            </MyInfoFlexDiv>
            <MyInfoFlexDiv width="60%" height="100%" flexDirection="column">
              <MyInfoFlexDiv width="100%" height="20%">
                <MyInfoFlexDiv width="30%" height="100%" alignItems="center">
                  <MyInfoSpan fontWeight="600">아이디:</MyInfoSpan>
                </MyInfoFlexDiv>
                <MyInfoFlexDiv width="70%" height="100%" alignItems="center">
                  <MyInfoSpan>{responseData.username}</MyInfoSpan>
                </MyInfoFlexDiv>
              </MyInfoFlexDiv>
              <MyInfoFlexDiv width="100%" height="20%">
                <MyInfoFlexDiv width="30%" height="100%" alignItems="center">
                  <MyInfoSpan fontWeight="600">비밀번호:</MyInfoSpan>
                </MyInfoFlexDiv>
                <MyInfoFlexDiv width="70%" height="100%" alignItems="center">
                  <MyInfoSpan>{`*******`}</MyInfoSpan>
                </MyInfoFlexDiv>
              </MyInfoFlexDiv>
              <MyInfoFlexDiv width="100%" height="20%">
                <MyInfoFlexDiv width="30%" height="100%" alignItems="center">
                  <MyInfoSpan fontWeight="600">닉네임:</MyInfoSpan>
                </MyInfoFlexDiv>
                <MyInfoFlexDiv width="70%" height="100%" alignItems="center">
                  <MyInfoSpan>{responseData.nickname}</MyInfoSpan>
                </MyInfoFlexDiv>
              </MyInfoFlexDiv>
              <MyInfoFlexDiv width="100%" height="20%">
                  <MyInfoFlexDiv width="30%" height="100%" alignItems="center">
                    <MyInfoSpan fontWeight="600">나이:</MyInfoSpan>
                  </MyInfoFlexDiv>
                  <MyInfoFlexDiv width="70%" height="100%" alignItems="center">
                    <MyInfoSpan>{responseData.age}</MyInfoSpan>
                  </MyInfoFlexDiv>
              </MyInfoFlexDiv>
              <MyInfoFlexDiv width="100%" height="20%">
                  <MyInfoFlexDiv width="30%" height="100%" alignItems="center">
                    <MyInfoSpan fontWeight="600">성별:</MyInfoSpan>
                  </MyInfoFlexDiv>
                  <MyInfoFlexDiv width="70%" height="100%" alignItems="center">
                    <MyInfoSpan>{responseData.gender === 'male' ? `남자` : `여자`}</MyInfoSpan> 
                  </MyInfoFlexDiv>
              </MyInfoFlexDiv>
            </MyInfoFlexDiv>
          </MyInfoFlexDiv>
          <MyInfoFlexDiv width="94%" height="auto" alignItems="center" marginTop="2vh">
            <MyInfoSpan fontSize="1.2rem" fontWeight="600">내 해시태그</MyInfoSpan>
          </MyInfoFlexDiv>
          {myHashtags.length === 0 ? 
            <MyInfoFlexDiv
              width="94%"
              height="auto"
              marginTop="2vh"
              alignItems="center"
              justifyContent="center"
            >
              <div style={{color: "#a0a0a0"}}>설정한 내 해시태그가 없습니다.</div>
            </MyInfoFlexDiv>
          :
            <MyInfoFlexDiv 
              width="94%"
              height="auto"
              marginTop="2vh"
              flexDirection="row"
              flexWrap="wrap"
              gap="0.3vw"
            >
              {myHashtags.map((data, idx) => (
                <HashTagButton key={idx}>
                  {data}
                </HashTagButton>
              ))}
            </MyInfoFlexDiv>
          }
          <MyInfoFlexDiv width="94%" height="auto" alignItems="center" marginTop="1rem">
            <MyInfoSpan fontSize="1.2rem" fontWeight="600">집 해시태그</MyInfoSpan>
          </MyInfoFlexDiv>
          {myHomeHashtags.length === 0 ? 
            <MyInfoFlexDiv
              width="94%"
              height="auto"
              marginTop="1rem"
              alignItems="center"
              justifyContent="center"
            >
                <div style={{color: "#a0a0a0"}}>설정한 집 해시태그가 없습니다.</div>
            </MyInfoFlexDiv>
          :
          <MyInfoFlexDiv 
            width="94%" 
            height="auto"
            marginTop="1rem"
            flexDirection="row"
            flexWrap="wrap"
            gap="0.3vw"
          >
            {myHomeHashtags.map((data, idx) => (
              <HashTagButton key={idx}>
                {data}
              </HashTagButton>
            ))}
          </MyInfoFlexDiv>
          }
          <MyInfoFlexDiv width="94%" height="auto" alignItems="center" marginTop="1rem">
            <MyInfoSpan fontSize="1.2rem" fontWeight="600">내 선호 해시태그</MyInfoSpan>
          </MyInfoFlexDiv>
          {likeHashtags.length === 0 ? 
            <MyInfoFlexDiv
              width="94%"
              height="auto"
              marginTop="2vh"
              alignItems="center"
              justifyContent="center"
            >
              <div style={{color: "#a0a0a0"}}>설정한 내 해시태그가 없습니다.</div>
            </MyInfoFlexDiv>
          :
            <MyInfoFlexDiv 
              width="94%"
              height="auto"
              marginTop="2vh"
              flexDirection="row"
              flexWrap="wrap"
              gap="0.3vw"
            >
              {likeHashtags.map((data, idx) => (
                <HashTagButton key={idx}>
                  {data}
                </HashTagButton>
              ))}
            </MyInfoFlexDiv>
          }
          <MyInfoFlexDiv width="94%" height="auto" alignItems="center" marginTop="2vh">
            <MyInfoSpan fontSize="1.2rem" fontWeight="600">내 집 선호 해시태그</MyInfoSpan>
          </MyInfoFlexDiv>
          {likeHomeHashtags.length === 0 ? 
            <MyInfoFlexDiv
              width="94%"
              height="auto"
              marginTop="2vh"
              alignItems="center"
              justifyContent="center"
            >
              <div style={{color: "#a0a0a0"}}>설정한 내 해시태그가 없습니다.</div>
            </MyInfoFlexDiv>
          :
            <MyInfoFlexDiv 
              width="94%"
              height="auto"
              marginTop="2vh"
              flexDirection="row"
              flexWrap="wrap"
              gap="0.3vw"
            >
              {likeHomeHashtags.map((data, idx) => (
                <HashTagButton key={idx}>
                  {data}
                </HashTagButton>
              ))}
            </MyInfoFlexDiv>
          }
        </MyInfoFlexDiv>
      </MyInfoFlexDiv>
  );
};

export default MyInfoPage;
