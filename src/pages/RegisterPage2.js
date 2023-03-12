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

const FirstContent = ({ onClick }) => {
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleClick = (buttonName) => {
    if (clickedButtons.includes(buttonName)) {
      setClickedButtons(clickedButtons.filter((name) => name !== buttonName));
    } else {
      setClickedButtons([...clickedButtons, buttonName]);
      onClick();
    }
  };

  return (
    //1번 문제
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
          className={`button ${
            clickedButtons.includes("cheers") && "button-pressed"
          }`}
        >
          <img src={cheersImg} alt="Cheers!" className="button-img" />
          <div className="button-text">친구와 함께</div>
        </Button>

        <Button
          onClick={() => handleClick("freelance")}
          className={`button ${
            clickedButtons.includes("freelance") && "button-pressed"
          }`}
        >
          <img src={freelanceImg} alt="freelance!" className="button-img" />
          <div className="button-text">혼자서 느긋하게</div>
        </Button>

        <Button
          onClick={() => handleClick("thinking")}
          className={`button ${
            clickedButtons.includes("thinking") && "button-pressed"
          }`}
        >
          <img src={thinkingImg} alt="thinking!" className="button-img" />
          <div className="button-text">잘 모르겠다</div>
        </Button>
      </div>
    </div>
  );
};

const SecondContent = ({ onClick }) => {
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleClick = (buttonName) => {
    if (clickedButtons.includes(buttonName)) {
      setClickedButtons(clickedButtons.filter((name) => name !== buttonName));
    } else {
      setClickedButtons([...clickedButtons, buttonName]);
      onClick();
    }
  };

  return (
    <div>
      <div className="titleWrap2">
        집에는 어떤 가구가 필요하다고 생각하시나요?
      </div>
      <div style={{ display: "flex", marginTop: "2%", marginBottom: "-1.7%" }}>
        <div class="flex-container wrap">
          <Button
            onClick={() => handleClick("water_purifier")}
            className={`button ${
              clickedButtons.includes("water_purifier") && "button-pressed"
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
            onClick={() => handleClick("air_conditioner")}
            className={`button ${
              clickedButtons.includes("air_conditioner") && "button-pressed"
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
            onClick={() => handleClick("microwave")}
            className={`button ${
              clickedButtons.includes("microwave") && "button-pressed"
            }`}
            style={{ marginTop: "15px", marginBottom: "16%" }}
          >
            <img src={microwaveImg} alt="microwave!" className="button-img" />
            <div className="button-text">전자레인지</div>
          </Button>

          <Button
            onClick={() => handleClick("washing_machine")}
            className={`button ${
              clickedButtons.includes("washing_machine") && "button-pressed"
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

  const handleTagClick = (buttonName) => {
    if (tagPressed.includes(buttonName)) {
      setTagPressed(tagPressed.filter((name) => name !== buttonName));
      onClick(); // Button is released, trigger onClick
    } else {
      setTagPressed([...tagPressed, buttonName]);
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
            onClick={() => handleTagClick("park")}
            className={`tag-button ${
              tagPressed.includes("park") && "tag-button-pressed"
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
            onClick={() => handleTagClick("gym")}
            className={`tag-button ${
              tagPressed.includes("gym") && "tag-button-pressed"
            }`}
          >
            #공원
          </button>
        </div>
      </div>
    </div>
  );
};

const LastContent = ({ onClick }) => {
  const [tagPressed, setTagPressed] = useState([]);

  const handleTagClick = (buttonName) => {
    if (tagPressed.includes(buttonName)) {
      setTagPressed(tagPressed.filter((name) => name !== buttonName));
      onClick(); // Button is released, trigger onClick
    } else {
      setTagPressed([...tagPressed, buttonName]);
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
            onClick={() => handleTagClick("dust")}
            className={`tag-button ${
              tagPressed.includes("dust") && "tag-button-pressed"
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
            onClick={() => handleTagClick("cough")}
            className={`tag-button ${
              tagPressed.includes("cough") && "tag-button-pressed"
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
          style={{ marginLeft: "0px", marginTop: "-40px" }}
        >
          <button
            onClick={() => handleTagClick("convenience")}
            className={`tag-button ${
              tagPressed.includes("convenience") && "tag-button-pressed"
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
            onClick={() => handleTagClick("calm")}
            className={`tag-button ${
              tagPressed.includes("calm") && "tag-button-pressed"
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
            onClick={() => handleTagClick("park")}
            className={`tag-button ${
              tagPressed.includes("park") && "tag-button-pressed"
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
            onClick={() => handleTagClick("church")}
            className={`tag-button ${
              tagPressed.includes("church") && "tag-button-pressed"
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
            onClick={() => handleTagClick("car")}
            className={`tag-button ${
              tagPressed.includes("car") && "tag-button-pressed"
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
            onClick={() => handleTagClick("gym")}
            className={`tag-button ${
              tagPressed.includes("gym") && "tag-button-pressed"
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
    title: "First",
    content: <FirstContent />,
  },
  {
    title: "Second",
    content: <SecondContent />,
  },
  {
    title: "Third",
    content: <ThirdContent />,
  },
  {
    title: "Last",
    content: <LastContent />,
  },
];

const App = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

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

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="page">
      <div class="terms__content" style={{ margin: "10px" }}>
        <>
          <Steps current={current} items={items} />
          <div style={contentStyle}>
            {React.cloneElement(steps[current].content, {
              onClick: handleClick,
            })}
          </div>
          <div
            style={{
              marginTop: 24,
            }}
          >
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
                  margin: "0 360px",
                }}
                onClick={() => message.success("Processing complete!")}
              >
                <Link to="../">다음</Link>
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
};
export default App;
