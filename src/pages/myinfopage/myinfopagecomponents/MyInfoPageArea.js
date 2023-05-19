import React, { useEffect, useState } from "react";
import styled from "styled-components";
import baseURL from "../../api/baseURL";
import axios from "axios";
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
const MyInfoPage = () => {
  const [responseData, setResponseData] = useState({});
  const [myHashtags, setMyHashtags] = useState([]);
  const [myHomeHashtags, setMyHomeHashtags] = useState([]);
  const [likeHashtags, setLikeHashtags] = useState([]);
  const [likeHomeHashtags, setLikeHomeHashtags] = useState([]);
  async function fetchMyInfoData() {
    await axios.get(`${baseURL}/api/myPage`, {
      withCredentials:true
    }) 
    .then((response) => {
      console.log('response.data', response.data);
      setResponseData(response.data);
      setMyHashtags(response.data.myHashtags);
      setMyHomeHashtags(response.data.myHomeHashtags);
      setLikeHashtags(response.data.likeHashtags);
      setLikeHomeHashtags(response.data.likeHomeHashtags)
    })
    .catch((error) => {
      console.log(`axios MyInfoPage error`);
    })
  }
  useEffect(() => {
    fetchMyInfoData();
  }, []);
  return (
      <MyInfoFlexDiv marginTop="0.5rem" marginLeft="0.5rem" width="36.5rem" height="500px" alignItems="center" justifyContent="center">
        <MyInfoFlexDiv width="36.5rem" height="500px" flexDirection="column" overflowY="auto" overflowX="auto" alignItems="center">
          <MyInfoFlexDiv width="34rem" height="25vh">
            <MyInfoFlexDiv width="40%" height="25vh" alignItems="center" justifyContent="center">
              <MyInfoProfile width="70%" height="70%" borderRadius="70%" src={responseData.profileUrl} />
            </MyInfoFlexDiv>
            <MyInfoFlexDiv width="60%" height="100%" flexDirection="column">
              <MyInfoFlexDiv width="100%" height="20%">
                <MyInfoFlexDiv width="30%" height="100%" alignItems="center">
                  <MyInfoSpan>아이디:</MyInfoSpan>
                </MyInfoFlexDiv>
                <MyInfoFlexDiv width="70%" height="100%" alignItems="center">
                  <MyInfoSpan>{responseData.username}</MyInfoSpan>
                </MyInfoFlexDiv>
              </MyInfoFlexDiv>
              <MyInfoFlexDiv width="100%" height="20%">
                <MyInfoFlexDiv width="30%" height="100%" alignItems="center">
                  <MyInfoSpan>비밀번호:</MyInfoSpan>
                </MyInfoFlexDiv>
                <MyInfoFlexDiv width="70%" height="100%" alignItems="center">
                  <MyInfoSpan>{`*******`}</MyInfoSpan>
                </MyInfoFlexDiv>
              </MyInfoFlexDiv>
              <MyInfoFlexDiv width="100%" height="20%">
                <MyInfoFlexDiv width="30%" height="100%" alignItems="center">
                  <MyInfoSpan>닉네임:</MyInfoSpan>
                </MyInfoFlexDiv>
                <MyInfoFlexDiv width="70%" height="100%" alignItems="center">
                  <MyInfoSpan>{responseData.nickname}</MyInfoSpan>
                </MyInfoFlexDiv>
              </MyInfoFlexDiv>
              <MyInfoFlexDiv width="100%" height="20%">
                  <MyInfoFlexDiv width="30%" height="100%" alignItems="center">
                    <MyInfoSpan>나이:</MyInfoSpan>
                  </MyInfoFlexDiv>
                  <MyInfoFlexDiv width="70%" height="100%" alignItems="center">
                    <MyInfoSpan>{responseData.age}</MyInfoSpan>
                  </MyInfoFlexDiv>
              </MyInfoFlexDiv>
              <MyInfoFlexDiv width="100%" height="20%">
                  <MyInfoFlexDiv width="30%" height="100%" alignItems="center">
                    <MyInfoSpan>성별:</MyInfoSpan>
                  </MyInfoFlexDiv>
                  <MyInfoFlexDiv width="70%" height="100%" alignItems="center">
                    <MyInfoSpan>{responseData.gender === 'male' ? `남자` : `여자`}</MyInfoSpan> 
                  </MyInfoFlexDiv>
              </MyInfoFlexDiv>
            </MyInfoFlexDiv>
          </MyInfoFlexDiv>
          <MyInfoFlexDiv width="34rem" height="auto" alignItems="center" marginTop="1rem">
            <MyInfoSpan fontSize="1.2rem">내 해시태그</MyInfoSpan>
          </MyInfoFlexDiv>
          {myHashtags.length === 0 ? 
            <MyInfoFlexDiv
              width="34rem"
              height="auto"
              marginTop="1rem"
              alignItems="center"
              justifyContent="center"
            >
              <div style={{color: "#a0a0a0"}}>설정한 내 해시태그가 없습니다.</div>
            </MyInfoFlexDiv>
          :
            <MyInfoFlexDiv 
              width="34rem" 
              height="auto"
              marginTop="1rem"
              flexDirection="row"
              flexWrap="wrap"
              gap="0.3rem"
            >
              {myHashtags.map((data, idx) => (
                <HashTagButton key={idx}>
                  {data}
                </HashTagButton>
              ))}
            </MyInfoFlexDiv>
          }
          <MyInfoFlexDiv width="34rem" height="auto" alignItems="center" marginTop="1rem">
            <MyInfoSpan fontSize="1.2rem">집 해시태그</MyInfoSpan>
          </MyInfoFlexDiv>
          {myHomeHashtags.length === 0 ? 
            <MyInfoFlexDiv
              width="34rem"
              height="auto"
              marginTop="1rem"
              alignItems="center"
              justifyContent="center"
            >
                <div style={{color: "#a0a0a0"}}>설정한 집 해시태그가 없습니다.</div>
            </MyInfoFlexDiv>
          :
          <MyInfoFlexDiv 
            width="34rem" 
            height="auto"
            marginTop="1rem"
            flexDirection="row"
            flexWrap="wrap"
            gap="0.5rem">
            {myHomeHashtags.map((data, idx) => (
              <HashTagButton key={idx}>
                {data}
              </HashTagButton>
            ))}
          </MyInfoFlexDiv>
          }
          <MyInfoFlexDiv width="34rem" height="auto" alignItems="center" marginTop="1rem">
            <MyInfoSpan fontSize="1.2rem">내 선호 해시태그</MyInfoSpan>
          </MyInfoFlexDiv>
          {likeHashtags.length === 0 ? 
            <MyInfoFlexDiv
              width="34rem"
              height="auto"
              marginTop="1rem"
              alignItems="center"
              justifyContent="center"
            >
              <div style={{color: "#a0a0a0"}}>설정한 내 해시태그가 없습니다.</div>
            </MyInfoFlexDiv>
          :
            <MyInfoFlexDiv 
              width="34rem" 
              height="auto"
              marginTop="1rem"
              flexDirection="row"
              flexWrap="wrap"
              gap="0.3rem"
            >
              {likeHashtags.map((data, idx) => (
                <HashTagButton key={idx}>
                  {data}
                </HashTagButton>
              ))}
            </MyInfoFlexDiv>
          }
          <MyInfoFlexDiv width="34rem" height="auto" alignItems="center" marginTop="1rem">
            <MyInfoSpan fontSize="1.2rem">내 집 선호 해시태그</MyInfoSpan>
          </MyInfoFlexDiv>
          {likeHomeHashtags.length === 0 ? 
            <MyInfoFlexDiv
              width="35rem"
              height="auto"
              marginTop="1rem"
              alignItems="center"
              justifyContent="center"
            >
              <div style={{color: "#a0a0a0"}}>설정한 내 해시태그가 없습니다.</div>
            </MyInfoFlexDiv>
          :
            <MyInfoFlexDiv 
              width="34rem" 
              height="auto"
              marginTop="1rem"
              flexDirection="row"
              flexWrap="wrap"
              gap="0.3rem"
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
