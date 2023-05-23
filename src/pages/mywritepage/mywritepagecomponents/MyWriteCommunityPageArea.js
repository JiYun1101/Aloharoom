import axios from "axios";
import React, { useEffect, useState } from "react";
import baseURL from "../../api/baseURL";
import styled from "styled-components";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const LinkToCardStyle = {
    textDecoration: 'none',
    color: 'black'
}

const MyWriteCommunityPageEmptyContainer = styled.div`
    margin-top: 1vh;
    margin-left: 0.5vw;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MyWriteCommunityPageAreaContainer = styled.div`
    margin-top: 1vh;
    margin-left: 0.5vw;
    width: 34.5vw;
    height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 0.4rem;          /* 스크롤바의 너비 */
    }

    &::-webkit-scrollbar-thumb {
        height: 1%;             /* 스크롤바의 길이 */
        background: #BBBBBB;    /* 스크롤바의 색상 */
        border-radius: 1rem;
    }

    &::-webkit-scrollbar-track {
        background: white;      /*스크롤바 뒷 배경 색상*/
    }
`;

const MyWriteCommunityPageAreaFlexDiv = styled.div`
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
`;

const MyWriteCommunityPageAreaSpan = styled.span`
    line-height: ${props => props.lineHeight};
    margin-left: ${props => props.marginLeft};
    font-weight: ${props => props.fontWeight};
    margin-right: ${props => props.marginRight};
`;

const MyWriteCommunityPageProfile = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    border-radius: ${props => props.borderRadius};

`;

const CommunityTypeButton = styled.button`
    background-color: white;
    width: ${props => props.width};
    height: ${props => props.height};
    color: #47a5fd;
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    border: 2px solid #47a5fd;
    border-radius: 0.5rem;
`;

const MyWriteCommunityPageArea = () => {
    const [responseData, setResponseData] = useState([]);
    
    async function fetchMyWriteCommunityInfo() {
        await axios.get(`${baseURL}/api/communityboard/my/community`, {
            withCredentials:true
        })
        .then((response) => { 
            setResponseData(response.data);
            console.log('response.data', response.data);})
        .catch((error) => { console.log(`axios fetchMyWriteCommunityInfo error`);})
    }

    useEffect(() => {
        fetchMyWriteCommunityInfo();
    }, [])
    return (
        <>
        {responseData.length === 0 ? 
            <MyWriteCommunityPageEmptyContainer>
                <div style={{color: "#a0a0a0"}}>작성한 방이 없습니다.</div>
            </MyWriteCommunityPageEmptyContainer>    
        :
            <MyWriteCommunityPageAreaContainer>    
                {responseData.map((data, idx) => (
                    <Link to={`../CommunityInfoPage/${data.communityId}`} style={LinkToCardStyle}>
                        <MyWriteCommunityPageAreaFlexDiv key={idx} width="33.5vw" height="13vh" flexDirection="row" borderStyle="solid" borderColor="#bbbbbb" borderWidth="0.2rem" borderRadius="1rem" marginTop="1vh ">
                            <MyWriteCommunityPageAreaFlexDiv width="10vw" height="13vh" alignItems="center" justifyContent="center">
                                <MyWriteCommunityPageProfile width="90%" height="90%" src={data.imgUrls[0]}/>
                            </MyWriteCommunityPageAreaFlexDiv>
                            <MyWriteCommunityPageAreaFlexDiv width="33vw" height="13vh" flexDirection="column">
                                <MyWriteCommunityPageAreaFlexDiv width="100%" height="4vh" alignItems="center" marginLeft="0.5vw">
                                    <CommunityTypeButton height="2.5vh" width="auto">{data.contents}</CommunityTypeButton>
                                </MyWriteCommunityPageAreaFlexDiv>
                                <MyWriteCommunityPageAreaFlexDiv width="100%" height="4vh" alignItems="center">
                                    <MyWriteCommunityPageAreaSpan marginLeft="1vw" fontWeight="700">{data.title}</MyWriteCommunityPageAreaSpan>
                                </MyWriteCommunityPageAreaFlexDiv>
                                <MyWriteCommunityPageAreaFlexDiv width="100%" height="5vh" flexDirection="row">
                                    <MyWriteCommunityPageAreaFlexDiv width="50%" height="5vh" alignItems="center">
                                        <MyWriteCommunityPageProfile width="2vw" height="2vw" marginLeft="1vw" borderRadius="3rem" src="blue.png"/>
                                        <MyWriteCommunityPageAreaSpan marginLeft="0.5vw" fontSize="1rem" fontWeight="500">{data.nickname}</MyWriteCommunityPageAreaSpan>
                                    </MyWriteCommunityPageAreaFlexDiv>
                                    <MyWriteCommunityPageAreaFlexDiv width="50%" height="5vh" flexDirection="row-reverse" alignItems="center">
                                        <MyWriteCommunityPageAreaSpan marginRight="0.5vw" fontSize="1rem" fontWeight="500">{data.views}</MyWriteCommunityPageAreaSpan>
                                        <AiFillEye size={25} style={{ marginRight: "0.5vw"}}/>
                                    </MyWriteCommunityPageAreaFlexDiv>
                                </MyWriteCommunityPageAreaFlexDiv>
                            </MyWriteCommunityPageAreaFlexDiv>
                        </MyWriteCommunityPageAreaFlexDiv>
                    </Link>
                ))}
            </MyWriteCommunityPageAreaContainer>    
        }
        </>
    );
}

export default MyWriteCommunityPageArea;