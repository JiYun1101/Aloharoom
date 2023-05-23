// import React, { useState } from "react";
// import styled from "styled-components";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { UserOutlined } from "@ant-design/icons";
// import { Avatar, Segmented, Space } from "antd";
// import { Button, Form, Input, Radio } from "antd";
// import CardPosts from "./CardPosts"; // CardPosts import

// const CategoryNum = styled.div`
//   text-align: center;
// `;

// const CardPost3 = styled.div`
//   position: fixed;
//   top: 10rem;
//   right: 2%;
//   width: 15%;
//   height: 35rem;
//   border-color: #bbbbbb;
//   border-style: solid;
//   border-radius: 1rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const FormContainer = styled.div`
//   margin: 1rem 0;
//   margin-right: 10rem;
//   display: flex;
//   justify-content: center;
// `;

// const FormItemContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const PostMapContentContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 50rem;
//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
// `;

// const LinkToStyle = {
//   textDecoration: "none",
//   color: "inherit",
// };

// const NewPostIconStyle = {
//   position: "absolute",
//   right: "2rem",
//   bottom: "0.001rem",
//   zIndex: "2",
//   color: "#bbbbbb",
// };

// const PostContent = () => {
//   const [isCardPostsVisible, setIsCardPostsVisible] = useState(true); // CardPosts의 가시성 상태 추가

//   const [form] = Form.useForm();
//   const [formLayout, setFormLayout] = useState("horizontal");
//   const onFormLayoutChange = ({ layout }) => {
//     setFormLayout(layout);
//   };
//   const formItemLayout =
//     formLayout === "horizontal"
//       ? {
//           labelCol: {
//             span: 4,
//           },
//           wrapperCol: {
//             span: 14,
//           },
//         }
//       : null;
//   const buttonItemLayout =
//     formLayout === "horizontal"
//       ? {
//           wrapperCol: {
//             span: 14,
//             offset: 4,
//           },
//         }
//       : null;

//   const handleNavigation = () => {
//     setIsCardPostsVisible(false); // navigation 이벤트가 발생하면 CardPosts를 가려줍니다.
//   };

//   const handleOnClick = () => {
//     handleNavigation();
//     setIsCardPostsVisible(true);
//   };

//   return (
//     <PostMapContentContainer>
//       {isCardPostsVisible && <CardPosts />}{" "}
//       {/* CardPosts의 가시성 상태에 따라 렌더링 */}
//       <CardPost3 style={{ textAlign: "center", alignItems: "center" }}>
//         {}
//       </CardPost3>{" "}
//       <Link to="/newCommunityPostPage" style={LinkToStyle}>
//         <AiOutlinePlusCircle size={50} style={NewPostIconStyle} />
//       </Link>
//     </PostMapContentContainer>
//   );
// };

// export default PostContent;
