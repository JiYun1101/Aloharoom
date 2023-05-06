import React, { useState } from "react";
import styled from "styled-components";
import CardPosts from "./CardPosts";
import PostNavs from "./PostNavs";
import Header from "../Header";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Segmented, Space } from "antd";
import { Pagination } from "antd";
// import CardPost2 from "./Community";

const Page = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const PageNum = styled.div`
  margin-top: 113rem;
  margin-left: 33rem;
`;

const CategoryNum = styled.div`
  text-align: center;
`;

const CardPost3 = styled.div`
  position: fixed;
  top: 10rem;
  right: 2%;
  width: 15%;
  height: 35rem;
  border-color: #bbbbbb;
  border-style: solid;
  border-radius: 1rem;
`;

// const PostContainer = styled.div`
//   border-width: 0.1rem;
//   border-style: solid;
//   border-color: #bbbbbb;
//   width: 48%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

const Post = ({ cardPostData }) => {
  const [roommatePosts, setRoomMatePosts] = useState(true);
  const [sharehousePosts, setShareHousePosts] = useState(false);

  const roommatePostsClick = () => {
    setRoomMatePosts(true);
    setShareHousePosts(false);
  };

  return (
    <>
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
        <PostNavs roommatePostsClick={roommatePostsClick} />
        <CardPosts roommatePosts={roommatePosts} cardPostData={cardPostData} />
        <CardPost3 style={{ textAlign: "center", alignItems: "center" }}>
          <h2>가장 인기 있는 글</h2>
          <p>1. 내 방 자랑</p>
          <p>2. 새로운 청소기</p>
          <p>3. 오늘의 일기</p>
        </CardPost3>{" "}
        {/* CardPost3에 ref 추가 */}
        <PageNum>
          <Pagination defaultCurrent={1} total={50} />
        </PageNum>
      </Page>
    </>
  );
};

export default Post;
