import React from "react";
import styled from "styled-components";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

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
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  color: #47a5fd;
`;

const NavGroup = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 43vw;
`;

const NavElement = styled.span`
  margin-left: 1vw;
  margin-right: 1vw;
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

const Header = () => {
  return (
    <>
      <MenuBar>
        <Logo>aloharoom</Logo>
        <NavGroup>
          <NavElement>About</NavElement>
          <NavElement>게시물 보기</NavElement>
          <NavElement>새 글 쓰기</NavElement>
        </NavGroup>
        <LogoGroup>
          <LogoElement>
            <AiOutlineBell size={30} />
          </LogoElement>
          <LogoElement>
            <AiOutlineUser size={30} />
          </LogoElement>
        </LogoGroup>
        <Link to="../login">
          <Button>Login/Signup</Button>
        </Link>
      </MenuBar>
      <BlueLine />
    </>
  );
};

export default Header;
