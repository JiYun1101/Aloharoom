import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../style/Login.css";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";

// import RegisterPage2 from "./RegisterPage2";

const Logo = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: "Comfortaa" !important;
  font-weight: 500;
  font-size: 1.5rem;
  color: #47a5fd;
`;

const BackPageIconStyle = {
  position: "absolute",
  top: "1vh",
  left: "1vw",
  color: "#47a5fd",
};

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegisterPage() {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  const onFinish = (value) => {
    try {
      navigate("/RegisterPage/RegisterPage2", {
        state: {
          username: value.username,
          password: value.password,
          nickname: value.nickname,
          age: value.age,
          gender: value.gender,
        },
      });

      console.log("username:" + value.username);

      console.log("Registration successful");

      // Navigate to RegisterPage2 on successful registration
      // window.location.href = "/RegisterPage/RegisterPage2";
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
      <AiOutlineLeft
        size={40}
        style={BackPageIconStyle}
        onClick={() => navigate("../")}
      />
      <div className="page">
        <div className="titleWrap">
          <Link to="../">
            <Logo>aloharoom</Logo>
          </Link>
        </div>
        {/* page 안쪽 */}
        <div className="registerPage">
          <div className="inputWrap" style={{ margin: "20px -40px 0" }}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            />
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              style={{
                maxWidth: 600,
                float: "left",
              }}
              scrollToFirstError
            >
              <Form.Item
                name="username"
                label="이메일"
                onFinish={onFinish}
                rules={[
                  {
                    type: "email",
                    message: "이메일을 입력해주세요",
                  },
                  {
                    required: true,
                    message: "이메일이 입력되지 않았습니다!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="nickname"
                label="닉네임"
                onFinish={onFinish}
                tooltip="당신이 글을 쓰거나 채팅을 할때 상대에게 보이는 이름입니다."
                rules={[
                  {
                    required: true,
                    message: "닉네임이 입력되지 않았습니다!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="비밀번호"
                onFinish={onFinish}
                rules={[
                  {
                    required: true,
                    message: "비밀번호가 입력되지 않았습니다!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item style={{ marginLeft: "97px" }}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      style={{ width: "180px" }}
                      label="나이"
                      name="age"
                      rules={[
                        {
                          required: true,
                          message: "나이가 입력되지 않았습니다!",
                        },
                      ]}
                      onFinish={onFinish}
                    >
                      <InputNumber style={{ width: "115px" }} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      style={{ marginLeft: "57px", width: "160px" }} // 수정된 부분
                      label="성별"
                      name="gender"
                      rules={[
                        {
                          required: true,
                          message: "성별이 입력되지 않았습니다!",
                        },
                      ]}
                      onFinish={onFinish}
                    >
                      <Input /> {/* 성별 입력 필드가 Input 컴포넌트로 가정 */}
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error("이용약관에 동의해야합니다.")
                          ),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox
                  style={{
                    margin: "15px -60px auto",
                    width: "120%",
                    textAlign: "left",
                  }}
                >
                  ALOHAROOM의 이용약관,{" "}
                  <a href="../TermUser">
                    개인정보 수집 및 이용, 위치기반서비스 이용약관(선택)
                  </a>
                  에 모두 동의합니다.
                </Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{
                    margin: "3px -60px auto",
                    width: "120%",
                  }}
                >
                  회원가입 진행하기
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
