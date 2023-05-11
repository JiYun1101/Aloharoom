import React, { useState } from "react";
import styled from "styled-components";
import CardPosts from "./CardPosts";
import PostNavs from "./PostNavs";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Input, Segmented, Select, Space } from "antd";
import { Pagination } from "antd";
import axios from "axios";
import baseURL from "../api/baseURL";
// import CardPost2 from "./Community";

const Page = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const PageNum = styled.div`
  margin-top: 113rem;
  margin-left: 33rem;
`;

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
`;

// const PostContainer = styled.div`
//   border-width: 0.1rem;
//   border-style: solid;
//   border-color: #bbbbbb;
//   width: 48%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

const Post = ({ clickedCommunityId, cardPostData }) => {
  const [roommatePosts, setRoomMatePosts] = useState(true);
  const [sharehousePosts, setShareHousePosts] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [code, setCode] = useState(1);
  const [selectSearchType, setSelectSearchType] = useState('제목');
  const [searchCardData, setSearchCardData] = useState([]);

  const SearchTypeChange = (value) => {
    setSelectSearchType(value);
  }

  const roommatePostsClick = () => {
    setRoomMatePosts(true);
    setShareHousePosts(false);
  };

  const handleInputChange = (e) => {
    console.log('value', e.target.value);
    setInputValue(e.target.value);
  }

  async function CommunityPostTitleSearch(keyword, code) {
    await axios.get(`${baseURL}/api/communitySearch`, {
      params: {
        keyword: keyword,
        code: code
      }
    })
    .then((response) => {
      console.log('response.data', response.data);
      setSearchCardData(response.data);
    })
    .catch((error) => { console.log(`CommunityPostTitleSearch axios error`);})
  }

  async function CommunityPostNicknameSearch(nickname, code) {
    await axios.get(`${baseURL}/api/communitySearch/nickname`, {
      params: {
        nickname: nickname,
        code: code
      }
    })
    .then((response) => {
      console.log('response.data', response.data);
      setSearchCardData(response.data);
    })
    .catch((error) => { console.log(`CommunityPostNicknameSearch axios error`);})
  }

  return (
    <>
      <Page>
        <CategoryNum>
          <Space direction="vertical">
            <Segmented
              options={[
                {
                  label: (
                    <div
                      style={{
                        padding: 4,
                      }}
                      onClick={() => { setCode('1');}}
                    >
                      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                      <div>User 1</div>
                    </div>
                  ),
                  value: "user1",
                },
                {
                  label: (
                    <div
                      style={{
                        padding: 4,
                      }}
                      onClick={() => { setCode('2');}}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#f56a00",
                        }}
                      >
                        K
                      </Avatar>
                      <div>User 2</div>
                    </div>
                  ),
                  value: "user2",
                },
                {
                  label: (
                    <div
                      style={{
                        padding: 4,
                      }}
                      onClick={() => { setCode('3');}}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#87d068",
                        }}
                        icon={<UserOutlined />}
                      />
                      <div>User 3</div>
                    </div>
                  ),
                  value: "user3",
                },
              ]}
            />
          </Space>
        </CategoryNum>
        <PostNavs roommatePostsClick={roommatePostsClick} />
        <CardPosts
          roommatePosts={roommatePosts}
          cardPostData={cardPostData}
          clickedCommunityId={clickedCommunityId}
        />
        <CardPost3 style={{ textAlign: "center", alignItems: "center" }}>
          <h2>가장 인기 있는 글</h2>
          <p>1. 내 방 자랑</p>
          <p>2. 새로운 청소기</p>
          <p>3. 오늘의 일기</p>
        </CardPost3>{" "}
        {/* CardPost3에 ref 추가 */}
        <Input 
          placeholder={selectSearchType === '제목'? `제목을 입력하세요.` : `닉네임을 입력하세요.`}
          size="small"
          onChange={handleInputChange}
        />
        <Select 
          defaultValue="제목"
          style={{
            width: 120,
          }}
          options={[
          {
            value: '제목',
            label: '제목'
          },
          {
            value: '닉네임',
            label: '닉네임'
          },
        ]}
          onChange={SearchTypeChange}
        />
        <button
          onClick={() => {
            if (selectSearchType === '제목') {
              CommunityPostTitleSearch(inputValue, code);
            }
            else {
              CommunityPostNicknameSearch(inputValue, code);
            }
          }}
        >
          검색
        </button>
        <PageNum>
          <Pagination defaultCurrent={1} total={50} />
        </PageNum>
      </Page>
    </>
  );
};

export default Post;
