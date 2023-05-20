import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardPost from "./CardPost";

const CardPostListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CardPosts = (props) => {
  const [data, setData] = useState([]);

  // 게시물 리스트를 가져올 API 호출 등의 로직은 생략하고, 하드코딩으로 데이터를 만듦
  const initialData = [
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

  useEffect(() => {
    // 코드가 변경될 때마다 데이터를 새로 불러옴
    const fetchData = async () => {
      // API 호출 등의 비동기 작업 수행
      // 새로운 데이터를 받아온 후 setData로 데이터 업데이트
      setData(initialData);
    };

    fetchData();
  }, [props.code]);

  return (
    <CardPostListWrapper>
      {data.map((post) => (
        <CardPost
          key={post.id}
          title={post.title}
          content={post.content}
          code={props.code}
        />
      ))}
    </CardPostListWrapper>
  );
};

export default CardPosts;
