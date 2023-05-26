import axios from "axios";
import React, { useEffect, useState } from "react";
import baseURL from "../../api/baseURL";
import styled from "styled-components";
import { AiFillEye } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";

const LinkToCardStyle = {
    textDecoration: 'none',
    color: 'black'
}

const MyCommentCommunityPageEmptyContainer = styled.div`
    margin-top: 1vh;
    margin-left: 0.5vw;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MyCommentCommunityPageAreaContainer = styled.div`
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

const MyCommentCommunityPageAreaFlexDiv = styled.div`
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

const MyCommentCommunityPageAreaSpan = styled.span`
    line-height: ${props => props.lineHeight};
    margin-left: ${props => props.marginLeft};
    font-weight: ${props => props.fontWeight};
    margin-right: ${props => props.marginRight};
`;

const MyCommentCommunityPageProfile = styled.img`
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


const MyCommentPageCommunityArea = () => {
    const [responseData, setResponseData] = useState([]);
    
    async function fetchMyCommentCommunityInfo() {
        await axios.get(`${baseURL}/api/communityboard/my/comment`, {
            withCredentials:true
        })
        .then((response) => { 
            setResponseData(response.data);
            console.log('response.data', response.data);})
        .catch((error) => { console.log(`axios fetchMyCommentCommunityInfo error`);})
    }

    useEffect(() => {
        fetchMyCommentCommunityInfo();
    }, [])
    return (
        <>
        {responseData.length === 0 ? 
            <MyCommentCommunityPageEmptyContainer>
                <div style={{color: "#a0a0a0"}}>댓글을 작성한 커뮤니티글이 없습니다.</div>
            </MyCommentCommunityPageEmptyContainer>    
        :
            <MyCommentCommunityPageAreaContainer>    
                {responseData.map((data, idx) => (
                    <Link to={`../CommunityInfoPage/${data.communityId}`} style={LinkToCardStyle}>
                        <MyCommentCommunityPageAreaFlexDiv key={idx} width="33.5vw" height="13vh" flexDirection="row" borderStyle="solid" borderColor="#bbbbbb" borderWidth="0.2rem" borderRadius="1rem" marginTop="1vh ">
                            <MyCommentCommunityPageAreaFlexDiv width="10vw" height="13vh" alignItems="center" justifyContent="center">
                                <MyCommentCommunityPageProfile width="90%" height="90%" src={data.imgUrls[0]}/>
                            </MyCommentCommunityPageAreaFlexDiv>
                            <MyCommentCommunityPageAreaFlexDiv width="33vw" height="13vh" flexDirection="column">
                                <MyCommentCommunityPageAreaFlexDiv width="100%" height="4vh" alignItems="center" marginLeft="0.5vw">
                                    <CommunityTypeButton height="2.5vh" width="auto">
                                        {data.code === 1 ? `방자랑` : data.code === 2 ? `정보 공유` : `자랑`}
                                    </CommunityTypeButton>
                                </MyCommentCommunityPageAreaFlexDiv>
                                <MyCommentCommunityPageAreaFlexDiv width="100%" height="4vh" alignItems="center">
                                    <MyCommentCommunityPageAreaSpan marginLeft="1vw" fontWeight="700">{data.title}</MyCommentCommunityPageAreaSpan>
                                </MyCommentCommunityPageAreaFlexDiv>
                                <MyCommentCommunityPageAreaFlexDiv width="100%" height="5vh" flexDirection="row">
                                    <MyCommentCommunityPageAreaFlexDiv width="50%" height="5vh" alignItems="center">
                                        <MyCommentCommunityPageProfile width="2vw" height="2vw" marginLeft="1vw" borderRadius="3rem" src={data.profile}/>
                                        <MyCommentCommunityPageAreaSpan marginLeft="0.5vw" fontSize="1rem" fontWeight="500">{data.nickname}</MyCommentCommunityPageAreaSpan>
                                    </MyCommentCommunityPageAreaFlexDiv>
                                    <MyCommentCommunityPageAreaFlexDiv width="50%" height="5vh" flexDirection="row-reverse" alignItems="center">
                                        <MyCommentCommunityPageAreaSpan marginRight="0.5vw" fontSize="1rem" fontWeight="500">{data.commentNum}</MyCommentCommunityPageAreaSpan>
                                        <FaRegCommentDots size={25} style={{ marginRight: "0.5vw"}}/>
                                        <MyCommentCommunityPageAreaSpan marginRight="0.5vw" fontSize="1rem" fontWeight="500">{data.views}</MyCommentCommunityPageAreaSpan>
                                        <AiFillEye size={25} style={{ marginRight: "0.5vw"}}/>
                                    </MyCommentCommunityPageAreaFlexDiv>
                                </MyCommentCommunityPageAreaFlexDiv>
                            </MyCommentCommunityPageAreaFlexDiv>
                        </MyCommentCommunityPageAreaFlexDiv>
                    </Link>
                ))}
            </MyCommentCommunityPageAreaContainer>    
        }
        </>
    );
}

export default MyCommentPageCommunityArea;