import { Form, Input, Select } from "antd";
import { useState } from "react";

const { Option } = Select;

const PostCodeSection = ({ setCode }) => {
  const [code, setCodeValue] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setCodeValue(value);
    setCode(value);
  };

  const handleSelectChange = (value) => {
    console.log(`Selected: ${value}`);
    setCode(value); // 선택된 값을 code 상태로 설정
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form
        name="complex-form"
        onFinish={() => {}}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          width: "100%",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <Form.Item
          label="Select"
          name="username"
          noStyle
          style={{
            width: "50%",
          }}
          rules={[
            {
              required: true,
              message: "Username is required",
            },
          ]}
        >
          <Select
            style={{
              width: "100%",
              width: 200,
            }}
            placeholder="어떤 종류의 게시물인가요?"
            onChange={handleSelectChange}
          >
            <Option value="1">방자랑</Option>
            <Option value="2">정보공유</Option>
            <Option value="3">자유</Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PostCodeSection;
