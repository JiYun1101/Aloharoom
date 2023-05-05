import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import NotificationModal from "./NotificationModal";

const MenuBar = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
  font-family: "Pretendard-Regular";
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Logo = styled.span`
  position: absolute;
  left: 10vw;
  font-family: "Comfortaa" !important;
  font-weight: 500;
  font-size: 1.5rem;
  color: #47a5fd;
`;

const NavGroup = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 37.3vw;
`;

const NavElement = styled.span`
  margin-left: 3vw;
  margin-right: 3vw;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #47a5fd;
    text-decoration-thickness: 0.15rem;
    text-underline-offset: 0.4rem;
  }
`;

const LogoGroup = styled.span`
  position: absolute;
  right: 11vw;
  vertical-align: middle;
`;

const LogoElement = styled.span`
  margin-left: 0.5vw;
  margin-right: 0.5vw;
`;

const Button = styled.button`
  position: absolute;
  right: 3vw;
  background-color: white;
  width: 7rem;
  height: 2rem;
  border: 1px solid #47a5fd;
  border-radius: 2rem;
  color: #47a5fd;
`;

//width, 방식으로 준다.
const BlueLine = styled.hr`
  border: 0;
  height: 2px;
  background: #47a5fd;
`;

const LinkToStyle = {
  textDecoration: "none",
  color: "inherit",
};

const Header = () => {
  const [NotifyModalOpen, setNotifyModalOpen] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const ModalOpen = () => {
    setNotifyModalOpen(true);
  };

  const ModalClose = () => {
    setNotifyModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    console.log("Logged out successfully");
  };

  return (
    <>
      <MenuBar>
        {NotifyModalOpen ? (
          <NotificationModal ModalClose={ModalClose} />
        ) : (
          <></>
        )}
        <Link to="/about" style={LinkToStyle}>
          <Logo>aloharoom</Logo>
        </Link>
        <NavGroup>
          <Link to="/postMapPage" style={LinkToStyle}>
            <NavElement>방 보기</NavElement>
          </Link>
          <Link to="/Community" style={LinkToStyle}>
            <NavElement>커뮤니티</NavElement>
          </Link>
        </NavGroup>
        {username && (
          <LogoGroup>
            <LogoElement>
              <AiOutlineBell size={30} onClick={ModalOpen} />
            </LogoElement>
            <LogoElement>
              <Link to="/myPage" style={LinkToStyle}>
                <AiOutlineUser size={30} />
              </Link>
            </LogoElement>
          </LogoGroup>
        )}
        {username ? (
          <>
            <Button onClick={handleLogout}>Logout</Button>
            {console.log("username exists")}
          </>
        ) : (
          <Link to="../login">
            <Button>Login / Signup</Button>
          </Link>
        )}
        {username && console.log("username exists")}
      </MenuBar>
      <BlueLine />
    </>
  );
};

export default Header;
