import { Button, message, Steps, theme } from "antd";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import "../style/RegisterPage0.css"; // importing the CSS file
import cheersImg from "../img/cheers.png";
import freelanceImg from "../img/freelance.png";
import thinkingImg from "../img/thinking.png";
// import air_conditionerImg from "../img/air_conditioner.png";
// import microwaveImg from "../img/microwave.png";
// import washing_machineImg from "../img/washing_machine.png";
// import water_purifierImg from "../img/water_purifier.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import baseURL from "./api/baseURL";
import { AiOutlineLeft } from "react-icons/ai";

const BackPageIconStyle = {
  position: "absolute",
  top: "1vh",
  left: "1vw",
  color: "#47a5fd",
};

const FirstContent = ({ onClick }) => {
  const [clickedButton, setClickedButton] = useState(
    localStorage.getItem("clickedButton") || ""
  );
  const handleClick = (buttonName) => {
    setClickedButton(buttonName);
    onClick(buttonName);
    console.log(buttonName);
  };

  return (
    <div>
      <div className="titleWrap2">당신은 집에서 주로 어떤 유형인가요?</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
          marginBottom: "-5%",
        }}
      >
        <Button
          onClick={() => handleClick("cheers")}
          className={`button ${clickedButton === "cheers" && "button-pressed"}`}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src={cheersImg}
              alt="Cheers!"
              className="button-img"
              style={{ marginBottom: "5px" }}
            />
          </div>
          <div className="button-text" style={{ marginTop: "0px" }}>
            친구와 함께
          </div>
        </Button>

        <Button
          onClick={() => handleClick("freelance")}
          className={`button ${
            clickedButton === "freelance" && "button-pressed"
          }`}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img src={freelanceImg} alt="freelance!" className="button-img" />
          </div>
          <div className="button-text">혼자서 느긋하게</div>
        </Button>

        <Button
          onClick={() => handleClick("thinking")}
          className={`button ${
            clickedButton === "thinking" && "button-pressed"
          }`}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img src={thinkingImg} alt="thinking!" className="button-img" />
          </div>
          <div className="button-text">잘 모르겠다</div>
        </Button>
      </div>
      {/* <input type="hidden" name="likeHashtags" value={clickedButton} /> */}
    </div>
  );
};

const tags2 = [
  "조용한",
  "활발한",
  "규칙적인",
  "깔끔한",
  "차분한",
  "잠귀가 밝은",
  "수다쟁이",
  "아침형",
  "저녁형",
  "집돌이/집순이",
  "밖돌이/밖순이",
  "배달마스터",
  "요리마스터",
  "맛집러버",
  "애주가",
  "헬짱",
  "게임",
  "흡연",
  "비흡연",
  "메이트경험 O",
  "메이트경험 X",
  "평일근무",
  "주말근무",
  "교대근무",
  "야간근무",
  "출장근무",
  "프리랜서",
  "I",
  "E",
  "S",
  "N",
  "F",
  "T",
  "J",
  "P",
];

const SecondContent = ({ onClick }) => {
  const [tagPressed2, setTagPressed2] = useState(
    localStorage.getItem("clickedButton2") || ""
  );
  const [clickButton2, setClickButton2] = useState([]);

  const handleTagClick2 = (buttonName2) => {
    console.log(buttonName2);

    const isButtonAlreadyClicked = clickButton2.includes(buttonName2);
    let newClickButton2;
    if (isButtonAlreadyClicked) {
      newClickButton2 = clickButton2.filter((button) => button !== buttonName2);
    } else {
      newClickButton2 = [...clickButton2, buttonName2];
    }
    setClickButton2(newClickButton2);
    onClick(newClickButton2);

    const lastArray = newClickButton2[newClickButton2.length - 1]; // 마지막 배열 추출
    console.log("마지막 배열:", lastArray);

    // 버튼 클릭 시 태그 상태 업데이트
    setTagPressed2(newClickButton2);
  };

  useEffect(() => {
    const savedTagPressed2 = localStorage.getItem("clickedButton2");
    if (savedTagPressed2) {
      setClickButton2(
        savedTagPressed2.split(",").filter((item) => item !== undefined)
      );
    }
  }, []);

  useEffect(() => {
    const savedTagPressed2 = localStorage.getItem("clickedButton2");
    if (savedTagPressed2) {
      const parsedArray = savedTagPressed2
        .split(",")
        .filter((item) => item !== undefined && item !== "undefined");
      setClickButton2(parsedArray);
      console.log("parsedArray", parsedArray);
    }
  }, []);
  return (
    <div>
      <div className="titleWrap2">
        선호하는 사람에 대한 해시태그를 골라주세요!
      </div>
      <div className="hashtagWrap">
        {tags2.map((tag) => (
          <button2
            key={tag}
            onClick={() => handleTagClick2(tag)}
            className={`tag-button ${
              tagPressed2.includes(tag) && "tag-button-pressed"
            }`}
          >
            #{tag}
          </button2>
        ))}
      </div>
    </div>
  );
};

const tags3 = [
  "엘리베이터",
  "주차가능",
  "신발장",
  "화장실 여러개",
  "건조기",
  "베란다/발코니",
  "공기청정기",
  "스타일러",
  "반려동물",
  "홈짐",
  "역세권",
  "버스세권",
  "편세권",
  "먹세권",
  "헬세권",
  "숲세권",
  "한강세권",
  "야경맛집",
  "복층",
  "통창",
  "주변 소음 X",
  "방음 O",
  "수압 좋음",
  "환기 잘 되는",
  "로켓와우",
  "샛별배송",
  "SSG배송",
  "남향",
];

const ThirdContent = ({ onClick }) => {
  const [tagPressed3, setTagPressed3] = useState(
    localStorage.getItem("clickedButton3") || ""
  );
  const [clickButton3, setClickButton3] = useState([]);

  const handleTagClick3 = (buttonName3) => {
    console.log(buttonName3);

    const isButtonAlreadyClicked = clickButton3.includes(buttonName3);
    let newClickButton3;
    if (isButtonAlreadyClicked) {
      newClickButton3 = clickButton3.filter((button) => button !== buttonName3);
    } else {
      newClickButton3 = [...clickButton3, buttonName3];
    }
    setClickButton3(newClickButton3);
    onClick(newClickButton3);

    const lastArray3 = newClickButton3[newClickButton3.length - 1]; // 마지막 배열 추출
    console.log("마지막 배열:", lastArray3);

    // 버튼 클릭 시 태그 상태 업데이트
    setTagPressed3(newClickButton3);
  };

  useEffect(() => {
    const savedTagPressed3 = localStorage.getItem("clickedButton3");
    if (savedTagPressed3) {
      setClickButton3(
        savedTagPressed3.split(",").filter((item) => item !== undefined)
      );
    }
  }, []);

  useEffect(() => {
    const savedTagPressed3 = localStorage.getItem("clickedButton3");
    if (savedTagPressed3) {
      const parsedArray = savedTagPressed3
        .split(",")
        .filter((item) => item !== undefined && item !== "undefined");
      setClickButton3(parsedArray);
      console.log("parsedArray", parsedArray);
    }
  }, []);
  return (
    <div>
      <div className="titleWrap2">
        선호하는 집에 대한 해시태그를 골라주세요!
      </div>
      <div className="hashtagWrap">
        {tags3.map((tag) => (
          <button2
            key={tag}
            onClick={() => handleTagClick3(tag)}
            className={`tag-button ${
              tagPressed3.includes(tag) && "tag-button-pressed"
            }`}
          >
            #{tag}
          </button2>
        ))}
      </div>
    </div>
  );
};

const tags4 = [
  "조용한",
  "활발한",
  "규칙적인",
  "깔끔한",
  "차분한",
  "잠귀가 밝은",
  "수다쟁이",
  "아침형",
  "저녁형",
  "집돌이/집순이",
  "밖돌이/밖순이",
  "배달마스터",
  "요리마스터",
  "맛집러버",
  "애주가",
  "헬짱",
  "게임",
  "흡연",
  "비흡연",
  "메이트경험 O",
  "메이트경험 X",
  "평일근무",
  "주말근무",
  "교대근무",
  "야간근무",
  "출장근무",
  "프리랜서",
  "I",
  "E",
  "S",
  "N",
  "F",
  "T",
  "J",
  "P",
];
const FourthContent = ({ onClick }) => {
  const [tagPressed4, setTagPressed4] = useState(
    localStorage.getItem("clickedButton4") || ""
  );
  const [clickButton4, setClickButton4] = useState([]);

  const handleTagClick4 = (buttonName4) => {
    console.log(buttonName4);

    const isButtonAlreadyClicked = clickButton4.includes(buttonName4);
    let newClickButton4;
    if (isButtonAlreadyClicked) {
      newClickButton4 = clickButton4.filter((button) => button !== buttonName4);
    } else {
      newClickButton4 = [...clickButton4, buttonName4];
    }
    setClickButton4(newClickButton4);
    onClick(newClickButton4);

    const lastArray4 = newClickButton4[newClickButton4.length - 1]; // 마지막 배열 추출
    console.log("마지막 배열:", lastArray4);

    // 버튼 클릭 시 태그 상태 업데이트
    setTagPressed4(newClickButton4);
  };

  useEffect(() => {
    const savedTagPressed4 = localStorage.getItem("clickedButton4");
    if (savedTagPressed4) {
      setClickButton4(
        savedTagPressed4.split(",").filter((item) => item !== undefined)
      );
    }
  }, []);

  useEffect(() => {
    const savedTagPressed4 = localStorage.getItem("clickedButton4");
    if (savedTagPressed4) {
      const parsedArray = savedTagPressed4
        .split(",")
        .filter((item) => item !== undefined && item !== "undefined");
      setClickButton4(parsedArray);
      console.log("parsedArray", parsedArray);
    }
  }, []);

  return (
    <div>
      <div className="titleWrap2">나에 대한 해시태그를 골라주세요!</div>
      <div className="titleWrap3">!룸메이트만 구하고 있다면 스킵!</div>
      <div className="hashtagWrap">
        {tags4.map((tag) => (
          <button2
            key={tag}
            onClick={() => handleTagClick4(tag)}
            className={`tag-button ${
              tagPressed4.includes(tag) && "tag-button-pressed"
            }`}
          >
            #{tag}
          </button2>
        ))}
      </div>
    </div>
  );
};

const tags5 = [
  "엘리베이터",
  "주차가능",
  "신발장",
  "화장실 여러개",
  "건조기",
  "베란다/발코니",
  "공기청정기",
  "스타일러",
  "반려동물",
  "홈짐",
  "역세권",
  "버스세권",
  "편세권",
  "먹세권",
  "헬세권",
  "숲세권",
  "한강세권",
  "야경맛집",
  "복층",
  "통창",
  "주변 소음 X",
  "방음 O",
  "수압 좋음",
  "환기 잘 되는",
  "로켓와우",
  "샛별배송",
  "SSG배송",
  "남향",
];

const LastContent = ({ onClick }) => {
  const [tagPressed5, setTagPressed5] = useState(
    localStorage.getItem("clickedButton5") || ""
  );
  const [clickButton5, setClickButton5] = useState([]);

  const handleTagClick5 = (buttonName5) => {
    console.log(buttonName5);

    const isButtonAlreadyClicked = clickButton5.includes(buttonName5);
    let newClickButton5;
    if (isButtonAlreadyClicked) {
      newClickButton5 = clickButton5.filter((button) => button !== buttonName5);
    } else {
      newClickButton5 = [...clickButton5, buttonName5];
    }
    setClickButton5(newClickButton5);
    onClick(newClickButton5);

    const lastArray = newClickButton5[newClickButton5.length - 1]; // 마지막 배열 추출
    console.log("마지막 배열:", lastArray);

    // 버튼 클릭 시 태그 상태 업데이트
    setTagPressed5(newClickButton5);
  };

  useEffect(() => {
    const savedTagPressed5 = localStorage.getItem("clickedButton5");
    if (savedTagPressed5) {
      setClickButton5(
        savedTagPressed5.split(",").filter((item) => item !== undefined)
      );
    }
  }, []);

  useEffect(() => {
    const savedTagPressed5 = localStorage.getItem("clickedButton5");
    if (savedTagPressed5) {
      const parsedArray = savedTagPressed5
        .split(",")
        .filter((item) => item !== undefined && item !== "undefined");
      setClickButton5(parsedArray);
      console.log("parsedArray", parsedArray);
    }
  }, []);
  return (
    <div>
      <div className="titleWrap2">
        내 집에 대한 해시태그를 제공하세요!
      </div>
      <div className="titleWrap3">!룸메이트만 구하고 있다면 스킵!</div>
      <div className="hashtagWrap">
        {tags5.map((tag) => (
          <button2
            key={tag}
            onClick={() => handleTagClick5(tag)}
            className={`tag-button ${
              tagPressed5.includes(tag) && "tag-button-pressed"
            }`}
          >
            #{tag}
          </button2>
        ))}
      </div>
    </div>
  );
};
const steps = [
  {
    title: " ",
    content: <FirstContent />,
  },
  {
    title: " ",
    content: <SecondContent />,
  },
  {
    title: " ",
    content: <ThirdContent />,
  },
  {
    title: " ",
    content: <FourthContent />,
  },
  {
    title: " ",
    content: <LastContent />,
  },
];

const onFinish = async (use_state, navigate) => {
  try {
    console.log("username :" + use_state.username);
    console.log("password :" + use_state.password);
    console.log("nickname :" + use_state.nickname);
    console.log("age :" + use_state.age);
    console.log("gender :" + use_state.gender);
    console.log("tendency :" + use_state.tendency);
    console.log("likeHashtags :" + use_state.likeHashtags);
    console.log("likeHomeHashtags :" + use_state.likeHomeHashtags);
    console.log("myHashtags :" + use_state.myHashtags);
    console.log("myHomeHashtags :" + use_state.myHomeHashtags);

    const likeHashtags = use_state.likeHashtags.toString().split(",");
    const likeHomeHashtags = use_state.likeHomeHashtags.toString().split(",");
    const myHashtags = use_state.myHashtags.toString().split(",");
    const myHomeHashtags = use_state.myHomeHashtags.toString().split(",");

    await axios.post(`${baseURL}/api/signup`, {
      username: use_state.username.toString(),
      password: use_state.password.toString(),
      nickname: use_state.nickname.toString(),
      age: use_state.age.toString(),
      gender: use_state.gender.toString(),
      tendency: use_state.tendency.toString(),
      likeHashtags,
      likeHomeHashtags,
      myHashtags,
      myHomeHashtags,
    });
    message.success("Processing complete!");
  } catch (error) {
    console.error("Registration failed:", error);
  }
  navigate("../../login");
};

function RegisterPage2() {
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = theme.useToken();

  const [current, setCurrent] = useState(0);
  const [current1, setCurrent1] = useState(1);
  const [clickedButton, setClickedButton] = useState([]);
  const [clickedButton2, setClickedButton2] = useState([]);
  const [clickedButton3, setClickedButton3] = useState([]);
  const [clickedButton4, setClickedButton4] = useState([]);
  const [clickedButton5, setClickedButton5] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const use_state = location.state;

  useEffect(() => {
    localStorage.setItem("clickedButton", JSON.stringify(clickedButton));
    console.log("이름", clickedButton);
  }, [clickedButton]);

  useEffect(() => {
    localStorage.setItem("clickedButton2", JSON.stringify(clickedButton2));
    console.log("이름2", clickedButton2);
  }, [clickedButton2]);

  useEffect(() => {
    localStorage.setItem("clickedButton3", JSON.stringify(clickedButton3));
    console.log("이름3", clickedButton3);
  }, [clickedButton3]);

  useEffect(() => {
    localStorage.setItem("clickedButton4", JSON.stringify(clickedButton4));
  }, [clickedButton4]);

  useEffect(() => {
    localStorage.setItem("clickedButton5", JSON.stringify(clickedButton5));
  }, [clickedButton5]);

  // ...

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  // ...

  const handleClick = (buttonName) => {
    setIsClicked(true);
    setClickedButton((prevButtons) => [...prevButtons, buttonName]);
  };

  const handleTagClick2 = (buttonName2) => {
    setIsClicked(true);
    setClickedButton2((prevButtons) => [...prevButtons, buttonName2]);
  };

  const handleTagClick3 = (buttonName3) => {
    setIsClicked(true);
    setClickedButton3((prevButtons) => [...prevButtons, buttonName3]);
  };

  const handleTagClick4 = (buttonName4) => {
    setIsClicked(true);
    setClickedButton4((prevButtons) => [...prevButtons, buttonName4]);
  };

  const handleTagClick5 = (buttonName5) => {
    setIsClicked(true);
    setClickedButton5((prevButtons) => [...prevButtons, buttonName5]);
  };

  useEffect(() => {
    localStorage.setItem(
      "clickedButton",
      clickedButton[clickedButton.length - 1]
    );
  }, [clickedButton]);

  useEffect(() => {
    localStorage.setItem(
      "clickedButton2",
      clickedButton2[clickedButton2.length - 1]
    );
    console.log("이름2", clickedButton2);
  }, [clickedButton2]);

  useEffect(() => {
    localStorage.setItem(
      "clickedButton3",
      clickedButton3[clickedButton3.length - 1]
    );
  }, [clickedButton3]);

  useEffect(() => {
    localStorage.setItem(
      "clickedButton4",
      clickedButton4[clickedButton4.length - 1]
    );
  }, [clickedButton4]);

  useEffect(() => {
    localStorage.setItem(
      "clickedButton5",
      clickedButton5[clickedButton5.length - 1]
    );
  }, [clickedButton5]);

  useEffect(() => {
    localStorage.setItem("current", JSON.stringify(current));
  }, [current]);

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: "460px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <AiOutlineLeft
        size={40}
        style={BackPageIconStyle}
        onClick={() => navigate("../")}
      />
      <div className="page">
        <div class="terms__content" style={{ margin: "10px" }}>
          <>
            <Steps current={current} items={items} />
            <div style={contentStyle}>
              {React.cloneElement(steps[current].content, {
                onClick:
                  current === 0
                    ? handleClick
                    : current === 1
                    ? handleTagClick2
                    : current === 2
                    ? handleTagClick3
                    : current === 3
                    ? handleTagClick4
                    : current === 4
                    ? handleTagClick5
                    : null,
                // current 값에 따라 handleClick, handleClick2, handleClick3 함수 중 하나를 호출하도록 설정
              })}
            </div>
            {/* {console.log("buttonName3 :", clickedButton3)} */}
            <div
              style={{
                marginTop: 24,
              }}
            >
              {" "}
              <Button
                style={{
                  position: "fixed",
                  margin: "0 30px",
                }}
              >
                <Link to="../RegisterPage">되돌아가기</Link>
              </Button>
              {current < steps.length - 1 && (
                <Button
                  type="primary"
                  style={{
                    margin: "0 385px",
                  }}
                  onClick={() => next()}
                >
                  다음
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  style={{
                    margin: "0 385px",
                  }}
                  onClick={() => {
                    const buttonName = clickedButton;
                    const buttonName2 = clickedButton2;
                    const buttonName3 = clickedButton3;

                    const buttonName4 = clickedButton4;
                    const buttonName5 = clickedButton5;

                    // setClickedButton([...clickedButton, buttonName]);
                    // setClickedButton2([...clickedButton2, buttonName2]);
                    // setClickedButton3([...clickedButton3, buttonName3]);
                    // setClickedButton4([...clickedButton4, buttonName4]);
                    // setClickedButton5([...clickedButton5, buttonName5]);

                    console.log(
                      "buttonName :",
                      buttonName[buttonName.length - 1]
                    );
                    console.log(
                      "buttonName2 :",
                      buttonName2[buttonName2.length - 1]
                    );
                    // console.log("buttonName3 :", buttonName3);
                    console.log(
                      "buttonName3 :",
                      buttonName3[buttonName3.length - 1]
                    );

                    console.log(
                      "buttonName4 :",
                      buttonName4[buttonName4.length - 1]
                    );
                    console.log(
                      "buttonName5 :",
                      buttonName5[buttonName5.length - 1]
                    );

                    // const newButtonName3 = clickedButton3.map(
                    //   (str) => `"${str.trim()}"`
                    // );

                    // console.log("buttonName3: ", clickedButton3); // ['quiet', 'gym']
                    // console.log("newButtonName3: ", newButtonName3); // ["quiet", "gym"]

                    use_state["tendency"] =
                      buttonName[buttonName.length - 1] || null;
                    use_state["likeHashtags"] =
                      buttonName2[buttonName2.length - 1] || null;
                    use_state["likeHomeHashtags"] =
                      buttonName3[buttonName3.length - 1] || null;
                    use_state["myHashtags"] =
                      buttonName4[buttonName4.length - 1] || null;
                    use_state["myHomeHashtags"] =
                      buttonName5[buttonName5.length - 1] || null;

                    onFinish(use_state, navigate);
                  }}
                >
                  다음
                </Button>
              )}
              {current > 0 && (
                <Button
                  style={{
                    position: "fixed",
                    margin: "-6.3% 30px",
                  }}
                  onClick={() => prev()}
                >
                  되돌아가기
                </Button>
              )}
            </div>
          </>
        </div>
      </div>
    </>
  );
}

export default RegisterPage2;
