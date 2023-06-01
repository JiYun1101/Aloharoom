import React, { useState } from "react";
// import SearchHashTag from "./SearchHashTag";

import styled from "styled-components";
// import MapPost from "./MapPost";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Segmented, Select, Space } from "antd";

import { Button, Form, Input, Radio } from "antd";

import SearchHashTag from "../postmappage/SearchHashTag";

import EmptyBox from "../postmappage/SearchHashTagComponents/EmptyBox";
import SearchTitle from "../postmappage/SearchHashTagComponents/SearchTitle";

import NotificationModal2 from "../postmappage/SearchHashTagComponents/NotificationModal2";
import { IoFilterOutline } from "react-icons/io5";
import axios from "axios";
import baseURL from "../api/baseURL";
import CardPosts from "./CardPosts";
import { Pagination } from "antd";
import { useRef, useEffect } from "react";

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
  font-size: 1.1rem;
  font-weight: 300;
  margin-top: 3vm;
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  &:hover {
    border-color: #47a5fd;
    color: #47a5fd;
  }
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
  margin-left: -11rem;
`;

const HoverableRadio = styled(Radio.Button)`
  &:hover {
    border-color: #47a5fd;
    color: #47a5fd;
  }
`;

const WrapButton = styled.div`
  justify-content: center;
  align-items: center;
  border: 2px solid #47a5fd;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    border-color: #47a5fd;
    color: #47a5fd;
  }
`;

const PostMapContentContainer3 = styled.div`
  margin-top: -4rem;
  position: relative;
  width: 100%;
  height: 6.8vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const PostDiv = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageDiv = styled.div`
  font-size: 1.5rem;
  margin-top: 67rem; //나중에 110으로 고치기
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const PostMapContentContainer2 = styled.div`
  margin-top: -8rem;
  margin-bottom: 10rem;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 6.8vh;
  /* display: fixed; */
  justify-content: center;
`;

const PostMapContentContainer4 = styled.div`
  margin-top: -8rem;
  margin-bottom: 10rem;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 56.8vh;
  /* display: fixed; */
  justify-content: center;
`;

const PostContent = ({
  setSearchStr,
  fetchCardPostData,
  fetchFilterCardPostData,
  communityId,
}) => {
  const [swLat, setSWLat] = useState("");
  const [swLon, setSWLon] = useState("");
  const [neLat, setNELat] = useState("");
  const [neLon, setNELon] = useState("");

  const [button1Color, setButton1Color] = useState("#000000");
  const [button2Color, setButton2Color] = useState("#000000");
  const [button3Color, setButton3Color] = useState("#000000");

  const [isCardPostsVisible, setIsCardPostsVisible] = useState(true); // CardPosts의 가시성 상태 추가

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const onSearch = (value) => {
    setSearchStr(value);
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

  const lastClickedCode =
    parseInt(localStorage.getItem("lastClickedCode")) || 1;
  const [code, setCode] = useState(lastClickedCode);

  const [selectCategory, setSelectCategory] = useState("제목");
  const [cardPostData, setCardPostData] = useState([]);

  function handleSelectChange(value) {
    console.log("selectCategory", value);
    setSelectCategory(value);
  }

  const onInputSearch = (value) => {
    console.log("입력한 값", value);
    console.log("선택한 카테고리", selectCategory);
    setCurrentPage(1);
    cardRef.current.firstChild.firstChild.click(1);

    if (selectCategory === "제목") {
      fetchTitleSearchData(value);
    } else if (selectCategory === "닉네임") {
      fetchNicknameSearchData(value);
    }
  };

  async function fetchTitleSearchData(keyword) {
    await axios
      .get(`${baseURL}/api/communitySearch`, {
        params: {
          keyword: keyword,
          code: code,
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log("fetchTitleSearchData response data", response.data);
        setCardPostData(response.data);
      })
      .catch((error) => {
        console.log("fetchTitleSearchData fetch error");
      });
  }

  async function fetchNicknameSearchData(nickname) {
    await axios
      .get(`${baseURL}/api/communitySearch/nickname`, {
        params: {
          nickname: nickname,
          code: code,
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log("fetchNicknameSearchData response data", response.data);
        setCardPostData(response.data);
      })
      .catch((error) => {
        console.log(`fetchNicknameSearchData axios error`);
      });
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${baseURL}/api/communityboard/code/${code}`
      );
      setCardPostData(result.data[0]);
      console.log("cardPostData", cardPostData);
      setData(result.data[1]);
      console.log(result.data[0]);
      console.log(result.data[1]);
    };
    fetchData();
  }, [code]); // code를 의존성 배열에 추가

  const groupCardPostData = () => {
    const groupedData = [];
    for (let i = 0; i < cardPostData.length; i += 5) {
      groupedData.push(cardPostData.slice(i, i + 5));
    }
    return groupedData;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);

    if (cardRef.current) {
      cardRef.current.scrollTop = 0; // 맨 위로 스크롤
    }
  };

  const handleButtonClick = (code) => {
    setButton1Color("#000000");
    setButton2Color("#000000");
    setButton3Color("#000000");

    if (code === 1) {
      setButton1Color("#47a5fd");
      setCode(1);
      // index 값을 1로 변경

      cardRef.current.firstChild.firstChild.click(1);
      setCurrentPage(1);
    } else if (code === 2) {
      setButton2Color("#47a5fd");
      setCode(2);
      // index 값을 1로 변경

      cardRef.current.firstChild.firstChild.click(1);
      setCurrentPage(1);
    } else if (code === 3) {
      setButton3Color("#47a5fd");
      setCode(3);
      // index 값을 1로 변경

      cardRef.current.firstChild.firstChild.click(1);
      setCurrentPage(1);
    }

    // 마지막으로 클릭한 code 값을 localStorage에 저장
    localStorage.setItem("lastClickedCode", code);
  };
  const [currentPage, setCurrentPage] = useState(1);

  function YourComponent() {
    const cardRef = useRef(null);

    useEffect(() => {
      if (cardRef.current) {
        cardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, [cardRef.current]);
  }

  const [postDiv, setPostDiv] = useState(1);
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
          style={{ marginTop: "6rem", marginLeft: "1rem" }}
        >
          <Form.Item>
            <Radio.Group
              onChange={(e) => handleButtonClick(e.target.value)}
              defaultValue={lastClickedCode}
            >
              <HoverableRadio
                value={1}
                onClick={() => handleButtonClick(1)}
                style={{ color: button1Color }}
              >
                방자랑
              </HoverableRadio>
              <HoverableRadio
                value={2}
                onClick={() => handleButtonClick(2)}
                style={{ color: button2Color }}
              >
                정보 공유
              </HoverableRadio>
              <HoverableRadio
                value={3}
                onClick={() => handleButtonClick(3)}
                style={{ color: button3Color }}
              >
                자유
              </HoverableRadio>
            </Radio.Group>
          </Form.Item>
        </Form>
        <SearchSectionContainer>
          <Search
            placeholder="게시물 키워드를 입력하세요"
            size="large"
            allowClear
            onSearch={onInputSearch}
            style={{
              width: 300,
              marginLeft: "3rem",
              marginTop: "5.7rem",
            }}
          />
          <Select
            style={{
              width: "8rem",
              marginLeft: "1rem",
              marginTop: "5.7rem",
            }}
            defaultValue={selectCategory}
            options={[
              {
                value: "제목",
                label: "제목",
              },
              {
                value: "닉네임",
                label: "닉네임",
              },
            ]}
            onChange={handleSelectChange}
          />
        </SearchSectionContainer>
      </PostMapContentContainer>
      <PostMapContentContainer2>
        <PostDiv>
          {groupCardPostData().map(
            (group, index) =>
              currentPage === index + 1 && (
                <CardPosts
                  key={index}
                  code={code}
                  cardPostData={group}
                  setCardPostData={setCardPostData}
                  ref={cardRef} // cardRef를 CardPosts 컴포넌트에 전달
                />
              )
          )}
        </PostDiv>
      </PostMapContentContainer2>{" "}
      <PageDiv>
        <div style={{ marginTop: "1px", marginBottom: "80px" }}>
          <div ref={cardRef}>
            <Pagination onChange={handlePageChange} total={50} />{" "}
          </div>
        </div>
      </PageDiv>
      <PostMapContentContainer3>
        <CardPost3>
          <b style={{ color: "#47a5fd", fontWeight: "bold" }}>인기글</b>
          <br />
          {data.map((post, index) => (
            <React.Fragment key={index}>
              <b
                onClick={() => handleCardPostClick(post.title)}
                style={{
                  cursor: "pointer",
                  width: "70%",
                }}
              >
                {" "}
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
                  <WrapButton>
                    {index === 0 && <span>1위 </span>}
                    {index === 1 && <span>2위 </span>}
                    {index === 2 && <span>3위 </span>}
                    {post.title}
                  </WrapButton>{" "}
                </Link>
              </b>
              <br />
            </React.Fragment>
          ))}
        </CardPost3>
        <Link to="/newCommunityPostPage" style={LinkToStyle}>
          <AiOutlinePlusCircle size={50} style={NewPostIconStyle} />
        </Link>
      </PostMapContentContainer3>
    </>
  );
};

export default PostContent;
