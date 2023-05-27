import React, { useEffect, useState } from "react";
import SearchHashTag from "./SearchHashTag";
import styled from "styled-components";
import MapPost from "./MapPost";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import baseURL from "../api/baseURL";

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

const PostMapContent = () => {
  //여기에 검색에 대한 상태 변수를 지정
  const [searchStr, setSearchStr] = useState(null);
  const [cardPostData, setCardPostData] = useState([]);
  const [swLat, setSWLat] = useState("");
  const [swLon, setSWLon] = useState("");
  const [neLat, setNELat] = useState("");
  const [neLon, setNELon] = useState("");
  async function fetchCardPostData() {
        await axios
        .get(`${baseURL}/api/board`, {
            params: {
                southWestLatitude: swLat,
                southWestLongitude: swLon,
                northEastLatitude: neLat,
                northEastLongitude: neLon
            }
        })
        .then((response) => {
            setCardPostData(response.data);
        })
        .catch((error) => {
            console.log("fetchCardPostData axios error");
        });
    }

    async function fetchFilterCardPostData() {
        await axios.get(`${baseURL}/api/search`, {
            withCredentials: true,
            params: {
                southWestLatitude: swLat,
                southWestLongitude: swLon,
                northEastLatitude: neLat,
                northEastLongitude: neLon,
                gender: localStorage.getItem('gender'),
                roomCount: localStorage.getItem('roomCount'),
                homeType: localStorage.getItem('homeType'),
                ageRange: JSON.parse(localStorage.getItem('ageRange')).join(),
                flatRange: JSON.parse(localStorage.getItem('flatRange')).join(),
                rentRange: JSON.parse(localStorage.getItem('rentRange')).join(),
                likeHashtags: JSON.parse(localStorage.getItem('likeHashtags')).join(),
                likeHomeHashtags: JSON.parse(localStorage.getItem('likeHomeHashtags')).join(),
            }
        })
        .then((response) => { 
            setCardPostData(response.data);
        })
        .catch((error) => { console.log(`fetchFilterCardPostData axios error`);})
    }
    
    useEffect(() => {
      let isFilterPressed = parseInt(localStorage.getItem('pressFilterButton'));
      if (isFilterPressed === 1) {
          fetchFilterCardPostData();
      }
      else if (isFilterPressed === 0) {
          fetchCardPostData();    
      }
      else {
        fetchCardPostData();    
      }
    }, [swLat, swLon, neLat, neLon]);

  return (
    <PostMapContentContainer>
      <SearchHashTag 
        setSearchStr={setSearchStr} 
        fetchCardPostData={fetchCardPostData}
        fetchFilterCardPostData={fetchFilterCardPostData}
      />
      <MapPost 
        searchStr={searchStr}
        cardPostData={cardPostData}
        setSWLat={setSWLat}
        setSWLon={setSWLon}
        setNELat={setNELat}
        setNELon={setNELon}
        fetchCardPostData={fetchCardPostData}
        fetchFilterCardPostData={fetchFilterCardPostData}
      />
      {localStorage.getItem('userId') ?
        <Link to="/newPostPage" style={LinkToStyle}>
          <AiOutlinePlusCircle size={50} style={NewPostIconStyle} />
        </Link>
      :
        <></>
      }
    </PostMapContentContainer>
  );
};

export default PostMapContent;
