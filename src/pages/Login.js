import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../style/Login.css";
// import {
//   Select,
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper,
//   Stack,
// } from "@chakra-ui/react";
// import { ChakraProvider } from "@chakra-ui/react";
import { UserOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";

import { Form, Checkbox } from "antd";
import LockOutlined from "@ant-design/icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [ConfirmPW, setConfirmPW] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [nameValid, setnameValid] = useState(false);
  const [ConfirmPWValid, setConfirmPWValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const onChange = (value) => {
    console.log("changed", value);
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // const regex =
    //   /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    // if (regex.test(e.target.value)) {
    //   setEmailValid(true);
    // } else {
    //   setEmailValid(false);
    // }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    // const regex =
    //   /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    // if (regex.test(e.target.value)) {
    //   setPwValid(true);
    // } else {
    //   setPwValid(false);
    // }
  };
  const onClickConfirmButton = async () => {
    if (email !== "" && pw !== "" && name !== "") {
      //   try {
      //     const res = await createUserWithEmailAndPassword(
      //       authService,
      //       email,
      //       pw
      //     );
      //     await setUser({ email: email, name: name, uid: res.user.uid });
      //     alert("등록에 성공했습니다.");
      //   } catch (eroor) {
      //     alert("등록에 실패했습니다.");
      //   }
    }
  };

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
