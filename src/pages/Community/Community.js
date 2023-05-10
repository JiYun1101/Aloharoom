import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react"; // useRef를 추가
import Header from "../Header";
import styled from "styled-components";
import CardPost2 from "./CardPost2";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Segmented, Space } from "antd";
import { Pagination } from "antd";
import axios from "axios";
import { useRef } from "react";

const Page = styled.div`
  margin-top: 1rem;
`;

const PageNum = styled.div`
  margin-top: 113rem;
  margin-left: 33rem;
`;

const CategoryNum = styled.div`
  text-align: center;
`;

const Card2 = styled.div`
  min-width: 90%;
  height: 10rem;
  border-style: solid;
  border-color: #bbbbbb;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    border-color: #47a5fd;
  }
`;
const CardBox2 = styled.div`
  position: absolute;
  top: 13rem;
  left: 18.5vw;
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  overflow: auto;
  gap: 2rem;
`;
const CommunityDiv = styled.div`
  width: 90%;
  height: 2rem;
  display: flex;
  align-items: flex-end;
`;

const CommunityButton = styled.button`
  margin-top: 90px;
  margin-left: 308px;
  background-color: white;
  width: 4.5rem;
  height: 1.5rem;
  color: #bbbbbb;
  font-weight: 500;
  font-size: 0.8rem;
  border: 2px solid #bbbbbb;
  border-radius: 0.5rem;
`;

const DateDiv = styled.div`
  width: 88%;
  height: 2rem;
`;

const DateSpan = styled.span`
  margin-left: 300px;
  font-size: 0.8rem;
  color: #bbbbbb;
  line-height: 2rem;
`;

const TitleDiv = styled.div`
  width: 88%;
  height: 2.5rem;
  display: flex;
  align-items: center;
`;

const TitleSpan = styled.span`
  margin-left: 300px;
  font-size: 1.1rem;
  font-weight: 600;
`;

const CardImageDiv = styled.div`
  width: 100%;
  height: 20rem;
  margin-right: auto;
`;

const CardImage = styled.img`
  margin-top: -70px;
  margin-left: 20px;
  width: 25%;
  height: 130px;
  border-radius: 1rem;
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

const Community = ({ match }) => {
  const { communityId } = match.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:8080/api/communityboard?communityId=${communityId}`
      );
      console.log('result.data', result.data);
      setData(result.data);
    };
    fetchData();
  }, [communityId]);

  useEffect(() => {
    // const handleScroll = () => {
    //   if (cardRef.current) {
    //     setScrollTop(cardRef.current.scrollTop);
    //   }
    // };

    // if (cardRef.current) {
    //   cardRef.current.addEventListener("scroll", handleScroll);
    // }

    // return () => {
    //   if (cardRef.current) {
    //     cardRef.current.removeEventListener("scroll", handleScroll);
    //   }
    // };
  }, []);

  return (
    <>
      <Header />
      <div className="App"></div>{" "}
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
        <CardBox2 style={{ borderStyle: "solid"}}>
          {data.map((post) => (
            <Card2 key={post.communityId}>
              <CardImageDiv>
                <Link to={`/community/${post.communityId}/post/${post.id}`}>
                  <CardImage src={post.imageUrl} alt="cardImage" />
                </Link>
              </CardImageDiv>
              <CommunityDiv>
                <CommunityButton>{post.community.name}</CommunityButton>
                <DateDiv>
                  <DateSpan>{post.createdAt}</DateSpan>
                </DateDiv>
              </CommunityDiv>
              <TitleDiv>
                <TitleSpan>{post.title}</TitleSpan>
              </TitleDiv>
            </Card2>
          ))}
        </CardBox2>
        <CardPost3 style={{ textAlign: "center", alignItems: "center" }}>
          <h2>가장 인기 있는 글</h2>
          <p>1. 내 방 자랑</p>
          <p>2. 새로운 청소기</p>
          <p>3. 오늘의 일기</p>
        </CardPost3>{" "}
        {/* CardPost3에 ref 추가 */}
        <PageNum>
          <Pagination defaultCurrent={1} total={50} />
        </PageNum>
      </Page>
    </>
  );
};

export default Community;
