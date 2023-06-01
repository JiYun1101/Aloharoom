import React from "react";
import styled from "styled-components";
import { Button, Form, Input, Modal, Select } from "antd";
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
    "조용한", "활발한", "규칙적인", "깔끔한", "차분한", "잠귀가 밝은",
    "수다쟁이",  "아침형", "저녁형", "집돌이/집순이", "밖돌이/밖순이",
    "배달마스터", "요리마스터", "맛집러버", "애주가", "헬짱", "게임", 
    "흡연", "비흡연", "메이트경험 O", "메이트경험 X", "평일근무", "주말근무",
    "교대근무", "야간근무", "출장근무", "프리랜서",
    "I", "E", "S", "N", "F", "T", "J", "P"
];

const HomeHashtags = [
    "엘리베이터", "주차가능", "베란다/발코니", "화장실 여러개",
    "신발장", "건조기", "공기청정기", "스타일러","반려동물",
    "홈짐", "역세권", "버스세권", "편세권", "먹세권", "헬세권",
    "숲세권", "한강세권", "야경맛집", "복층", "통창", "주변 소음 X",
    "방음 O", "수압 좋음", "환기 잘 되는", "로켓와우", "샛별배송", "SSG배송" ,"남향"
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
    const [gender, setGender] = useState("");
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
            setGender(response.data.gender);
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
            const response = await fetch(url , { mode: 'no-cors' });
            const blob = await response.blob();
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
            "nickname": nickname,
            "gender": gender,
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

    const onGenderChange = (value) => {
        setGender(value);
    }

    const handleOk = () => {
        UpdateMyInfoData();
        fetchMyInfoData();
        setIsMyProfileUpdateModalOpen(false);
    }

    useEffect(() => {
        fetchMyEditData();
    }, []);

    console.log('gender', gender);
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
                        border="1px solid #bbbbbb"
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
                <Form.Item
                    label="성별"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 12 }}
                >
                    <Select
                        value={gender}
                        onChange={onGenderChange}
                        placeholder="Select a person"
                        options={[
                            {
                                value: 'male',
                                label: '남자',
                            },
                            {
                                value: 'female',
                                label: '여자',
                            },
                            
                        ]}
                    />
                </Form.Item>
            </Form>
            <ModalFlexDiv width="99%" height="3.5rem" marginTop="0.5rem" alignItems="center">
                <ModalSpan fontSize="1.2rem" fontWeight="600">내 성향</ModalSpan>
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
                <ModalSpan fontSize="1.2rem" fontWeight="600">거주지 성향</ModalSpan>
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
                <ModalSpan fontSize="1.2rem" fontWeight="600">선호하는 사람</ModalSpan>
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
                <ModalSpan fontSize="1.2rem" fontWeight="600">선호하는 거주지</ModalSpan>
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