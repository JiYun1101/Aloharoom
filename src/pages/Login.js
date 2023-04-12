import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../style/Login.css";
import { UserOutlined } from "@ant-design/icons";
import { Input, Button, message } from "antd";

import { Form, Checkbox } from "antd";
import LockOutlined from "@ant-design/icons";
import axios from "axios";
import styled from "styled-components";

const Logo = styled.span`
  position: absolute;
  left: 12.5vw;
  top: 5vw;
  font-family: "Comfortaa" !important;
  font-weight: 500;
  font-size: 1.5rem;
  color: #47a5fd;
`;

const qs = require("qs");

const onFinish = async (value) => {
  try {
    console.log("username :" + value.username);
    console.log("password :" + value.password);

    const data = qs.stringify({
      username: value.username,
      password: value.password,
    });

    await axios.post("http://localhost:8080/login", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: true, // 이 부분 추가
    });

    message.success("Processing complete!");
    console.log("username:" + value.username);
    console.log("Registration successful");
  } catch (error) {
    console.error("Registration failed:", error);
    message.success("오류가 발생했습니다!");
  }
  window.location.href = "../../";
};

const Login = () => {
  return (
    <div className="page">
      {" "}
      <div className="titleWrap">
        <Link to="../">
          <Logo>aloharoom</Logo>
        </Link>
      </div>
      {/* page 안쪽 */}
      <div className="loginPage">
        <div className="inputWrap">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "아이디가 입력되지 않았습니다!" },
              ]}
              onFinish={onFinish}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "비밀번호가 입력되지 않았습니다!" },
              ]}
              onFinish={onFinish}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>로그인 상태유지</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                로그인/비밀번호 찾기
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              <Link to="../RegisterPage">
                <a href="RegisterPage" font color="#85afe1">
                  새로운 계정 만들기
                </a>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
