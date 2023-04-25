import React, { useState }  from "react";
import styled from "styled-components";
import axios from "axios";
import NewPostContentInfoSection from "./NewPostContentInfoSection";
import NewPostContentWritingSection from "./NewPostContentWritingSection";

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
    const [count, setCount] = useState("0");
    const [roomCount, setRoomCount] = useState("");
    const [address, setAddress] = useState("");
    const [homeType, setHomeType] = useState("");
    const [tradeType, setTradeType] = useState("월세");
    const [price, setPrice] = useState("");
    const [deposit, setDeposit] = useState("");
    const [rent, setRent] = useState("0");
    const [flat, setFlat] = useState("");
    const [maintenance, setMaintenance] = useState("");
    const [floor, setFloor] = useState("2");
    const [totalFloor, setTotalFloor] = useState("3");
    const [startDate, setStartDate] = useState("");
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);
    const [imgFiles, setImgFiles] = useState([]);

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
            "y": y
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
                        setAddress={setAddress}
                        setStartDate={setStartDate}
                        setX={setX}
                        setY={setY}
                        setRoomCount={setRoomCount}
                        setHomeType={setHomeType}
                        setFlat={setFlat}
                        setPrice={setPrice}
                        tradeType={tradeType}
                        setTradeType={setTradeType}
                        setMaintenance={setMaintenance}
                        setDeposit={setDeposit}
                    />
                </NewPostContentContainer>
                <NewPostContentContainer>
                    <NewPostContentWritingSection
                        setTitle={setTitle}
                        setContents={setContents}
                        setImgFiles={setImgFiles}
                        PostInfoSubmit={PostInfoSubmit}
                    />
                </NewPostContentContainer>
        </NewPostContentDiv>
    );
}

export default NewPostContentSection;