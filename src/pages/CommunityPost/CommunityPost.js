import React, { useState } from "react";
import styled from "styled-components";
import CardPosts from "./CardPosts";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Segmented, Space } from "antd";
import { Pagination } from "antd";
import { Link } from "react-router-dom"; // Link import 추가
// import CardPost2 from "./Community";

import { Button, Form, Input, Radio } from "antd";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  margin: 1rem 0;
  margin-right: 10rem;
  display: flex;
  justify-content: center;
`;

const FormItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const Post = ({ clickedCommunityId, cardPostData }) => {
  const [roommatePosts, setRoomMatePosts] = useState(true);
  const [sharehousePosts, setShareHousePosts] = useState(false);
  const [code, setCode] = useState(1); // 코드 초기값을 null로 변경

  const roommatePostsClick = () => {
    setRoomMatePosts(true);
    setShareHousePosts(false);
  };

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  const handleAvatarClick = (code) => {
    // handleAvatarClick 함수 추가
    setCode(code);
  };

  return (
    <>
      <Page>
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          initialValues={{
            layout: formLayout,
          }}
          onValuesChange={onFormLayoutChange}
          style={{
            maxWidth: 600,
          }}
        >
          <div>
            <FormContainer
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormItemContainer>
                <Form.Item label="검색창" style={{ marginRight: "1rem" }}>
                  <Input placeholder="검색어를 입력하세요" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary">Submit</Button>
                </Form.Item>
              </FormItemContainer>
            </FormContainer>
          </div>
        </Form>
        <CategoryNum>
          <Space>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={{ pathname: "/community", search: "?code=1" }}>
                <Avatar
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                  onClick={() => handleAvatarClick(1)}
                />
                <div>User 1</div>
              </Link>
              <Link to={{ pathname: "/community", search: "?code=2" }}>
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                  }}
                  onClick={() => handleAvatarClick(2)} // onClick 이벤트 추가
                >
                  K
                </Avatar>
                <div>User 2</div>
              </Link>
              <Link to={{ pathname: "/community", search: "?code=3" }}>
                <Avatar
                  style={{
                    backgroundColor: "#87d068",
                  }}
                  icon={<UserOutlined />}
                  onClick={() => handleAvatarClick(3)} // onClick 이벤트 추가
                />
                <div>User 3</div>
              </Link>
            </div>
          </Space>
        </CategoryNum>
        <CardPost3 style={{ textAlign: "center", alignItems: "center" }}>
          <h2>가장 인기 있는 글</h2>
          <p>1. 내 방 자랑</p>
          <p>2. 새로운 청소기</p>
          <p>3. 오늘의 일기</p>
        </CardPost3>{" "}
        {/* CardPost3에 ref 추가 */}
      </Page>
    </>
  );
};

export default Post;
