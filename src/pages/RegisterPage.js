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
const App = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    form
      .validateFields()
      .then(() => {
        console.log("Received values of form: ", values);
        // 모든 필드에 대한 유효성 검사가 성공한 경우
        // RegisterPage2 컴포넌트로 이동
        window.location.href = "/RegisterPage/RegisterPage2";
      })
      .catch((errorInfo) => {
        console.log("Validation failed: ", errorInfo);
      });
  };
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

  return (
    <div className="page">
      {" "}
      <div className="titleWrap">
        <Link to="../">
          <h2>ALOHAROOM</h2>
        </Link>
      </div>
      {/* page 안쪽 */}
      <div className="loginPage">
        <div className="inputWrap" style={{ margin: "0 -37px" }}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          ></Form>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            style={{
              maxWidth: 600,
              float: "left",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="이메일"
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

            <Form.Item
              name="gender"
              label="성별"
              rules={[
                {
                  required: true,
                  message: "성별이 입력되지 않았습니다!",
                },
              ]}
            >
              <Select placeholder="성별을 골라주세요.">
                <Option value="male">남성</Option>
                <Option value="female">여성</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("이용약관에 동의해야합니다.")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox
                style={{
                  margin: "20px -60px auto",
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
                  margin: "20px -60px auto",
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
  );
};

export default App;
