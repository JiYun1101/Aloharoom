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
    color: #47A5FD;
`;

const MyInfoContentValue = styled.div`
    width: 250px;
    height: 30px;
`;

const MyInfoAddressInfoDiv = styled.div`
    width: 400px;
    height: 120px;
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

const MyInfoPage = () => {
    return (
        <>
            <MyInfoBox>
                <MyInfoDiv>
                    <MyInfoProfileDiv>
                        <MyProfileImg src="blue.png"/>
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
                            <MyInfoContentSpan>서울시 성북구 삼선교로 6길, 한성대학교 서울시 성북구 삼선교로 6길, 한성대학교 서울시 성북구 삼선교로 6길</MyInfoContentSpan>
                        </MyInfoAddressValue>
                    </MyInfoAddressInfoDiv>
                </MyInfoDiv>
            </MyInfoBox>
        </>
    );
}

export default MyInfoPage;