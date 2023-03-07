import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import React from "react";
import cheersImg from "../img/cheers.png";
import freelanceImg from "../img/freelance.png";

const FirstContent = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(null);

  const handleClick = (buttonName) => {
    if (isClicked === buttonName) {
      setIsClicked(null);
    } else {
      setIsClicked(buttonName);
      onClick();
    }
  };

  return (
    <div>
      <div className="titleWrap" style={{ margin: "-35% -2.5%" }}>
        당신은 어떤 유형인가요?
      </div>
      <div>
        <Button
          onClick={() => handleClick("cheers")}
          style={{
            width: "180px",
            height: "180px",
            boxSizing: isClicked === "cheers" ? "border-box" : "content-box",
            padding: "0",
            border: "none",
            outline: "none",
            transition: "all 0.3s ease-in-out",
            transform: isClicked === "cheers" ? "scale(0.95)" : "none",
            boxShadow:
              isClicked === "cheers"
                ? "0px 2px 10px rgba(0, 0, 0, 0.3)"
                : "none",
            margin: "-30% 30%",
          }}
        >
          <img
            src={cheersImg}
            alt="Cheers!"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Button>

        <Button
          onClick={() => handleClick("freelance")}
          style={{
            width: "180px",
            height: "180px",
            boxSizing: isClicked === "freelance" ? "border-box" : "content-box",
            padding: "0",
            border: "none",
            outline: "none",
            transition: "all 0.3s ease-in-out",
            transform: isClicked === "freelance" ? "scale(0.95)" : "none",
            boxShadow:
              isClicked === "freelance"
                ? "0px 2px 10px rgba(0, 0, 0, 0.3)"
                : "none",
            margin: "0% 30%",
          }}
        >
          <img
            src={freelanceImg}
            alt="freelance!"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Button>
      </div>
    </div>
  );
};

const SecondContent = ({ onClick }) => {
  return (
    <div>
      당신은 어떤 유형인가요?
      <Button onClick={onClick}>클릭!</Button>
    </div>
  );
};

const ThirdContent = ({ onClick }) => {
  return (
    <div>
      당신은 어떤 유형인가요?
      <Button onClick={onClick}>클릭!</Button>
    </div>
  );
};

const LastContent = ({ onClick }) => {
  return (
    <div>
      당신은 어떤 유형인가요?
      <Button onClick={onClick}>클릭!</Button>
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
              onClick={() => prev()}
            >
              되돌아가기
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
                제출하기
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
