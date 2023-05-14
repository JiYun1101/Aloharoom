import React, { useState } from "react"; 
import { Button, Form, Select,} from "antd";
import { Slider } from "antd";
import ModalFlexDiv from "../../modal/modalcomponents/ModalFlexDiv";
import "../../../style/RegisterPage0.css";
import HoverHashTagButton from "../../HoverHashTagButton";


const flatMarks = {
  0: {
    style: {
      color: "#f50",
    },
    label: <strong>0평</strong>,
  },
  10: "10평",
  20: "20평",
  30: "30평",
  40: "40평",
  50: "50평",
  60: "60평",
  70: "70평",
  80: "80평",
  90: "90평",
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>100평</strong>,
  },
};

const rentMarks = {
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
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>100만원</strong>,
  },
};

const ageMarks = {
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
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>100대</strong>,
  },
};

const FilterForm = ({ 
  ModalClose,
  fetchFilterCardPostData
}) => {
  const [gender, setGender] = useState("nocare");
  const [roomCount, setRoomCount] = useState(0);
  const [homeType, setHomeType] = useState("nocare");
  const [ageRange, setAgeRange] = useState([0, 100]);
  const [flatRange, setFlatRange] = useState([0, 100]);
  const [rentRange, setRentRange] = useState([0, 100]);
  const [likeHashtags, setLikeHashtags] = useState([]);
  const [selectedHouseHashTagButtons, setSelectedHouseHashTagButtons] = useState([]);
  const [selectedMyHashTagButtons, setSelectedMyHashTagButtons] = useState([]);
  const mockArr = [`활발한`, `조용한`, `시끄러운`, '헬창', `배달의 민족`]
  console.log('===========================');
  console.log('gender', gender);
  console.log('roomCount', roomCount);
  console.log('homeType', homeType);
  console.log('ageRange', ageRange);
  console.log('flatRange', flatRange);
  console.log('rentRange', rentRange);
  console.log('likeHashtags', likeHashtags);
  console.log('===========================');
  const handleHouseHashTagButtonClick = (index) => {
    if (selectedHouseHashTagButtons.includes(index)) {
      setSelectedHouseHashTagButtons(
        selectedHouseHashTagButtons.filter((i) => i !== index)
      );
    } else {
      setSelectedHouseHashTagButtons([...selectedHouseHashTagButtons, index]);
    }
  };
  const handleMyHashTagButtonClick = (index) => {
    if (selectedMyHashTagButtons.includes(index)) {
      setSelectedMyHashTagButtons(
      selectedMyHashTagButtons.filter((i) => i !== index)
      );
    } else {
      setSelectedMyHashTagButtons([...selectedMyHashTagButtons, index]);
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
          <Slider range marks={flatMarks} onChange={(value) => { setFlatRange(value)}}/>
        </Form.Item>
        <Form.Item label="월세">
          <Slider range marks={rentMarks} onChange={(value) => { setRentRange(value);}}/>{" "}
        </Form.Item>
        <Form.Item label="나이">
          <Slider range marks={ageMarks} onChange={(value) => { setAgeRange(value);}} />{" "}
        </Form.Item>
      </Form>
      <ModalFlexDiv alignItems="center" width="100%" height="3rem" fontSize="1.5rem">
        집 해시태그
      </ModalFlexDiv>
      <ModalFlexDiv 
        width="100%" 
        height="auto"
        marginBottom="1rem"
        flexDirection="row"
        flexWrap="wrap"
        gap="0.5rem"
      >
        {mockArr.map((data, idx) => (
          <HoverHashTagButton
            selected={selectedHouseHashTagButtons.includes(data)}
            onClick={() => handleHouseHashTagButtonClick(data)}
          >
            {data}
          </HoverHashTagButton>  
        ))}
      </ModalFlexDiv>
      <ModalFlexDiv alignItems="center" width="100%" height="3rem" fontSize="1.5rem">
        사람 해시태그
      </ModalFlexDiv>
      <ModalFlexDiv 
        width="100%" 
        height="auto"
        marginBottom="1rem"
        flexDirection="row"
        flexWrap="wrap"
        gap="0.5rem"
      >
        {mockArr.map((data, idx) => (
          <HoverHashTagButton
            selected={selectedMyHashTagButtons.includes(data)}
            onClick={() => handleMyHashTagButtonClick(data)}
          >
            {data}
          </HoverHashTagButton>  
        ))}
        {mockArr.map((data, idx) => (
          <HoverHashTagButton
            selected={selectedMyHashTagButtons.includes(data)}
            onClick={() => handleMyHashTagButtonClick(data)}
          >
            {data}
          </HoverHashTagButton>  
        ))}
        {mockArr.map((data, idx) => (
          <HoverHashTagButton
            selected={selectedMyHashTagButtons.includes(data)}
            onClick={() => handleMyHashTagButtonClick(data)}
          >
            {data}
          </HoverHashTagButton>  
        ))}
      </ModalFlexDiv>
        <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{marginBottom: "1rem"}}
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
    </>
  );
};

export default FilterForm;
