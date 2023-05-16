import React, { useState } from "react";
// import SearchHashTag from "./SearchHashTag";

import styled from "styled-components";
// import MapPost from "./MapPost";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Segmented, Space } from "antd";

import { Button, Form, Input, Radio } from "antd";
import CardPosts from "./CardPosts"; // CardPosts import

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
  position: "absolute",
  right: "2rem",
  bottom: "0.001rem",
  zIndex: "2",
  color: "#bbbbbb",
};

const PostContent = () => {
  const [code, setCode] = useState(1); // 코드 초기값을 null로 변경
  const [isCardPostsVisible, setIsCardPostsVisible] = useState(true); // CardPosts의 가시성 상태 추가

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
    setCode(code);
    console.log(code);
  };

  const handleNavigation = () => {
    setIsCardPostsVisible(false); // navigation 이벤트가 발생하면 CardPosts를 가려줍니다.
  };

  return (
    <PostMapContentContainer>
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
            <Link
              to={{ pathname: "/community", search: "?code=1" }}
              onClick={() => {
                handleNavigation();
                setIsCardPostsVisible(true);
              }} // navigation 이벤트 핸들러 추가 및 CardPosts 가시성 상태 변경
            >
              <Avatar
                style={{
                  backgroundColor: "#f56a00",
                }}
                onClick={() => handleAvatarClick(2)}
              >
                K
              </Avatar>
              <div>User 2</div>
            </Link>
            <Link
              to={{ pathname: "/community", search: "?code=3" }}
              onClick={handleNavigation} // navigation 이벤트 핸들러 추가
            >
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
                onClick={() => handleAvatarClick(3)}
              />
              <div>User 3</div>
            </Link>
          </div>
        </Space>
      </CategoryNum>
      <CardPosts />
      <CardPost3 style={{ textAlign: "center", alignItems: "center" }}>
        <h2>가장 인기 있는 글</h2>
        <p>1. 내 방 자랑</p>
        <p>2. 새로운 청소기</p>
        <p>3. 오늘의 일기</p>
      </CardPost3>{" "}
      <Link to="/newCommunityPostPage" style={LinkToStyle}>
        <AiOutlinePlusCircle size={50} style={NewPostIconStyle} />
      </Link>
    </PostMapContentContainer>
  );
};

export default PostContent;
