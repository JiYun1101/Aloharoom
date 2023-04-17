import React, { useState } from "react"; // useState를 import
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { Slider } from "antd";
import "../../../style/RegisterPage0.css";

const marks = {
  0: {
    style: {
      color: "#f50",
    },
    label: <strong>0만원</strong>,
  },
  10: "10만원",
  20: "20만원",
  30: "30만원",
  40: "40만원",
  50: "50만원",
  60: "60만원",
  70: "70만원",
  80: "80만원",
  90: "90만원",
  100: "100만원",
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>100만원</strong>,
  },
};

const FilterForm = () => {
  const handleTagClick = (buttonName3) => {
    if (tagPressed.includes(buttonName3)) {
      setTagPressed((prevTags) =>
        prevTags.filter((tag) => tag !== buttonName3)
      );
      // onClick(null);
    } else {
      setTagPressed((prevTags) => [...prevTags, buttonName3]);
      // onClick(String(buttonName3));
    }
  };
  const initialState = ""; // 예시로 초기 상태를 빈 문자열로 설정
  const [state, setState] = useState(""); // useState를 함수 컴포넌트 내에서 호출

  const [tagPressed, setTagPressed] = useState([]);

  return (
    <>
      <Form style={{ fontSize: "4rem" }}>
        <Form.Item
          label="방 개수"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
        >
          <Select style={{ fontSize: "4rem" }}>
            <Select.Option value="room1">1개</Select.Option>
            <Select.Option value="room2">2개</Select.Option>
            <Select.Option value="room3">3개</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="주거 형태"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
        >
          <Select style={{ fontSize: "4rem" }}>
            <Select.Option value="Officetels">오피스텔</Select.Option>
            <Select.Option value="apartment">아파트</Select.Option>
            <Select.Option value="house">주택</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="평수">
          <Slider marks={marks} defaultValue={37} />
        </Form.Item>
        <Form.Item label="월세">
          <Slider range marks={marks} defaultValue={[26, 37]} />{" "}
        </Form.Item>
        <div>
          <div className="titleWrap2">
            그외에 어떤 것들을 중요하게 생각하나요?
          </div>
          <div className="tagWrap">
            <div className="tag-button-wrap" style={{ zIndex: 1 }}>
              <button
                onClick={() => handleTagClick("dust")}
                className={`tag-button ${
                  tagPressed.includes("dust") && "tag-button-pressed"
                }`}
              >
                #층간소음이 없는
              </button>
            </div>

            <div
              className="tag-button-wrap"
              style={{ marginLeft: "15px", zIndex: 1 }}
            >
              <button
                onClick={() => handleTagClick("cough")}
                className={`tag-button ${
                  tagPressed.includes("cough") && "tag-button-pressed"
                }`}
              >
                #역세권
              </button>
            </div>

            <div
              className="tag-button-wrap"
              style={{ marginLeft: "40px", zIndex: 1 }}
            >
              <button
                onClick={() => handleTagClick("quiet")}
                className={`tag-button ${
                  tagPressed.includes("quiet") && "tag-button-pressed"
                }`}
              >
                #조용한 주거환경
              </button>
            </div>

            <div
              className="tag-button-wrap"
              style={{ marginLeft: "-5px", marginTop: "-40px" }}
            >
              <button
                onClick={() => handleTagClick("convenience")}
                className={`tag-button ${
                  tagPressed.includes("convenience") && "tag-button-pressed"
                }`}
              >
                #비흡연자
              </button>
            </div>

            <div
              className="tag-button-wrap"
              style={{ marginTop: "-40px", marginLeft: "-25px" }}
            >
              <button
                onClick={() => handleTagClick("calm")}
                className={`tag-button ${
                  tagPressed.includes("calm") && "tag-button-pressed"
                }`}
              >
                #근처 편의점
              </button>
            </div>
            <div
              className="tag-button-wrap"
              style={{
                marginTop: "-40px",
                marginLeft: "-17px",
              }}
            >
              <button
                onClick={() => handleTagClick("gym")}
                className={`tag-button ${
                  tagPressed.includes("gym") && "tag-button-pressed"
                }`}
              >
                #주변 체육시설
              </button>
            </div>
            <div
              className="tag-button-wrap"
              style={{
                marginTop: "-40px",
                marginLeft: "0px",
              }}
            >
              <button
                onClick={() => handleTagClick("church")}
                className={`tag-button ${
                  tagPressed.includes("church") && "tag-button-pressed"
                }`}
              >
                #성당/교회
              </button>
            </div>

            <div
              className="tag-button-wrap"
              style={{
                marginTop: "-40px",
                marginLeft: "-20px",
              }}
            >
              <button
                onClick={() => handleTagClick("car")}
                className={`tag-button ${
                  tagPressed.includes("car") && "tag-button-pressed"
                }`}
              >
                #주차공간 유무
              </button>
            </div>
            <div
              className="tag-button-wrap"
              style={{
                marginTop: "-40px",
                marginLeft: "-28px",
              }}
            >
              <button
                onClick={() => handleTagClick("park")}
                className={`tag-button ${
                  tagPressed.includes("park") && "tag-button-pressed"
                }`}
              >
                #공원
              </button>
            </div>
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            확인
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FilterForm;
