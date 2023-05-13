import axios from "axios";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import baseURL from "../api/baseURL";
import ModalDiv from "./modalcomponents/ModalDiv";
import ModalFlexDiv from "./modalcomponents/ModalFlexDiv";
import ModalSpan from "./modalcomponents/ModalSpan";
import ModalProfileImg from "./modalcomponents/ModalProfileImg";

const NotificationModalContainer = styled.div`
    position: absolute;
    z-index: 5;
    width: 25rem;
    height: 25rem;
    background-color: white;
    right: 14vw;
    border-style: solid;
    border-width: 0.1rem;
    border-color: #47a5fd;
    border-radius: 0.5rem;
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

const NotificationModal = ({ModalClose, notificationData}) => {
    async function ReadNotification(notificationId) {
        await axios.post(`${baseURL}/api/notification/${notificationId}`,{}, {
            withCredentials:true
        })
        .then((response) => { console.log(`알림 읽기 성공`); })
        .catch((error) => { console.log(`알림 읽기 실패`);})
    }
    const location = useLocation();
    const startUrl = location.pathname === "/" ? "./" : "../";
    return (
        <NotificationModalContainer>
            <ModalFlexDiv width="25rem" height="3rem">
                <ModalDiv width="12rem" height="3rem">
                    <ModalDiv fontWeight="400" fontSize="1.5rem" marginTop="0.7rem" marginLeft="0.5rem">알림</ModalDiv>
                </ModalDiv>
                <ModalFlexDiv width="13rem" height="2rem" flexDirection="row-reverse">
                    <NotificationModalCloseButton onClick={ModalClose}>x</NotificationModalCloseButton> 
                </ModalFlexDiv>
            </ModalFlexDiv>
            <ModalFlexDiv width="99%" height="22rem" flexDirection="column" overFlowY="auto">
                {notificationData.map((data, index) => (
                    <Link 
                        key={index} 
                        to={data.flag === 0 ? `${startUrl}postInfoPage/${data.boardId}`: ``} 
                        style={LinkToStyle}
                        onClick={() => { ReadNotification(data.notificationId);}}
                    >
                        <ModalFlexDiv 
                            key={index} 
                            width="98%" 
                            height="5rem" 
                            flexDirection="row" 
                            borderBottom="1px solid black"
                        >
                            <ModalFlexDiv
                                width="20%"
                                height="100%"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <ModalProfileImg 
                                    width="4rem"
                                    height="4rem" 
                                    borderRadius="8rem" 
                                    src={data.profileUrl}
                                />
                            </ModalFlexDiv>
                            <ModalFlexDiv
                                width="79%"
                                height="100%"
                                flexDirection="column"
                            >
                                <ModalDiv width="100%" height="60%">
                                    <ModalSpan fontWeight={!data.isCheck && `600`}>
                                        {data.flag === 0 ? `방 보기 페이지 ${data.content}` : `커뮤니티 페이지 ${data.content}`}
                                    </ModalSpan>
                                </ModalDiv>
                                <ModalFlexDiv width="100%" height="40%" flexDirection="row-reverse" alignItems="center">
                                    <ModalSpan 
                                        marginRight="0.5rem"
                                        fontWeight={!data.isCheck && `600`}
                                    >
                                        {data.createdDate}
                                    </ModalSpan>
                                </ModalFlexDiv>
                            </ModalFlexDiv>
                        </ModalFlexDiv>
                    </Link>
                ))}
            </ModalFlexDiv>
        </NotificationModalContainer>
    );
}

export default NotificationModal;