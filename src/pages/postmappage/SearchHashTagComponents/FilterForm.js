import React, { useState } from "react"; 
import { Button, Form, Select,} from "antd";
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

const mark2 = {
  0: {
    style: {
      color: "#f50",
    },
    label: <strong>0대</strong>,
  },
  10: "10대",
  20: "20대",
  30: "30대",
  40: "40대",
  50: "50대",
  60: "60대",
  70: "70대",
  80: "80대",
  90: "90대",
  100: "100대",
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>100만원</strong>,
  },
};

const FilterForm = ({ 
  ModalClose,
  fetchFilterCardPostData
}) => {
  const [gender, setGender] = useState("");
  const [roomCount, setRoomCount] = useState("");
  const [homeType, setHomeType] = useState("");
  const [ageRange, setAgeRange] = useState([]);
  const [flatRange, setFlatRange] = useState([]);
  const [rentRange, setRentRange] = useState([]);
  const [likeHashtags, setLikeHashtags] = useState([]);
  console.log('===========================');
  console.log('gender', gender);
  console.log('roomCount', roomCount);
  console.log('homeType', homeType);
  console.log('ageRange', ageRange);
  console.log('flatRange', flatRange);
  console.log('rentRange', rentRange);
  console.log('likeHashtags', likeHashtags);
  console.log('===========================');

  const handleLikeHashTagClick = (buttonName3) => {
    if (likeHashtags.includes(buttonName3)) {
      setLikeHashtags((prevTags) =>
        prevTags.filter((tag) => tag !== buttonName3)
      );
      // onClick(null);
    } else {
      setLikeHashtags((prevTags) => [...prevTags, buttonName3]);
      // onClick(String(buttonName3));
    }
  };

  return (
    <>
      <Form style={{ fontSize: "4rem" }}>
        <Form.Item
          label="성별"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
        >
          <Select style={{ fontSize: "4rem" }} onChange={(value) => {setGender(value);}}>
            <Select.Option value="male">남자</Select.Option>
            <Select.Option value="female">여자</Select.Option>
            <Select.Option value="notcare">상관없음</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="방 개수"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
        >
          <Select style={{ fontSize: "4rem" }} onChange={(value) => {setRoomCount(value);}}>
            <Select.Option value="1">1개</Select.Option>
            <Select.Option value="2">2개</Select.Option>
            <Select.Option value="3">3개</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="주거 형태"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
        >
          <Select style={{ fontSize: "4rem" }} onChange={(value) => {setHomeType(value);}}>
            <Select.Option value="officetels">오피스텔</Select.Option>
            <Select.Option value="apartment">아파트</Select.Option>
            <Select.Option value="house">주택</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="평수">
          <Slider range marks={marks} defaultValue={[0, 10]} onChange={(value) => { setFlatRange(value)}}/>
        </Form.Item>
        <Form.Item label="월세">
          <Slider range marks={marks} defaultValue={[26, 37]} onChange={(value) => { setRentRange(value);}}/>{" "}
        </Form.Item>
        <Form.Item label="나이">
          <Slider range marks={mark2} defaultValue={[26, 37]} onChange={(value) => { setAgeRange(value);}} />{" "}
        </Form.Item>
        <div>
          <div className="titleWrap2">
            그외에 어떤 것들을 중요하게 생각하나요?
          </div>
          <div className="tagWrap">
            <div className="tag-button-wrap" style={{ zIndex: 1 }}>
              <button
                onClick={() => handleLikeHashTagClick("dust")}
                className={`tag-button ${
                  likeHashtags.includes("dust") && "tag-button-pressed"
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
                onClick={() => handleLikeHashTagClick("cough")}
                className={`tag-button ${
                  likeHashtags.includes("cough") && "tag-button-pressed"
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
                onClick={() => handleLikeHashTagClick("quiet")}
                className={`tag-button ${
                  likeHashtags.includes("quiet") && "tag-button-pressed"
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
                onClick={() => handleLikeHashTagClick("convenience")}
                className={`tag-button ${
                  likeHashtags.includes("convenience") && "tag-button-pressed"
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
                onClick={() => handleLikeHashTagClick("calm")}
                className={`tag-button ${
                  likeHashtags.includes("calm") && "tag-button-pressed"
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
                onClick={() => handleLikeHashTagClick("gym")}
                className={`tag-button ${
                  likeHashtags.includes("gym") && "tag-button-pressed"
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
                onClick={() => handleLikeHashTagClick("church")}
                className={`tag-button ${
                  likeHashtags.includes("church") && "tag-button-pressed"
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
                onClick={() => handleLikeHashTagClick("car")}
                className={`tag-button ${
                  likeHashtags.includes("car") && "tag-button-pressed"
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
                onClick={() => handleLikeHashTagClick("park")}
                className={`tag-button ${
                  likeHashtags.includes("park") && "tag-button-pressed"
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
            onClick={() => {
              localStorage.setItem('pressFilterButton', 1);
              localStorage.setItem('gender', gender);
              localStorage.setItem('roomCount', roomCount);
              localStorage.setItem('homeType', homeType);
              localStorage.setItem('ageRange', JSON.stringify(ageRange));
              localStorage.setItem('flatRange', JSON.stringify(flatRange));
              localStorage.setItem('rentRange', JSON.stringify(rentRange));
              localStorage.setItem('likeHashtags', JSON.stringify(likeHashtags));
              fetchFilterCardPostData();
              ModalClose();
            }}
          >
            확인
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FilterForm;
