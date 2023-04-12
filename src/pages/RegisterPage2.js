import { Button, message, Steps, theme } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "../style/RegisterPage0.css"; // importing the CSS file
import cheersImg from "../img/cheers.png";
import freelanceImg from "../img/freelance.png";
import thinkingImg from "../img/thinking.png";
import air_conditionerImg from "../img/air_conditioner.png";
import microwaveImg from "../img/microwave.png";
import washing_machineImg from "../img/washing_machine.png";
import water_purifierImg from "../img/water_purifier.png";
import { useLocation } from "react-router-dom";
import axios from "axios";

const FirstContent = ({ onClick }) => {
  const [clickedButton, setClickedButton] = useState(null);

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
          justifyContent: "center",
          marginTop: "5%",
          marginBottom: "-5%",
        }}
      >
        <Button
          onClick={() => handleClick("cheers")}
          className={`button ${clickedButton === "cheers" && "button-pressed"}`}
        >
          <img src={cheersImg} alt="Cheers!" className="button-img" />
          <div className="button-text">친구와 함께</div>
        </Button>

        <Button
          onClick={() => handleClick("freelance")}
          className={`button ${
            clickedButton === "freelance" && "button-pressed"
          }`}
        >
          <img src={freelanceImg} alt="freelance!" className="button-img" />
          <div className="button-text">혼자서 느긋하게</div>
        </Button>

        <Button
          onClick={() => handleClick("thinking")}
          className={`button ${
            clickedButton === "thinking" && "button-pressed"
          }`}
        >
          <img src={thinkingImg} alt="thinking!" className="button-img" />
          <div className="button-text">잘 모르겠다</div>
        </Button>
      </div>
      {/* <input type="hidden" name="likeHashtags" value={clickedButton} /> */}
    </div>
  );
};

const SecondContent = ({ onClick }) => {
  const [clickedButton2, setClickedButton2] = useState(null);

  const handleClick2 = (buttonName2) => {
    setClickedButton2(buttonName2);
    onClick(buttonName2);
    console.log(buttonName2); // 새로 추가된 코드
  };

  return (
    <div>
      <div className="titleWrap2">
        집에는 어떤 가구가 필요하다고 생각하시나요?
      </div>
      <div style={{ display: "flex", marginTop: "2%", marginBottom: "-1.7%" }}>
        <div class="flex-container wrap">
          <Button
            onClick={() => handleClick2("water_purifier")}
            className={`button ${
              clickedButton2 === "water_purifier" && "button-pressed"
            }`}
          >
            <img
              src={water_purifierImg}
              alt="water_purifier!"
              className="button-img"
            />
            <div className="button-text">정수기</div>
          </Button>

          <Button
            onClick={() => handleClick2("air_conditioner")}
            className={`button ${
              clickedButton2 === "air_conditioner" && "button-pressed"
            }`}
          >
            <img
              src={air_conditionerImg}
              alt="air_conditioner!"
              className="button-img"
            />
            <div className="button-text">에어컨</div>
          </Button>

          <Button
            onClick={() => handleClick2("microwave")}
            className={`button ${
              clickedButton2 === "microwave" && "button-pressed"
            }`}
            style={{ marginTop: "15px", marginBottom: "16%" }}
          >
            <img src={microwaveImg} alt="microwave!" className="button-img" />
            <div className="button-text">전자레인지</div>
          </Button>

          <Button
            onClick={() => handleClick2("washing_machine")}
            className={`button ${
              clickedButton2 === "washing_machine" && "button-pressed"
            }`}
            style={{ marginTop: "15px", marginBottom: "16%" }}
          >
            <img
              src={washing_machineImg}
              alt="washing_machine!"
              className="button-img"
            />
            <div className="button-text">세탁기</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

const ThirdContent = ({ onClick }) => {
  const [tagPressed, setTagPressed] = useState([]);

  const handleTagClick = (buttonName3) => {
    if (tagPressed.includes(buttonName3)) {
      setTagPressed((prevTags) =>
        prevTags.filter((tag) => tag !== buttonName3)
      );
      onClick(null); // 값이 없어졌으므로 null 전달
    } else {
      setTagPressed((prevTags) => [...prevTags, buttonName3]);
      onClick(String(buttonName3)); // 문자열로 변환하여 전달
    }
  };

  return (
    <div>
      <div className="titleWrap2">그외에 어떤 것들을 중요하게 생각하나요?</div>
      <div className="tagWrap">
        <div className="tag-button-wrap" style={{ zIndex: 1 }}>
          <button
            onClick={() => handleTagClick("dust")}
            className={`tag-button ${
              tagPressed.includes("dust") && "tag-button-pressed"
            }`}
          >
            #층간소음이 없는
          </button>
        </div>

        <div
          className="tag-button-wrap"
          style={{ marginLeft: "-5px", zIndex: 1 }}
        >
          <button
            onClick={() => handleTagClick("cough")}
            className={`tag-button ${
              tagPressed.includes("cough") && "tag-button-pressed"
            }`}
          >
            #역세권
          </button>
        </div>

        <div
          className="tag-button-wrap"
          style={{ marginLeft: "-22px", zIndex: 1 }}
        >
          <button
            onClick={() => handleTagClick("quiet")}
            className={`tag-button ${
              tagPressed.includes("quiet") && "tag-button-pressed"
            }`}
          >
            #조용한 주거환경
          </button>
        </div>

        <div
          className="tag-button-wrap"
          style={{ marginLeft: "-5px", marginTop: "-40px" }}
        >
          <button
            onClick={() => handleTagClick("convenience")}
            className={`tag-button ${
              tagPressed.includes("convenience") && "tag-button-pressed"
            }`}
          >
            #비흡연자
          </button>
        </div>

        <div
          className="tag-button-wrap"
          style={{ marginTop: "-40px", marginLeft: "-25px" }}
        >
          <button
            onClick={() => handleTagClick("calm")}
            className={`tag-button ${
              tagPressed.includes("calm") && "tag-button-pressed"
            }`}
          >
            #근처 편의점
          </button>
        </div>
        <div
          className="tag-button-wrap"
          style={{
            marginTop: "-40px",
            marginLeft: "-17px",
          }}
        >
          <button
            onClick={() => handleTagClick("gym")}
            className={`tag-button ${
              tagPressed.includes("gym") && "tag-button-pressed"
            }`}
          >
            #주변 체육시설
          </button>
        </div>
        <div
          className="tag-button-wrap"
          style={{
            marginTop: "-40px",
            marginLeft: "0px",
            marginBottom: "65%",
          }}
        >
          <button
            onClick={() => handleTagClick("church")}
            className={`tag-button ${
              tagPressed.includes("church") && "tag-button-pressed"
            }`}
          >
            #성당/교회
          </button>
        </div>

        <div
          className="tag-button-wrap"
          style={{
            marginTop: "-40px",
            marginLeft: "-20px",
            marginBottom: "65%",
          }}
        >
          <button
            onClick={() => handleTagClick("car")}
            className={`tag-button ${
              tagPressed.includes("car") && "tag-button-pressed"
            }`}
          >
            #주차공간 유무
          </button>
        </div>
        <div
          className="tag-button-wrap"
          style={{
            marginTop: "-40px",
            marginLeft: "-28px",
            marginBottom: "65%",
          }}
        >
          <button
            onClick={() => handleTagClick("park")}
            className={`tag-button ${
              tagPressed.includes("park") && "tag-button-pressed"
            }`}
          >
            #공원
          </button>
        </div>
      </div>
    </div>
  );
};

const FourthContent = ({ onClick }) => {
  const [clickedButton4, setClickedButton4] = useState(null);

  const handleClick4 = (buttonName4) => {
    setClickedButton4(buttonName4);
    onClick(buttonName4);
    console.log(buttonName4); // 새로 추가된 코드
  };

  return (
    <div>
      <div className="titleWrap2">
        집에는 어떤 가구가 필요하다고 생각하시나요?
      </div>
      <div style={{ display: "flex", marginTop: "2%", marginBottom: "-1.7%" }}>
        <div class="flex-container wrap">
          <Button
            onClick={() => handleClick4("water_purifier")}
            className={`button ${
              clickedButton4 === "water_purifier" && "button-pressed"
            }`}
          >
            <img
              src={water_purifierImg}
              alt="water_purifier!"
              className="button-img"
            />
            <div className="button-text">정수기</div>
          </Button>

          <Button
            onClick={() => handleClick4("air_conditioner")}
            className={`button ${
              clickedButton4 === "air_conditioner" && "button-pressed"
            }`}
          >
            <img
              src={air_conditionerImg}
              alt="air_conditioner!"
              className="button-img"
            />
            <div className="button-text">에어컨</div>
          </Button>

          <Button
            onClick={() => handleClick4("microwave")}
            className={`button ${
              clickedButton4 === "microwave" && "button-pressed"
            }`}
            style={{ marginTop: "15px", marginBottom: "16%" }}
          >
            <img src={microwaveImg} alt="microwave!" className="button-img" />
            <div className="button-text">전자레인지</div>
          </Button>

          <Button
            onClick={() => handleClick4("washing_machine")}
            className={`button ${
              clickedButton4 === "washing_machine" && "button-pressed"
            }`}
            style={{ marginTop: "15px", marginBottom: "16%" }}
          >
            <img
              src={washing_machineImg}
              alt="washing_machine!"
              className="button-img"
            />
            <div className="button-text">세탁기</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

const LastContent = ({ onClick }) => {
  const [tagPressed2, setTagPressed2] = useState([]);

  const handleTagClick2 = (buttonName5) => {
    if (tagPressed2.includes(buttonName5)) {
      setTagPressed2((prevTags) =>
        prevTags.filter((tag) => tag !== buttonName5)
      );
      onClick(null); // 값이 없어졌으므로 null 전달
    } else {
      setTagPressed2((prevTags) => [...prevTags, buttonName5]);
      onClick(String(buttonName5)); // 문자열로 변환하여 전달
    }
  };

  return (
    <div>
      <div className="titleWrap2">자신의 집에 대한 해시태그를 제공하세요!</div>
      <div className="titleWrap3">!룸메이트만 구하고 있다면 스킵!</div>
      <div className="tagWrap">
        <div
          className="tag-button-wrap"
          style={{ marginLeft: "-5px", zIndex: 1 }}
        >
          <button
            onClick={() => handleTagClick2("dust")}
            className={`tag-button ${
              tagPressed2.includes("dust") && "tag-button-pressed"
            }`}
          >
            #역세권
          </button>
        </div>

        <div
          className="tag-button-wrap"
          style={{ marginLeft: "-30px", zIndex: 1 }}
        >
          <button
            onClick={() => handleTagClick2("cough")}
            className={`tag-button ${
              tagPressed2.includes("cough") && "tag-button-pressed"
            }`}
          >
            #층간소음이 없는
          </button>
        </div>

        <div
          className="tag-button-wrap"
          style={{ marginLeft: "5px", zIndex: 1 }}
        >
          <button
            onClick={() => handleTagClick2("quiet")}
            className={`tag-button ${
              tagPressed2.includes("quiet") && "tag-button-pressed"
            }`}
          >
            #조용한 주거환경
          </button>
        </div>

        <div
          className="tag-button-wrap"
          style={{ marginLeft: "0px", marginTop: "-40px" }}
        >
          <button
            onClick={() => handleTagClick2("convenience")}
            className={`tag-button ${
              tagPressed2.includes("convenience") && "tag-button-pressed"
            }`}
          >
            #성당/교회
          </button>
        </div>

        <div
          className="tag-button-wrap"
          style={{ marginTop: "-40px", marginLeft: "-20px" }}
        >
          <button
            onClick={() => handleTagClick2("calm")}
            className={`tag-button ${
              tagPressed2.includes("calm") && "tag-button-pressed"
            }`}
          >
            #주차공간의 유무
          </button>
        </div>
        <div
          className="tag-button-wrap"
          style={{
            marginTop: "-40px",
            marginLeft: "-15px",
          }}
        >
          <button
            onClick={() => handleTagClick2("park")}
            className={`tag-button ${
              tagPressed2.includes("park") && "tag-button-pressed"
            }`}
          >
            #공원
          </button>
        </div>
        <div
          className="tag-button-wrap"
          style={{
            marginTop: "-40px",
            marginLeft: "5px",
            marginBottom: "65%",
          }}
        >
          <button
            onClick={() => handleTagClick2("church")}
            className={`tag-button ${
              tagPressed2.includes("church") && "tag-button-pressed"
            }`}
          >
            #근처 편의점
          </button>
        </div>

        <div
          className="tag-button-wrap"
          style={{
            marginTop: "-40px",
            marginLeft: "-25px",
            marginBottom: "65%",
          }}
        >
          <button
            onClick={() => handleTagClick2("car")}
            className={`tag-button ${
              tagPressed2.includes("car") && "tag-button-pressed"
            }`}
          >
            #비흡연자
          </button>
        </div>
        <div
          className="tag-button-wrap"
          style={{
            marginTop: "-40px",
            marginLeft: "-28px",
            marginBottom: "65%",
          }}
        >
          <button
            onClick={() => handleTagClick2("gym")}
            className={`tag-button ${
              tagPressed2.includes("gym") && "tag-button-pressed"
            }`}
          >
            #주변 체육시설
          </button>
        </div>
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

const onFinish = async (use_state) => {
  try {
    console.log("username :" + use_state.username);
    console.log("password :" + use_state.password);
    console.log("nickname :" + use_state.nickname);
    console.log("age :" + use_state.age);
    console.log("gender :" + use_state.gender);
    console.log("tendency :" + use_state.tendency);
    console.log("likeHashtags :" + use_state.likeHashtags);
    console.log("likeProducts :" + use_state.likeProducts);
    console.log("myHashtags :" + use_state.myHashtags);
    console.log("myProducts :" + use_state.myProducts);

    const likeHashtags = use_state.likeHashtags.toString().split(",");
    const likeProducts = use_state.likeProducts.toString().split(",");
    const myHashtags = use_state.myHashtags.toString().split(",");
    const myProducts = use_state.myProducts.toString().split(",");

    await axios.post("http://localhost:8080/api/signup", {
      username: use_state.username.toString(),
      password: use_state.password.toString(),
      nickname: use_state.nickname.toString(),
      age: use_state.age.toString(),
      gender: use_state.gender.toString(),
      tendency: use_state.tendency.toString(),
      likeHashtags,
      likeProducts,
      myHashtags,
      myProducts,
    });

    // Navigate to RegisterPage2 on successful registration
    message.success("Processing complete!");
  } catch (error) {
    console.error("Registration failed:", error);
  }
  window.location.href = "../../login";
};

function RegisterPage2() {
  const location = useLocation();

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [clickedButton, setClickedButton] = useState([]);
  const [clickedButton2, setClickedButton2] = useState([]);
  const [clickedButton3, setClickedButton3] = useState([]);
  const [clickedButton4, setClickedButton4] = useState([]);
  const [clickedButton5, setClickedButton5] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [firstClick, setFirstClick] = useState("");

  const use_state = location.state;

  // const username = location.state.username;
  // const password = location.state.password;
  // const nickname = location.state.nickname;
  // const age = location.state.age;
  // const gender = location.state.gender;

  // console.log("reg2 page:" + username);
  // console.log("reg2 page:" + password);
  // console.log("reg2 page:" + nickname);
  // console.log("reg2 page:" + age);
  // console.log("reg2 page:" + gender);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

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

  const handleClick = (buttonName) => {
    setIsClicked(true);
    setClickedButton(buttonName);
    // if (!firstClick) {
    //   setFirstClick(buttonName);
    // }
  };

  const handleClick2 = (buttonName2) => {
    setIsClicked(true);
    setClickedButton2(buttonName2);
    // if (!firstClick) {
    //   setFirstClick(buttonName2);
    // }
  };
  const handleClick4 = (buttonName4) => {
    setIsClicked(true);
    setClickedButton4(buttonName4);
    // if (!firstClick) {
    //   setFirstClick(buttonName2);
    // }
  };

  const handleTagClick = (buttonName3) => {
    setClickedButton3((prevState) => [...prevState, buttonName3]);
    console.log(buttonName3);
    setIsClicked(true);
    {
      console.log("buttonName3 :", clickedButton3);
    }
  };

  const handleTagClick2 = (buttonName5) => {
    setClickedButton5((prevState) => [...prevState, buttonName5]);
    console.log(buttonName5);
    setIsClicked(true);
    {
      console.log("buttonName5 :", clickedButton5);
    }
  };
  return (
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
                  ? handleClick2
                  : current === 2
                  ? handleTagClick
                  : current === 3
                  ? handleClick4
                  : current === 4
                  ? handleTagClick2
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

                  console.log("buttonName :", buttonName);
                  console.log("buttonName2 :", buttonName2);
                  console.log("buttonName3 :", buttonName3); // handleClick3에서 입력 받은 값을 출력합니다.
                  console.log("buttonName4 :", buttonName4);
                  console.log("buttonName5 :", buttonName5);

                  // const newButtonName3 = clickedButton3.map(
                  //   (str) => `"${str.trim()}"`
                  // );

                  // console.log("buttonName3: ", clickedButton3); // ['quiet', 'gym']
                  // console.log("newButtonName3: ", newButtonName3); // ["quiet", "gym"]

                  use_state["tendency"] = buttonName;
                  use_state["likeHashtags"] = buttonName3;
                  use_state["likeProducts"] = buttonName2;
                  use_state["myHashtags"] = clickedButton5;
                  use_state["myProducts"] = clickedButton4;

                  onFinish(use_state);

                  // onFinish({
                  //   // buttonName: buttonName,
                  //   tendency: buttonName,
                  //   likeHashtags: buttonName3,
                  //   likeProducts: buttonName2,
                  //   myHashtags: buttonName5,
                  //   myProducts: buttonName4,
                  // });
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
  );
}

export default RegisterPage2;
