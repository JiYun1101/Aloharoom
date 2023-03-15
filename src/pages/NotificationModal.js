import React from "react";
import styled from "styled-components";

const NotificationModalDiv = styled.div`
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

const NoticationModalCloseButtonDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;

const NotificationModalCloseButton = styled.button`
    margin-right: 0.2rem;
    font-size: 1.5rem;
    color: #47a5fd;
    background-color: white;
    border-radius: 0.5rem;
    border-style:none;
`;

const NotificationModal = ({ModalClose = f => f}) => {
    return (
        <NotificationModalDiv>
            <NoticationModalCloseButtonDiv>
                <NotificationModalCloseButton onClick={ModalClose}>x</NotificationModalCloseButton>
            </NoticationModalCloseButtonDiv>
        </NotificationModalDiv>
    );
}

export default NotificationModal;
