import React from "react";
import styled from "styled-components";
import CardPost from "./CardPost";

const CardPostListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CardPosts = () => {
  // 게시물 리스트를 가져올 API 호출 등의 로직은 생략하고, 하드코딩으로 데이터를 만듦
  const data = [
    { id: 1, title: "첫 번째 게시물", content: "첫 번째 게시물의 내용입니다." },
    { id: 2, title: "두 번째 게시물", content: "두 번째 게시물의 내용입니다." },
    { id: 3, title: "세 번째 게시물", content: "세 번째 게시물의 내용입니다." },
    { id: 4, title: "네 번째 게시물", content: "네 번째 게시물의 내용입니다." },
    {
      id: 5,
      title: "다섯 번째 게시물",
      content: "다섯 번째 게시물의 내용입니다.",
    },
  ];

  return (
    <CardPostListWrapper>
      {data.map((post) => (
        <CardPost key={post.id} title={post.title} content={post.content} />
      ))}
    </CardPostListWrapper>
  );
};

export default CardPosts;
