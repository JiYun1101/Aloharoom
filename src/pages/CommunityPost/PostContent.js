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
import HotCardPosts from "./HotCardPosts"; // CardPosts import

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
    console.log(code);
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
      <CardPosts />
      <CardPost3>
        <HotCardPosts />
      </CardPost3>
      <Link to="/newCommunityPostPage" style={LinkToStyle}>
        <AiOutlinePlusCircle size={50} style={NewPostIconStyle} />
      </Link>
    </PostMapContentContainer>
  );
};

export default PostContent;
