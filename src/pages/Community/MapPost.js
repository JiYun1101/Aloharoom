// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import Post from "./Post";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// const MapPostContainer = styled.div`
//   position: absolute;
//   top: 10.1rem;
//   width: 99.5%;
//   height: 82%;
//   display: flex;
// `;

// const MapPost = ({ clickedCommunityId, setClickedCommunityId }) => {
//   const [cardPostData, setCardPostData] = useState([]);
//   const location = useLocation();
//   const code = new URLSearchParams(location.search).get("code");

//   async function fetchCardPostData() {
//     try {
//       if (!code) {
//         // code가 null 인 경우에 대한 처리
//         return;
//       }
//       const response = await axios.get(
//         `${baseURL}/api/communityboard/code/${code}`
//       );
//       setCardPostData(response.data);
//       console.log("cardPostData => response.data : ", response.data);
//     } catch (error) {
//       console.log("axios error");
//     }
//   }
//   function handleClickPost(post) {
//     setClickedCommunityId(post.clickedCommunityId);
//   }

//   useEffect(() => {
//     async function fetchData() {
//       await fetchCardPostData();
//     }
//     fetchData();
//   }, [code]);

//   return (
//     <MapPostContainer>
//       {/* <KakaoMapPart searchStr={searchStr} cardPostData={cardPostData} /> */}
//       <Post
//         clickedCommunityId={clickedCommunityId}
//         cardPostData={cardPostData}
//         handleClickPost={handleClickPost}
//       />
//     </MapPostContainer>
//   );
// };

// export default MapPost;
