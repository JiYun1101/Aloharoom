import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import NotificationModal from "./modal/NotificationModal";
import { Badge,  Dropdown, Menu } from "antd";
import axios from "axios";
import baseURL from "./api/baseURL";
import LogoutModal from "./modal/LogoutModal";

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
  const navigate = useNavigate();
  const [notificationData, setNotificationData] = useState([]);
  const [NotifyModalOpen, setNotifyModalOpen] = useState(false);
  const [notReadNotificationCount, setNotReadNotificationCount] = useState({});
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const handleIsLogoutCancel = () => {
    setIsLogoutModalOpen(false);
  };
  const handleIsLogoutOk = () => {
    userLogout();
    localStorage.clear();
    navigate(`../login`);
  };

  const ModalOpen = () => {
    setNotifyModalOpen(true);
  };

  const ModalClose = () => {
    setNotifyModalOpen(false);
  };

  async function fetchUserId() {
    await axios
      .get(`${baseURL}/api/userId`, {
        withCredentials: true,
      })
      .then((response) => {
        localStorage.setItem("nickname", response.data.nickname);
        localStorage.setItem("userId", response.data.loginUserId);
      })
      .catch((error) => {
        console.log(`fetchUserId axios error`);
      });
  }

  async function userLogout() {
    await axios
      .get(`${baseURL}/logout`, {
        withCredentials: true,
      })
      .then((response) => {
        localStorage.remove("username");
        localStorage.remove("nickname");
        localStorage.remove("userId");
        console.log("axios logout success");
      })
      .catch((error) => {
        console.log("axios userLogOut error");
      });
  }

  async function fetchNotificationInfo() {
    await axios
      .get(`${baseURL}/api/notification`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("notification Data:", response.data);
        setNotificationData(response.data);
      })
      .catch((error) => {
        console.log(`fetchNotificationInfo axios error`);
      });
  }

  async function fetchNotReadNotificationCount() {
    await axios
      .get(`${baseURL}/api/notification/count`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("notification count:", response.data);
        setNotReadNotificationCount(response.data);
      })
      .catch((error) => {
        console.log(`fetchNotReadNotificationCount axios error`);
      });
  }

  const handleMenuClick = (e) => {
    console.log('Menu clicked:', e);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="myInfoPage">
        <Link to="/myInfoPage">내 정보 보기 페이지</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/page2">Page 2</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/page3">Page 3</Link>
      </Menu.Item>
    </Menu>
  );


  useEffect(() => {
    if (localStorage.getItem("username")) {
      fetchUserId();
      fetchNotificationInfo();
      fetchNotReadNotificationCount();
    }
  }, []);
  return (
    <>
      {isLogoutModalOpen ? (
        <LogoutModal
          isLogoutModalOpen={isLogoutModalOpen}
          handleOk={handleIsLogoutOk}
          handelCancel={handleIsLogoutCancel}
        />
      ) : (
        <></>
      )}
      <MenuBar>
        {NotifyModalOpen ? (
          <NotificationModal
            ModalClose={ModalClose}
            notificationData={notificationData}
          />
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
          <Link to="/CommunityPage" style={LinkToStyle}>
            <NavElement>커뮤니티</NavElement>
          </Link>
        </NavGroup>
        {localStorage.getItem("username") ? (
          <LogoGroup>
            <LogoElement>
              <Badge
                count={notReadNotificationCount.notificationCount}
                size="small"
                overflowCount={10}
              >
                <AiOutlineBell
                  size={30}
                  onClick={() => {
                    fetchNotificationInfo();
                    ModalOpen();
                  }}
                />
              </Badge>
            </LogoElement>
            <LogoElement>
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={(e) => {e.preventDefault()}}>
                  <AiOutlineUser size={30} />
                </a>
              </Dropdown>
            </LogoElement>
          </LogoGroup>
        ) : (
          <></>
        )}
        {localStorage.getItem("username") ? (
          <Button
            onClick={() => {
              setIsLogoutModalOpen(true);
            }}
          >
            Logout
          </Button>
        ) : (
          <Link to="../login">
            <Button>Login / Signup</Button>
          </Link>
        )}
      </MenuBar>
      <BlueLine />
    </>
  );
};

export default Header;
