import React from "react";
import styled from "styled-components";
import { Button, Form, Input, Modal } from "antd";
import ModalFlexDiv from "./modalcomponents/ModalFlexDiv";
import ModalProfileImg from "./modalcomponents/ModalProfileImg";
import ModalSpan from "./modalcomponents/ModalSpan";
import axios from "axios";
import baseURL from "../api/baseURL";
import { useEffect } from "react";
import { useState } from "react";
import HoverHashTagButton from "../HoverHashTagButton";
import NickNameDuplicatedModal from "./NickNameDuplicatedModal";
import NickNameNotDuplicatedModal from "./NickNameNotDuplicatedModal";

const PersonHashtags = [
    "조용한", "활발한", "아침형", "야행성", "배달의 민족", 
    "집돌이/집순이", "밖돌이", "밖순이", "자기계발", "성실한",
    "평일근무", "주말근무", "교대근무", "야간근무", "헬창",
    "맛집러버", "요리마스터", "I", "E", "S",
    "N", "F", "T", "J", "P"
];

const HomeHashtags = [
    "숲세권", "역세권", "한강세권", "편세권", "야경맛집",
    "주차가능", "엘리베이터", "주차장", "통창", "남향",
    "고층", "로켓와우", "샛별배송", "SSG배송", "베란다/발코니",
    "복층"
];

const ImageUploadInput = styled.input`
    display: none;
`;

const MyProfileUpdateModal = ({
    isMyProfileUpdateModalOpen,
    setIsMyProfileUpdateModalOpen,
    handelCancel,
    fetchMyInfoData
}) => {
    const [responseData, setResponseData] = useState({});
    const [age, setAge] = useState("");
    const [likeHashtags, setLikeHashtags] = useState([]);
    const [likeHomeHashtags, setLikeHomeHashtags] = useState([]);
    const [myHashtags, setMyHashtags] = useState([]);
    const [myHomeHashtags, setMyHomeHashtags] = useState([]);
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [profileImg, setProfileImg] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [isNickNameDuplicatedModalOpen, setNickNameDuplicatedModalOpen] = useState(false);
    const [isNickNameNotDuplicatedModalOpen, setNickNameNotDuplicatedModalOpen] = useState(false);
    const showNickNameDuplicatedModal = () => {setNickNameDuplicatedModalOpen(true);}
    const handleNickNameDuplicatedModalCancel = () => {setNickNameDuplicatedModalOpen(false);}
    const handleNickNameDuplicatedModalOk = () => { setNickNameDuplicatedModalOpen(false); }

    const showNickNameNotDuplicatedModal = () => {setNickNameNotDuplicatedModalOpen(true);}
    const handleNickNameNotDuplicatedModalCancel = () => {setNickNameNotDuplicatedModalOpen(false);}
    const handleNickNameNotDuplicatedModalOk = () => { setNickNameNotDuplicatedModalOpen(false); }

    console.log('profileImg', profileImg);
    console.log('previewImage', previewImage);
    async function fetchMyEditData() {
        await axios.get(`${baseURL}/api/myPage/edit`, {
            withCredentials:true
        })
        .then((response) => {
            console.log('response data', response.data);
            setResponseData(response.data);
            setPassword(response.data.password);
            setNickname(response.data.nickname);
            setAge(response.data.age);
            setLikeHashtags(response.data.likeHashtags);
            setLikeHomeHashtags(response.data.likeHomeHashtags);
            setMyHashtags(response.data.myHashtags);
            setMyHomeHashtags(response.data.myHomeHashtags);
            urlToFile(response.data.profileUrl.toString());
        })
        .catch((error) => {
            console.log(`axios fetchMyEditData error`);
        })
    } 

    async function usernameDuplicated(nickname) {
        await axios.get(`${baseURL}/api/nickname/${nickname}`, {
            withCredentials:true
        })
        .then((response) => {
            if(response.status === 200) {
                showNickNameNotDuplicatedModal();
            }
            // else if (response.status === 409) {
            //     showNickNameDuplicatedModal();
            // }
        })
        .catch((error) => {
            if (error.response.status === 409) {
                showNickNameDuplicatedModal();
            }
            console.log(`axios usernameDuplicated error`);
        })
    }


    function getFilenameFromURL(url) {
        const urlParts = url.split('/');
        return urlParts[urlParts.length - 1];
    }

    async function urlToFile(url) {
        setPreviewImage(url);
        try {
            const response = await axios.get(url, {
                responseType: 'blob'
            });
            console.log(response);
            const blob = response.data;
            const filename = getFilenameFromURL(url);
            console.log(filename);
            const newFile = new File([blob], filename, { type: blob.type });
            setProfileImg(newFile);
        } catch (error) {
            console.error(error);
            throw new Error('Failed to convert URL to File object.');
        }
    }

    async function UpdateMyInfoData() {
        const data = {
            "password": password,
            "nickname": nickname,
            "age": age,
            "likeHashtags": likeHashtags,
            "likeHomeHashtags": likeHomeHashtags,
            "myHashtags": myHashtags,
            "myHomeHashtags": myHomeHashtags
        };
        const jsonData = JSON.stringify(data);
        const blob = new Blob([jsonData], { type: "application/json"});
        const formData = new FormData();
        formData.append("myPageEditDto", blob);
        formData.append("profileImg", profileImg);
        await axios.patch(`${baseURL}/api/myPage/edit`, formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials:true
        })
        .then((response) => { 
            console.log('response data', response.data);
            fetchMyInfoData();
        })
        .catch((error) => {console.log(`UpdateMyInfoData error`);})
    }

    const handleMyHashTagClick = (index) => {
        if (myHashtags.includes(index)) {
            setMyHashtags(  myHashtags.filter((i) => i !== index));
        } else {
            setMyHashtags([...myHashtags, index]);
        }
    }

    const handleMyHomeHashTagClick = (index) => {
        if (myHomeHashtags.includes(index)) {
            setMyHomeHashtags(  myHomeHashtags.filter((i) => i !== index));
        } else {
            setMyHomeHashtags([...myHomeHashtags, index]);
        }
    }

    const handleLikeHashTagClick = (index) => {
        if (likeHashtags.includes(index)) {
            setLikeHashtags(  likeHashtags.filter((i) => i !== index));
        } else {
            setLikeHashtags([...likeHashtags, index]);
        }
    };
    const handleLikeHomeHashtagClick = (index) => {
        if (likeHomeHashtags.includes(index)) {
            setLikeHomeHashtags(likeHomeHashtags.filter((i) => i !== index));
        } else {
            setLikeHomeHashtags([...likeHomeHashtags, index]);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log('file', file);
        setProfileImg(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
            } else {
            setPreviewImage(null);
            }
    };

    const handleOk = () => {
        UpdateMyInfoData();
        fetchMyInfoData();
        setIsMyProfileUpdateModalOpen(false);
    }

    useEffect(() => {
        fetchMyEditData();
    }, []);
    return (
        <>
        {isNickNameDuplicatedModalOpen ?
            <NickNameDuplicatedModal
                isNickNameDuplicatedModalOpen={isNickNameDuplicatedModalOpen}
                handleOk={handleNickNameDuplicatedModalOk}
                handelCancel={handleNickNameDuplicatedModalCancel}
            />
        :
            <></>
        }
        {isNickNameNotDuplicatedModalOpen ?
            <NickNameNotDuplicatedModal
                isNickNameNotDuplicatedModalOpen={isNickNameNotDuplicatedModalOpen}
                handleOk={handleNickNameNotDuplicatedModalOk}
                handelCancel={handleNickNameNotDuplicatedModalCancel}
            />
        :
            <></>
        }
        <Modal title ="내 정보 수정" 
            open={isMyProfileUpdateModalOpen}
            onOk={handleOk}
            centered
            onCancel={handelCancel}
            bodyStyle={{height: "40rem", overflowY: 'auto'}}
            width={600}
        >
            <ModalFlexDiv width="99%" height="10rem" alignItems="center" justifyContent="center">
                <label htmlFor="imageUpload">
                    <ModalProfileImg 
                        width="9rem" 
                        height="9rem" 
                        borderRadius="10rem" 
                        src={previewImage}
                    />
                </label>
                <ImageUploadInput
                    type="file"
                    accept="image/*"
                    id="imageUpload"
                    onChange={handleFileChange}
                />
            </ModalFlexDiv>
            <Form style={{ fontSize: "4rem", marginTop: "1rem" }}>
                <Form.Item
                    label="아이디"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 12 }}
                >
                    {responseData.username}
                </Form.Item>
                <Form.Item
                    label="비밀번호"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 12 }}
                >
                    <Input.Password
                        value={password}
                        onChange={(e) => {setPassword(e.target.value);}}
                    />
                </Form.Item>
                <Form.Item
                    label="닉네임"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 12 }}
                >
                    <Input 
                        value={nickname}
                        onChange={(event) => { 
                            console.log('nickname', nickname)
                            setNickname(event.target.value);
                        }}
                    />
                    <Button
                        style={{ marginTop: "0.5rem"}}
                        onClick={() => { 
                            console.log('nickname', nickname)
                            usernameDuplicated(nickname)
                        }}
                    >
                        중복 확인
                    </Button>
                </Form.Item>
                <Form.Item
                    label="나이"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 12 }}
                >
                    <Input 
                        value={age}
                        onChange={(e) => { setAge(e.target.value); }}
                        style={{width: 50}}
                    />
                </Form.Item>
            </Form>
            <ModalFlexDiv width="99%" height="3.5rem" marginTop="0.5rem" alignItems="center">
                <ModalSpan fontSize="1.2rem">내 해시태그</ModalSpan>
            </ModalFlexDiv>
            <ModalFlexDiv width="99%" height="auto" flexDirection="row" flexWrap="wrap" gap="0.5rem">
                {PersonHashtags.map((data, idx) => (
                    <HoverHashTagButton
                        key={idx}
                        selected={myHashtags.includes(data)}
                        onClick={() => handleMyHashTagClick(data)}
                    >
                        {data}
                    </HoverHashTagButton>
                ))}
            </ModalFlexDiv>
            <ModalFlexDiv width="99%" height="3.5rem" marginTop="0.5rem" alignItems="center">
                <ModalSpan fontSize="1.2rem">집 해시태그</ModalSpan>
            </ModalFlexDiv>
            <ModalFlexDiv width="99%" height="auto" flexDirection="row" flexWrap="wrap" gap="0.5rem">
                {HomeHashtags.map((data, idx) => (
                    <HoverHashTagButton
                        key={idx}
                        selected={myHomeHashtags.includes(data)}
                        onClick={() => handleMyHomeHashTagClick(data)}
                    >
                        {data}
                    </HoverHashTagButton>
                ))}
            </ModalFlexDiv>
            <ModalFlexDiv width="99%" height="3.5rem" marginTop="0.5rem" alignItems="center">
                <ModalSpan fontSize="1.2rem">내 선호 해시태그</ModalSpan>
            </ModalFlexDiv>
            <ModalFlexDiv width="99%" height="auto" flexDirection="row" flexWrap="wrap" gap="0.5rem">
                {PersonHashtags.map((data, idx) => (
                    <HoverHashTagButton
                        key={idx}
                        selected={likeHashtags.includes(data)}
                        onClick={() => handleLikeHashTagClick(data)}
                    >
                        {data}
                    </HoverHashTagButton>
                ))}
            </ModalFlexDiv>
            <ModalFlexDiv width="99%" height="3.5rem" marginTop="0.5rem" alignItems="center">
                <ModalSpan fontSize="1.2rem">집 선호 해시태그</ModalSpan>
            </ModalFlexDiv>
            <ModalFlexDiv width="99%" height="auto" flexDirection="row" flexWrap="wrap" gap="0.5rem">
                {HomeHashtags.map((data, idx) => (
                    <HoverHashTagButton
                        key={idx}
                        selected={likeHomeHashtags.includes(data)}
                        onClick={() => handleLikeHomeHashtagClick(data)}
                    >
                        {data}
                    </HoverHashTagButton>
                ))}
            </ModalFlexDiv>
        </Modal>
        </>
    );
}

export default MyProfileUpdateModal;