import React, { useState } from "react";
// import SearchHashTag from "./SearchHashTag";

import styled from "styled-components";
// import MapPost from "./MapPost";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Segmented, Space } from "antd";

import { Button, Form, Input, Radio } from "antd";
import CardPosts from "./CardPosts"; // CardPosts import

import { useEffect } from "react";
import SearchHashTag from "../postmappage/SearchHashTag";

import EmptyBox from "../postmappage/SearchHashTagComponents/EmptyBox";
import SearchTitle from "../postmappage/SearchHashTagComponents/SearchTitle";

import NotificationModal2 from "../postmappage/SearchHashTagComponents/NotificationModal2";
import { IoFilterOutline } from "react-icons/io5";
import axios from "axios";
import baseURL from "../api/baseURL";
import { useRef } from "react";

const SearchHashTagContainer = styled.div`
  position: absolute;
  width: 99.5%;
  height: 17vh;
  display: flex;
  flex-direction: column;
`;

const SearchSection = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  z-index: 1;
`;

const SearchInput = styled.input`
  width: 36%;
  height: 70%;
  border-style: solid;
  border-radius: 2rem;
  border-color: #47a5fd;
  z-index: 1;
`;

const SearchIconStyle = {
  position: "absolute",
  right: "2rem",
  zIndex: "3",
  marginRight: "3rem",
  marginLeft: "1rem",
  color: "#47A5FD",
};

const CategoryNum = styled.div`
  text-align: center;
`;

const CardPost3 = styled.div`
  position: fixed;
  top: 10rem;
  right: 2%;
  width: 15%;
  height: 35rem;
  border-color: #bbbbbb;
  border-style: solid;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  margin: 1rem 0;
  margin-right: 10rem;
  display: flex;
  justify-content: center;
`;

const FormItemContainer = styled.div`
  display: fixed;
  justify-content: center;
  align-items: center;
`;

const PostMapContentContainer = styled.div`
  display: fixed;
`;

const PostMapContentContainer2 = styled.div`
  margin-top: -3vm;
  position: relative;
  width: 100%;
  height: 6.8vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const LinkToStyle = {
  textDecoration: "none",
  color: "inherit",
};

const NewPostIconStyle = {
  position: "fixed",
  right: "2rem",
  bottom: "2rem",
  zIndex: "2",
  color: "#bbbbbb",
};

const { Search } = Input;

const SearchSectionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  z-index: 1;
`;

const PostContent = (
  setSearchStr,
  fetchCardPostData,
  fetchFilterCardPostData,
  communityId
) => {
  const [cardPostData, setCardPostData] = useState([]);
  const [swLat, setSWLat] = useState("");
  const [swLon, setSWLon] = useState("");
  const [neLat, setNELat] = useState("");
  const [neLon, setNELon] = useState("");

  const [button1Color, setButton1Color] = useState("#000000");
  const [button2Color, setButton2Color] = useState("#000000");
  const [button3Color, setButton3Color] = useState("#000000");
  const [code, setCode] = useState(1);
  const [isCardPostsVisible, setIsCardPostsVisible] = useState(true); // CardPosts의 가시성 상태 추가

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  async function fetchHashtag() {}

  const onSearch = (value) => {
    setSearchStr(value);
  };

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      fetchHashtag();
    }
  }, []);

  const handleAvatarClick = (code) => {
    setCode(code);
    console.log(code);
  };

  const handleNavigation = () => {
    setIsCardPostsVisible(false); // navigation 이벤트가 발생하면 CardPosts를 가려줍니다.
  };

  const [inputValue, setInputValue] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const [data, setData] = useState([]);

  const cardRef = useRef(null);

  const [selectedTitle, setSelectedTitle] = useState("");

  const handleCardPostClick = (title) => {
    setSelectedTitle(title); // 클릭된 제목을 선택된 제목 상태로 설정
  };

  const [currentIndex, setCurrentIndex] = useState(null); // 클릭한 게시물의 인덱스를 저장할 변수

  const handleLinkClick = (event, message) => {
    console.log(message);
  };

  const [selectedButton, setSelectedButton] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${baseURL}/api/communityboard/code/${code}`
      );
      setData(result.data[1]);
      console.log(result.data[1]);
    };
    fetchData();
  }, [code]); // code를 의존성 배열에 추가

  const handleButtonClick = (buttonNumber) => {
    setButton1Color("#000000");
    setButton2Color("#000000");
    setButton3Color("#000000");

    if (buttonNumber === 1) {
      setButton1Color("#85afe1");
    } else if (buttonNumber === 2) {
      setButton2Color("#85afe1");
    } else if (buttonNumber === 3) {
      setButton3Color("#85afe1");
    }
  };

  return (
    <>
      <PostMapContentContainer>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            requiredMarkValue: requiredMark,
          }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
        >
          <Form.Item label="Required Mark">
            <Radio.Group onChange={(e) => handleButtonClick(e.target.value)}>
              <Radio.Button value={1} style={{ color: button1Color }}>
                Optional
              </Radio.Button>
              <Radio.Button value={2} style={{ color: button2Color }}>
                Required
              </Radio.Button>
              <Radio.Button value={3} style={{ color: button3Color }}>
                Hidden
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
      </PostMapContentContainer>
      <SearchSectionContainer>
        <Search
          placeholder="게시물 키워드를 입력하세요"
          size="large"
          allowClear
          onSearch={onSearch}
          style={{
            width: "3100px",
            left: "30rem",
            marginLeft: "29rem",
            marginTop: "0.7rem",
          }}
        />
      </SearchSectionContainer>

      <PostMapContentContainer2>
        <CardPosts code={code} />
        <CardPost3 style={{ textAlign: "center", alignItems: "center" }}>
          <b style={{ color: "#85afe1", fontWeight: "bold" }}>인기글</b> <br />
          {data.map((post, index) => (
            <React.Fragment key={index}>
              <b
                onClick={() => handleCardPostClick(post.title)}
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  width: "70%",
                }}
              >
                <Link
                  to={`../CommunityInfoPage/${post.communityId}`}
                  style={LinkToStyle}
                  onClick={(event) => {
                    setCurrentIndex(index);
                    handleLinkClick(
                      event,
                      `../CommunityInfoPage/${post.communityId}`
                    );
                  }}
                >
                  {index === 0 && (
                    <span style={{ textDecoration: "none" }}>1위 </span>
                  )}{" "}
                  {/* 1위일 경우 '1위' 추가 */}
                  {index === 1 && (
                    <span style={{ textDecoration: "none" }}>2위 </span>
                  )}{" "}
                  {/* 2위일 경우 '2위' 추가 */}
                  {index === 2 && (
                    <span style={{ textDecoration: "none" }}>3위 </span>
                  )}{" "}
                  {/* 3위일 경우 '3위' 추가 */}
                  {post.title}
                </Link>
              </b>
              <br />
            </React.Fragment>
          ))}
        </CardPost3>

        {selectedTitle && <CardPosts title={selectedTitle} />}
        <Link to="/newCommunityPostPage" style={LinkToStyle}>
          <AiOutlinePlusCircle size={50} style={NewPostIconStyle} />
        </Link>
      </PostMapContentContainer2>
    </>
  );
};

export default PostContent;
