import React, { useState } from "react";
import styled from "styled-components";
import CardPosts from "./CardPosts";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Segmented, Space } from "antd";
import { Pagination } from "antd";
import { Link } from "react-router-dom"; // Link import 추가
// import CardPost2 from "./Community";

import { Button, Form, Input, Radio } from "antd";

const Page = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const Post = ({ clickedCommunityId, cardPostData }) => {
  const [roommatePosts, setRoomMatePosts] = useState(true);
  const [sharehousePosts, setShareHousePosts] = useState(false);
  const [code, setCode] = useState(1); // 코드 초기값을 null로 변경

  const roommatePostsClick = () => {
    setRoomMatePosts(true);
    setShareHousePosts(false);
  };

  return (
    <>
      <Page>
        <CardPosts
          roommatePosts={roommatePosts}
          cardPostData={cardPostData}
          clickedCommunityId={clickedCommunityId}
        />
      </Page>
    </>
  );
};

export default Post;
