import React from "react";
import styled from "styled-components";

const MyInfoBox = styled.div`
  margin-top: 1.5rem;
  margin-left: 0.5rem;
  width: 480px;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyInfoDiv = styled.div`
  width: 400px;
  height: 480px;
  display: flex;
  flex-direction: column;
`;

const MyInfoProfileDiv = styled.div`
  width: 400px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 70%;
`;

const MyInfoContentDiv = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
  flex-direction: row;
`;

const MyInfoContentNoun = styled.div`
  width: 150px;
  height: 30px;
`;

const MyInfoContentSpan = styled.span`
  line-height: 30px;
  font-weight: 500;
  font-size: 1rem;
  color: #47a5fd;
`;

const MyInfoContentValue = styled.div`
  width: 250px;
  height: 30px;
`;

const MyInfoAddressInfoDiv = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: row;
`;

const MyInfoAddressDiv = styled.div`
  width: 150px;
  height: 30px;
`;

const MyInfoAddressValue = styled.div`
  width: 250px;
  height: 120px;
`;

const TasteHashTagDiv = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
  flex-direction: row;
`;

const TasteHashTagRow1Div = styled.div`
  width: 150px;
  height: 30px;
`;

const TasteHashTagRow2Div = styled.div`
  width: 250px;
  height: 30px;
`;

const HashTagNounSpan = styled.span`
  line-height: 30px;
  font-weight: 500;
  font-size: 1rem;
  color: #47a5fd;
`;

const HashTagModifySpan = styled.span`
  line-height: 30px;
  font-weight: 500;
  font-size: 0.8rem;
  color: #bbbbbb;
`;

const HashTagModifyButtonDiv = styled.div`
  width: 400px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HashTagModifyButton = styled.button`
  background-color: white;
  font-weight: 600;
  width: 10rem;
  height: 2rem;
  border: 2px solid #47a5fd;
  border-radius: 2rem;
  color: #47a5fd;
`;

const MyInfoButtonDiv = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
  flex-direction: row-reverse;
`;

const MyInfoModifySaveButton = styled.button`
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  background-color: white;
  font-weight: 600;
  width: 3rem;
  height: 1.5rem;
  border: 2px solid #bbbbbb;
  border-radius: 2rem;
  color: #bbbbbb;
`;

const MyInfoPage = () => {
  return (
    <>
      <MyInfoBox>
        <MyInfoDiv>
          <MyInfoProfileDiv>
            <MyProfileImg src="blue.png" />
          </MyInfoProfileDiv>
          <MyInfoContentDiv>
            <MyInfoContentNoun>
              <MyInfoContentSpan>이름:</MyInfoContentSpan>
            </MyInfoContentNoun>
            <MyInfoContentValue>
              <MyInfoContentSpan>fkgnssla</MyInfoContentSpan>
            </MyInfoContentValue>
          </MyInfoContentDiv>
          <MyInfoContentDiv>
            <MyInfoContentNoun>
              <MyInfoContentSpan>비밀번호:</MyInfoContentSpan>
            </MyInfoContentNoun>
            <MyInfoContentValue>
              <MyInfoContentSpan>fkgnssla</MyInfoContentSpan>
            </MyInfoContentValue>
          </MyInfoContentDiv>
          <MyInfoAddressInfoDiv>
            <MyInfoAddressDiv>
              <MyInfoContentSpan>주소:</MyInfoContentSpan>
            </MyInfoAddressDiv>
            <MyInfoAddressValue>
              <MyInfoContentSpan>
                서울시 성북구 삼선교로 6길, 한성대학교 서울시 성북구 삼선교로
                6길, 한성대학교 서울시 성북구 삼선교로 6길
              </MyInfoContentSpan>
            </MyInfoAddressValue>
          </MyInfoAddressInfoDiv>
          <TasteHashTagDiv>
            <TasteHashTagRow1Div>
              <HashTagNounSpan>취향해시태그</HashTagNounSpan>
            </TasteHashTagRow1Div>
            <TasteHashTagRow2Div>
              <HashTagModifySpan>
                (클릭으로 해시태그를 적용시킬 수 있습니다.)
              </HashTagModifySpan>
            </TasteHashTagRow2Div>
          </TasteHashTagDiv>
          <HashTagModifyButtonDiv>
            <HashTagModifyButton>내 태그 다시 설정하기</HashTagModifyButton>
          </HashTagModifyButtonDiv>
          <MyInfoButtonDiv>
            <MyInfoModifySaveButton>수정</MyInfoModifySaveButton>
            <MyInfoModifySaveButton>삭제</MyInfoModifySaveButton>
          </MyInfoButtonDiv>
        </MyInfoDiv>
      </MyInfoBox>
    </>
  );
};

export default MyInfoPage;
