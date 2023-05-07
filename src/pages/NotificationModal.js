import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotificationModalContainer = styled.div`
    position: absolute;
    z-index: 5;
    width: 20rem;
    height: 20rem;
    background-color: white;
    right: 14vw;
    border-style: solid;
    border-width: 0.1rem;
    border-color: #47a5fd;
    border-radius: 0.5rem;
`;

const NotificationModalFlexDiv = styled.div`
    width: ${props => props.width || "0rem"};
    height: ${props => props.height || "0rem"};
    display: flex;
    flex-direction:${props => props.flexDirection || "row"};
    align-items:${props => props.alignItems};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    overflow-y: ${props => props.overFlowY};
    border-bottom: ${props => props.borderBottom};
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

const NotificationModalDiv = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
`;

const NotificationModalSpan = styled.span`
    color: #47a5fd;
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    margin-right: ${props => props.marginRight};
`;

const NotificationModalCloseButton = styled.button`
    margin-right: 0.5rem;
    font-size: 1.5rem;
    color: #47a5fd;
    background-color: white;
    border-radius: 0.5rem;
    border-style:none;
`;

const LinkToStyle = {
    textDecoration: "none",
    color: "inherit",
};

const NotificationModal = ({ModalClose}) => {
    const [notificationData, setNotificationData] = useState([]);
    async function fetchNotificationInfo() {
        await axios.get(`http://localhost:8080/api/notification`, {
            withCredentials:true
        })
        .then((response) => {
            console.log('notification Data:', response.data);
            setNotificationData(response.data);
        })
        .catch((error) => { console.log(`fetchNotificationInfo axios error`);})
    }
    useEffect(() => {
        fetchNotificationInfo();
    }, []);
    return (
        <NotificationModalContainer>
            <NotificationModalFlexDiv width="20rem" height="3rem">
                <NotificationModalDiv width="10rem" height="3rem">
                    <NotificationModalDiv fontWeight="400" fontSize="1.5rem" marginTop="0.7rem" marginLeft="0.5rem">알림</NotificationModalDiv>
                </NotificationModalDiv>
                <NotificationModalFlexDiv width="10rem" height="2rem" flexDirection="row-reverse">
                    <NotificationModalCloseButton onClick={ModalClose}>x</NotificationModalCloseButton> 
                </NotificationModalFlexDiv>
            </NotificationModalFlexDiv>
            <NotificationModalFlexDiv width="99%" height="16.5rem" flexDirection="column" overFlowY="auto">
                {notificationData.map((data, index) => (
                    <Link to={data.flag === 0 ? `./postInfoPage/${data.boardId}`: ``} style={LinkToStyle}>
                        <NotificationModalFlexDiv 
                            key={index} 
                            width="98%" 
                            height="5rem" 
                            flexDirection="column" 
                            borderBottom="1px solid #47a5fd"
                        >
                            <NotificationModalDiv width="100%" height="60%">
                                <NotificationModalSpan>
                                    {data.flag === 0 ? `방 보기 페이지 ${data.content}` : `커뮤니티 페이지 ${data.content}`}
                                </NotificationModalSpan>
                            </NotificationModalDiv>
                            <NotificationModalFlexDiv width="100%" height="40%" flexDirection="row-reverse" alignItems="center">
                                <NotificationModalSpan marginRight="0.5rem">{data.createdDate}</NotificationModalSpan>
                            </NotificationModalFlexDiv>
                        </NotificationModalFlexDiv>
                    </Link>
                ))}
            </NotificationModalFlexDiv>
        </NotificationModalContainer>
    );
}

export default NotificationModal;