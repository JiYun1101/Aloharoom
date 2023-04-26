import React, { useState }  from "react";
import styled from "styled-components";
import axios from "axios";
import NewPostContentInfoSection from "./NewPostContentInfoSection";
import NewPostContentWritingSection from "./NewPostContentWritingSection";
import { useParams } from "react-router-dom";

const NewPostContentDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const NewPostContentContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NewPostContentSection = () => {
    //입주 가능 날짜
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [count, setCount] = useState("");
    const [roomCount, setRoomCount] = useState("");
    const [address, setAddress] = useState("");
    const [homeType, setHomeType] = useState("");
    const [tradeType, setTradeType] = useState("");
    const [price, setPrice] = useState("");
    const [deposit, setDeposit] = useState("");
    const [rent, setRent] = useState("");
    const [flat, setFlat] = useState("");
    const [maintenance, setMaintenance] = useState("");
    const [floor, setFloor] = useState("");
    const [totalFloor, setTotalFloor] = useState("");
    const [startDate, setStartDate] = useState("");
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);
    const [ageRange, setAgeRange] = useState([]);
    const [imgFiles, setImgFiles] = useState([]);

    const updateID = useParams().id;
    if (updateID != null) {
        console.log('수정 페이지일 경우');
    }

    console.log("==============================");
    console.log("title ", title);
    console.log("contents ", contents);
    console.log("roomCount ", roomCount);
    console.log("address ", address);
    console.log("homeType ", homeType);
    console.log("tradeType ", tradeType);
    console.log("price ", price);
    console.log("deposit ", deposit);
    console.log("rent ", rent);
    console.log("flat ", flat);
    console.log("maintenance ", maintenance);
    console.log("floor ", floor);
    console.log("totalFloor ", totalFloor);
    console.log("startDate ", startDate);
    console.log("x ", x);
    console.log("y ", y);
    console.log("ageRange ", ageRange);
    console.log("imgFiles ", imgFiles);
    console.log("==============================");


    const PostInfoSubmit = () => {
        const data = {
            "title": title,
            "contents": contents,
            "count": count,
            "roomCount": roomCount,
            "address": address,
            "homeType": homeType,
            "tradeType": tradeType,
            "price": price,
            "deposit": deposit,
            "rent": rent,
            "flat": flat,
            "maintenance": maintenance,
            "floor": floor,
            "totalFloor": totalFloor,
            "startDate": startDate,
            "x": x,
            "y": y,
            "ageRange": ageRange
        }
        const jsonData = JSON.stringify(data);
        const blob = new Blob([jsonData], { type: "application/json"});
        const formData = new FormData();
        formData.append("boardAddDto", blob);
        for(let i = 0; i < imgFiles.length; i++) {
            formData.append("imgFiles", imgFiles[i]);
        }
        axios.post("http://localhost:8080/api/board", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <NewPostContentDiv>
                <NewPostContentContainer>
                    <NewPostContentInfoSection
                        address={address}
                        startDate={startDate}
                        x={x}
                        y={y}
                        roomCount={roomCount}
                        homeType={homeType}
                        flat={flat}
                        price={price}
                        tradeType={tradeType}
                        maintenance={maintenance}
                        deposit={deposit}
                        rent={rent}
                        floor={floor}
                        totalFloor={totalFloor}
                        title={title}
                        ageRange={ageRange}
                        setAddress={setAddress}
                        setStartDate={setStartDate}
                        setX={setX}
                        setY={setY}
                        setRoomCount={setRoomCount}
                        setHomeType={setHomeType}
                        setFlat={setFlat}
                        setPrice={setPrice}
                        setTradeType={setTradeType}
                        setMaintenance={setMaintenance}
                        setDeposit={setDeposit}
                        setRent={setRent}
                        setFloor={setFloor}
                        setTotalFloor={setTotalFloor}
                        setTitle={setTitle}
                        setAgeRange={setAgeRange}
                    />
                </NewPostContentContainer>
                <NewPostContentContainer>
                    <NewPostContentWritingSection
                        contents={contents}
                        imgFiles={imgFiles}
                        setContents={setContents}
                        setImgFiles={setImgFiles}
                        PostInfoSubmit={PostInfoSubmit}
                    />
                </NewPostContentContainer>
        </NewPostContentDiv>
    );
}

export default NewPostContentSection;