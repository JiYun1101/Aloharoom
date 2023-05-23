import React, { useState } from "react"; 
import { Button, Form, Select,} from "antd";
import { Slider } from "antd";
import ModalFlexDiv from "../../modal/modalcomponents/ModalFlexDiv";
import "../../../style/RegisterPage0.css";
import HoverHashTagButton from "../../HoverHashTagButton";
import { useEffect } from "react";


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
  fetchFilterCardPostData,
  myLikeHashtags,
  myLikeHomeHashtags
}) => {
  const [gender, setGender] = useState("nocare");
  const [roomCount, setRoomCount] = useState(0);
  const [homeType, setHomeType] = useState("nocare");
  const [ageRange, setAgeRange] = useState([0, 100]);
  const [flatRange, setFlatRange] = useState([0, 100]);
  const [rentRange, setRentRange] = useState([0, 100]);
  const [likeHashtags, setLikeHashtags] = useState([]);
  const [likeHomeHashtags, setLikeHomeHashtags] = useState([]);
  // const [myLikeHashtags, setMyLikeHashtags] = useState([]);
  // const [myLikeHomeHashtags, setMyLikeHomeHashtags] = useState([]);
  console.log('===========================');
  console.log('gender', gender);
  console.log('roomCount', roomCount);
  console.log('homeType', homeType);
  console.log('ageRange', ageRange);
  console.log('flatRange', flatRange);
  console.log('rentRange', rentRange);
  console.log('likeHashtags', likeHashtags);
  console.log('likeHomeHashtags', likeHomeHashtags);
  console.log('')
  console.log('===========================');

  const handleLikeHashTagClick = (index) => {
    if (likeHashtags.includes(index)) {
      setLikeHashtags(  likeHashtags.filter((i) => i !== index));
    } else {
      setLikeHashtags([...likeHashtags, index]);
    }
  };
  const handleLikeHomeHashtagClick = (index) => {
    if (likeHomeHashtags.includes(index)) {
      setLikeHomeHashtags(likeHomeHashtags.filter((i) => i !== index));
    } else {
      setLikeHomeHashtags([...likeHomeHashtags, index]);
    }
  };

  // useEffect(() => {
  //   let isFilterPressed = parseInt(localStorage.getItem('pressFilterButton'));
  //   if(isFilterPressed === 1) {
  //     console.log('=====필터링을 눌렀을 경우 호출되는 함수=====');
  //     setGender(localStorage.getItem('gender'));
  //     setRoomCount(parseInt(localStorage.getItem('roomCount')) === 0 ? `상관없음`: `${parseInt(localStorage.getItem('roomCount'))}개`);
      
  //   }
  // })

  useEffect(() => {
    let isFilterPressed = parseInt(localStorage.getItem('pressFilterButton'));
    //필터링을 설정했을 경우,
    if (isFilterPressed === 1) {
      console.log('filter setting complete');
      setGender(localStorage.getItem('gender'));
      setRoomCount(localStorage.getItem('roomCount'));
      setHomeType(localStorage.getItem('homeType'));
      setAgeRange(JSON.parse(localStorage.getItem('ageRange')));
      setRentRange(JSON.parse(localStorage.getItem('rentRange')));
      setFlatRange(JSON.parse(localStorage.getItem('flatRange')));
      setLikeHashtags(JSON.parse(localStorage.getItem('likeHashtags')));
      setLikeHomeHashtags(JSON.parse(localStorage.getItem('likeHomeHashtags')));
    }
    //초기화 버튼이나 필터링을 누르지 않았을 경우,
    else{
      console.log(`초기화 버튼이나 필터링을 누르지 않았을 경우,`)
    }
  }, []);

  return (
    <>
      <Form style={{ fontSize: "4rem" }}>
        <Form.Item
          label="성별"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
        >
          <Select 
            value={gender === 'male' ? "남자": gender === 'female' ? "여자" : "상관없음"}
            style={{ fontSize: "4rem" }} 
            onChange={(value) => {setGender(value);}}
          >
            <Select.Option value="male">남자</Select.Option>
            <Select.Option value="female">여자</Select.Option>
            <Select.Option value="nocare">상관없음</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="방 개수"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
        >
          <Select 
            value={parseInt(roomCount) === 0 ? '상관없음' : `${roomCount}개`}
            style={{ fontSize: "4rem" }} 
            onChange={(value) => {setRoomCount(value);}}
          >
            <Select.Option value="1">1개</Select.Option>
            <Select.Option value="2">2개</Select.Option>
            <Select.Option value="3">3개</Select.Option>
            <Select.Option value="0">상관없음</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="주거 형태"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
        >
          <Select 
            value={homeType === 'officetel' ? '오피스텔' :
            homeType === 'apartment' ? '아파트' :
            homeType === 'villa' ? '주택' :
            '상관없음'
          }
            style={{ fontSize: "4rem" }} 
            onChange={(value) => {setHomeType(value);}}>
            <Select.Option value="officetel">오피스텔</Select.Option>
            <Select.Option value="apartment">아파트</Select.Option>
            <Select.Option value="villa">주택</Select.Option>
            <Select.Option value="notcare">상관없음</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="평수">
          <Slider value={flatRange} range marks={flatMarks} onChange={(value) => { setFlatRange(value)}}/>
        </Form.Item>
        <Form.Item label="월세">
          <Slider value={rentRange} range marks={rentMarks} onChange={(value) => { setRentRange(value);}}/>{" "}
        </Form.Item>
        <Form.Item label="나이">
          <Slider value={ageRange} range marks={ageMarks} onChange={(value) => { setAgeRange(value);}} />{" "}
        </Form.Item>
      </Form>
          <ModalFlexDiv alignItems="center" width="100%" height="3rem" fontSize="1.5rem">
            사람 해시태그
          </ModalFlexDiv>
          {localStorage.getItem('userId') ?
            <> 
            {myLikeHashtags.length === 0 ?
              <ModalFlexDiv
                width="100%"
                height="auto"
                justifyContent="center"
                alignItems="center"
                marginBottom="1rem"
              >
                <div style={{ fontSize:"1.2rem", color:"#a0a0a0"}}>설정된 선호 해시태그가 없습니다.</div>
              </ModalFlexDiv>
            :
            <ModalFlexDiv 
              width="100%" 
              height="auto"
              marginBottom="1rem"
              flexDirection="row"
              flexWrap="wrap"
              gap="0.5rem"
            >
              {myLikeHashtags.map((data, idx) => (
                <HoverHashTagButton
                  key={idx}
                  selected={likeHashtags.includes(data)}
                  onClick={() => handleLikeHashTagClick(data)}
                >
                  {data}
                </HoverHashTagButton>  
              ))}
            </ModalFlexDiv>
            }
            </>
          :
            <ModalFlexDiv
              width="100%"
              height="auto"
              justifyContent="center"
              alignItems="center"
              marginBottom="1rem"
            >
              <div style={{ fontSize:"1.2rem", color:"#a0a0a0"}}>회원가입후 해시태그를 설정할 수 있습니다.</div>
            </ModalFlexDiv>
          }
          <ModalFlexDiv alignItems="center" width="100%" height="3rem" fontSize="1.5rem">
            집 해시태그
          </ModalFlexDiv>
          {localStorage.getItem('userId') ? 
            <>
            {myLikeHomeHashtags.length === 0 ? 
              <ModalFlexDiv
                width="100%"
                height="auto"
                justifyContent="center"
                alignItems="center"
                marginBottom="1rem"
              >
                <div style={{ fontSize:"1.2rem", color:"#a0a0a0"}}>설정된 선호 해시태그가 없습니다.</div>
              </ModalFlexDiv>
            :
            <ModalFlexDiv 
              width="100%" 
              height="auto"
              marginBottom="1rem"
              flexDirection="row"
              flexWrap="wrap"
              gap="0.5rem"
            >
              {myLikeHomeHashtags.map((data, idx) => (
                <HoverHashTagButton
                  key={idx}
                  selected={likeHomeHashtags.includes(data)}
                  onClick={() => handleLikeHomeHashtagClick(data)}
                >
                  {data}
                </HoverHashTagButton>  
              ))}
            </ModalFlexDiv>
            }
            </>
            
          :
          <ModalFlexDiv
            width="100%"
            height="auto"
            justifyContent="center"
            alignItems="center"
            marginBottom="1rem"
          >
            <div style={{ fontSize:"1.2rem", color:"#a0a0a0"}}>회원가입후 해시태그를 설정할 수 있습니다.</div>
          </ModalFlexDiv>
          }
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
              localStorage.setItem('likeHomeHashtags', JSON.stringify(likeHomeHashtags));
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
