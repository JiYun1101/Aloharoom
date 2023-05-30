import axios from "axios";
import React, { useEffect } from "react";
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
    background-color: white;
    border-radius: 0.5rem;
    border-style:none;
    cursor: pointer;
`;

const LinkToStyle = {
    textDecoration: "none",
    color: "inherit",
};

const NotificationModal = ({ModalClose, notificationData, fetchNotReadNotificationCount}) => {
    async function ReadNotification(notificationId) {
        await axios.post(`${baseURL}/api/notification/${notificationId}`,{}, {
            withCredentials:true
        })
        .then((response) => {
            fetchNotReadNotificationCount();
            ModalClose();
        })
        .catch((error) => {})
    }

    useEffect(() => {
        fetchNotReadNotificationCount();
    }, []);

    const frontStrArr = [];
    const commentArr = [];
    const backStrArr = [];
    const prefixArr = [];
    const nicknames = [];
    const suffixArr = [];

    const extractPrefixSuffixStr = (content, target) => {
        // 정규식을 사용하여 admin3 앞의 문자열과 뒤의 문자열 추출
        const regex = new RegExp(`(.*)${target}`);
        const match = regex.exec(content);
        // 결과 출력
        if (match && match.length > 1) {
            const prefix = match[1];
            prefixArr.push(prefix);
            const suffix = content.substring(prefix.length + target.length);
            suffixArr.push(suffix);
        } else {
            console.log(`"${target}"을 찾을 수 없습니다.`);
        }
    }

    const extractNickname = (content) => {
        const regex = /에\s(.*?)님이/;
        const match = regex.exec(content);
        if (match && match.length > 1) {
            nicknames.push(match[1]);
            return match[1];
        } 
    }

    const extractComment = (comment) => {
        const extractedString = comment.match(/"(.*?)"/)[1];
        commentArr.push(extractedString);
        const frontStr = comment.split(`"${extractedString}"`)[0]
        frontStrArr.push(frontStr);
        const backStr = comment.split(`"${extractedString}"`)[1]
        backStrArr.push(backStr);
    }

    //문장에서 닉네임과 앞, 뒤 문자열 추출
    notificationData.map((data, index) => {
        const target = extractNickname(data.content);
        extractPrefixSuffixStr(data.content, target);
        extractComment(prefixArr[index]);
    })

    const location = useLocation();
    const startUrl = location.pathname === "/" ? "./" : "../";
    return (
        <NotificationModalContainer>
            <ModalFlexDiv width="25rem" height="3rem" borderBottom="solid 1px #808080">
                <ModalDiv width="12rem" height="3rem">
                    <ModalDiv fontWeight="600" fontSize="1.5rem" marginTop="0.7rem" marginLeft="0.5rem">알림</ModalDiv>
                </ModalDiv>
                <ModalFlexDiv width="13rem" height="3rem" flexDirection="row-reverse" alignItems="center">
                    <NotificationModalCloseButton onClick={ModalClose}>x</NotificationModalCloseButton> 
                </ModalFlexDiv>
            </ModalFlexDiv>
            {notificationData.length === 0 ? 
                <ModalFlexDiv width="99%" height="21.9rem" alignItems="center" justifyContent="center">
                    <div style={{ color: "#bbbbbb"}}>알림이 없습니다.</div>
                </ModalFlexDiv>    
            :
                <ModalFlexDiv width="99%" height="21.9rem" flexDirection="column" overFlowY="auto">
                    {notificationData.map((data, index) => (
                        <Link 
                            key={index} 
                            to={data.flag === 0 ? `${startUrl}postInfoPage/${data.boardId}`: `${startUrl}CommunityInfoPage/${data.boardId}`} 
                            style={LinkToStyle}
                            onClick={() => { ReadNotification(data.notificationId);}}
                        >
                            <ModalFlexDiv 
                                key={index} 
                                width="99%" 
                                height="4.5rem" 
                                flexDirection="row" 
                                borderBottom={`1px solid ${!data.isCheck ? `#808080`: `#a0a0a0`}`}
                            >
                                <ModalFlexDiv
                                    width="20%"
                                    height="100%"
                                    marginTop="0.5rem"
                                    justifyContent="center"
                                >
                                    <ModalProfileImg 
                                        width="3.5rem"
                                        height="3.5rem" 
                                        borderRadius="8rem" 
                                        src={data.profileUrl}
                                    />
                                </ModalFlexDiv>
                                <ModalFlexDiv
                                    width="79%"
                                    height="100%"
                                    flexDirection="column"
                                >
                                    <ModalDiv width="100%" height="59%" marginTop="1%">
                                        <ModalSpan 
                                            color={!data.isCheck ? `black`: `#a0a0a0`}
                                            fontWeight={!data.isCheck && `500`}
                                        >
                                            {frontStrArr[index]}
                                        </ModalSpan>
                                        <ModalSpan 
                                            color={!data.isCheck ? `black`: `#a0a0a0`}
                                            fontWeight={!data.isCheck && `600`}
                                        >
                                            {`"${commentArr[index]}"`}
                                        </ModalSpan>
                                        <ModalSpan 
                                            color={!data.isCheck ? `black`: `#a0a0a0`}
                                            fontWeight={!data.isCheck && `500`}
                                        >
                                            {backStrArr[index]}
                                        </ModalSpan>
                                        <ModalSpan 
                                            color={!data.isCheck ? `#47a5fd`: `#a0a0a0`}
                                            fontWeight={!data.isCheck && `600`}
                                        >
                                            {nicknames[index]}
                                        </ModalSpan>
                                        <ModalSpan 
                                            color={!data.isCheck ? `black`: `#a0a0a0`}
                                            fontWeight={!data.isCheck && `500`}
                                        >
                                            {suffixArr[index]}
                                        </ModalSpan>
                                    </ModalDiv>
                                    <ModalFlexDiv width="100%" height="40%" flexDirection="row-reverse" alignItems="center">
                                        <ModalSpan 
                                            marginRight="0.5rem"
                                            color={!data.isCheck ? `#808080`: `#a0a0a0`}
                                            fontWeight={!data.isCheck && `500`}
                                        >
                                            {data.createdDate}
                                        </ModalSpan>
                                    </ModalFlexDiv>
                                </ModalFlexDiv>
                            </ModalFlexDiv>
                        </Link>
                    ))}
                </ModalFlexDiv>
            }
        </NotificationModalContainer>
    );
}

export default NotificationModal;