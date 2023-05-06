import React from "react";
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
`;

const NotificationModalDiv = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
`;

const NotificationModalCloseButton = styled.button`
    margin-right: 0.5rem;
    font-size: 1.5rem;
    color: #47a5fd;
    background-color: white;
    border-radius: 0.5rem;
    border-style:none;
`;

const NotificationModal = ({ModalClose}) => {
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
        </NotificationModalContainer>
    );
}

export default NotificationModal;