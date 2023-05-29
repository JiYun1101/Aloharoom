import { Button, Form, Select, Space } from "antd";
import { useState } from "react";

const { Option } = Select;

const PostCodeSection = ({ setCode }) => {
  const [code, _setCode] = useState("");

  const handleSelectChange = (value) => {
    _setCode(value);
  };

  const handleSubmit = () => {
    console.log("Selected code: ", code);
    setCode(code);
  };

  return (
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
      <Space
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form.Item
          label="Select"
          name="username"
          noStyle
          style={{ width: "50%", margin: "0 auto" }}
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
        <Form.Item label=" " colon={false}>
          <Button
            type="primary"
            style={{ marginTop: "20px" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default PostCodeSection;
