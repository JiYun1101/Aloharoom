import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react"; // useRef를 추가
import Header from "../Header";
import styled from "styled-components";
import CardPost2 from "./CardPost2";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Segmented, Space } from "antd";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { Pagination } from "antd";

const Page = styled.div`
  margin-top: 1rem;
`;

const PageNum = styled.div`
  margin-top: 113rem;
  margin-left: 33rem;
`;

const CategoryNum = styled.div`
  text-align: center;
`;

const CardBox2 = styled.div`
  position: absolute;
  top: 13rem;
  left: 18.5vw;
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  overflow: auto;
  gap: 2rem;
`;

// const CardPost2 = styled.div`
//   min-width: 90%;
//   height: 10rem;
//   border-color: black;
//   border-style: solid;
//   border-radius: 1rem;
// `;

const CardPost3 = styled.div`
  position: absolute;
  right: 10px; // 왼쪽에서 10px 떨어진 위치
  width: 15%;
  height: 35rem;
  border-color: #bbbbbb;
  border-style: solid;
  border-radius: 1rem;
`;

const PostMapContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const LinkToStyle = {
  textDecoration: "none",
  color: "inherit",
};

const NewPostIconStyle = {
  position: "fixed",
  right: "2rem",
  bottom: "0.001rem",
  zIndex: "2",
  color: "#bbbbbb",
};

const Community = () => {
  const cardPost3Ref = useRef(null); // useRef를 사용하여 CardPost3의 ref를 생성

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      const cardPost3 = cardPost3Ref.current;
      if (cardPost3) {
        // CardPost3의 위치를 업데이트
        cardPost3.style.top = `${150 + scrollTop}px`;
      }
    };

    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 등록

    return () => {
      window.removeEventListener("scroll", handleScroll); // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    };
  }, []);

  return (
    <>
      <Header />
      <div className="App"></div>{" "}
      <Page>
        <CategoryNum>
          <Space direction="vertical">
            <Segmented
              options={[
                {
                  label: (
                    <div
                      style={{
                        padding: 4,
                      }}
                    >
                      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                      <div>User 1</div>
                    </div>
                  ),
                  value: "user1",
                },
                {
                  label: (
                    <div
                      style={{
                        padding: 4,
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#f56a00",
                        }}
                      >
                        K
                      </Avatar>
                      <div>User 2</div>
                    </div>
                  ),
                  value: "user2",
                },
                {
                  label: (
                    <div
                      style={{
                        padding: 4,
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#87d068",
                        }}
                        icon={<UserOutlined />}
                      />
                      <div>User 3</div>
                    </div>
                  ),
                  value: "user3",
                },
              ]}
            />
          </Space>
        </CategoryNum>
        <Link to="/newCommunityPostPage" style={LinkToStyle}>
          <AiOutlinePlusCircle size={50} style={NewPostIconStyle} />
        </Link>
        <CardBox2>
          <CardPost2 />
          <CardPost2 />
          <CardPost2 />
          <CardPost2 />
          <CardPost2 />
          <CardPost2 />
          <CardPost2 />
          <CardPost2 />
        </CardBox2>
        <CardPost3 ref={cardPost3Ref} /> {/* CardPost3에 ref 추가 */}
        <PageNum>
          <Pagination defaultCurrent={1} total={50} />
        </PageNum>
        ;
      </Page>
    </>
  );
};

export default Community;
