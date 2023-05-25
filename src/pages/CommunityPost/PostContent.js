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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostMapContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 86.8vh;
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
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  const [myLikeHashtags, setMyLikeHashtags] = useState([]);
  const [myLikeHomeHashtags, setMyLikeHomeHashtags] = useState([]);
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };
  const [NotifyModalOpen, setNotifyModalOpen] = useState(false);

  const ModalOpen = () => {
    setNotifyModalOpen(true);
  };

  const ModalClose = () => {
    setNotifyModalOpen(false);
  };
  const handleButtonClick = (buttonNumber) => {
    // 버튼에 따라 상태를 개별적으로 변경
    if (buttonNumber === 1) {
      setButton1Color("#85afe1");
      setButton2Color("#000000");
      setButton3Color("#000000");
      setCode(1); // code 값을 1로 변경
    } else if (buttonNumber === 2) {
      setButton1Color("#000000");
      setButton2Color("#85afe1");
      setButton3Color("#000000");
      setCode(2); // code 값을 2로 변경
    } else if (buttonNumber === 3) {
      setButton1Color("#000000");
      setButton2Color("#000000");
      setButton3Color("#85afe1");
      setCode(3); // code 값을 3으로 변경
    }
    // window.location.reload(); // 현재 페이지 새로고침
  };
  console.log("code =", code); // 콘솔에 code 값 출력

  console.log(code);

  const [data, setData] = useState([]);

  const cardRef = useRef(null);

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
  return (
    <PostMapContentContainer>
      <Space.Compact
        block
        style={{
          width: 600,
          marginLeft: "29rem",
          marginTop: "5.7rem",
          border: "1px solid black",
          borderRadius: "5px", // 모서리를 둥글게 만듦
        }}
      >
        <Button
          style={{
            color: button1Color,
          }}
          onClick={() => handleButtonClick(1)} // 첫 번째 버튼 클릭 시 handleButtonClick(1) 호출
        >
          방자랑
        </Button>
        <Button
          style={{
            color: button2Color,
          }}
          onClick={() => handleButtonClick(2)} // 두 번째 버튼 클릭 시 handleButtonClick(2) 호출
        >
          정보 공유
        </Button>
        <Button
          style={{
            color: button3Color,
          }}
          onClick={() => handleButtonClick(3)} // 세 번째 버튼 클릭 시 handleButtonClick(3) 호출
        >
          자유
        </Button>
      </Space.Compact>
      <SearchSectionContainer>
        <Search
          placeholder="게시물 키워드를 입력하세요"
          size="large"
          allowClear
          onSearch={onSearch}
          style={{
            width: 300,
            marginLeft: "13.7rem",
            marginTop: "5.7rem",
          }}
        />
      </SearchSectionContainer>
      <CardPosts code={code} />
      <CardPost3 style={{ textAlign: "center", alignItems: "center" }}>
        <b style={{ color: "#85afe1", fontWeight: "bold" }}>인기글</b> <br />
        {data.map((post, index) => (
          <React.Fragment key={index}>
            <b>{post.title}</b>

            <br />
          </React.Fragment>
        ))}
      </CardPost3>
      <Link to="/newCommunityPostPage" style={LinkToStyle}>
        <AiOutlinePlusCircle size={50} style={NewPostIconStyle} />
      </Link>
    </PostMapContentContainer>
  );
};

export default PostContent;
