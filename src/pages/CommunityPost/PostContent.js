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
// import baseURL from "../../api/baseURL";

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
  position: "absolute",
  right: "2rem",
  bottom: "0.001rem",
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
  fetchFilterCardPostData
) => {
  const [cardPostData, setCardPostData] = useState([]);
  const [swLat, setSWLat] = useState("");
  const [swLon, setSWLon] = useState("");
  const [neLat, setNELat] = useState("");
  const [neLon, setNELon] = useState("");

  const [code, setCode] = useState(1); // 코드 초기값을 null로 변경
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
  async function fetchHashtag() {
    // await axios
    //   .get(`${baseURL}/api/home`, {
    //     withCredentials: true,
    //   })
    //   .then((response) => {
    //     console.log("fetchHashtag", response.data);
    //     setMyLikeHashtags(response.data.likeHashtags);
    //     setMyLikeHomeHashtags(response.data.likeHomeHashtags);
    //   })
    //   .catch((error) => {
    //     console.log(`axios fetchHashtag error`);
    //   });
  }

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

  const handleButtonClick = () => {
    // setSearchStr(inputValue);
    setInputValue("");
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

  return (
    <PostMapContentContainer>
      <Space.Compact
        block
        style={{
          width: 600,
          marginLeft: "32.7rem",
          marginTop: "5.7rem",
          border: "1px solid black",
          borderRadius: "5px", // 모서리를 둥글게 만듦
        }}
      >
        <Button
          style={{
            color: "#85afe1",
          }}
        >
          방자랑
        </Button>
        <Button>정보 공유</Button>
        <Button>자랑</Button>
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
      <CardPosts />
      <CardPost3 style={{ textAlign: "center", alignItems: "center" }}>
        <h2>가장 인기 있는 글</h2>
        <p>1. 내 방 자랑</p>
        <p>2. 새로운 청소기</p>
        <p>3. 오늘의 일기</p>
      </CardPost3>{" "}
      <Link to="/newCommunityPostPage" style={LinkToStyle}>
        <AiOutlinePlusCircle size={50} style={NewPostIconStyle} />
      </Link>
    </PostMapContentContainer>
  );
};

export default PostContent;
