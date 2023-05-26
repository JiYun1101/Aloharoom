import { Link } from "react-router-dom";
import { Button } from "antd";

const App = () => {
  return (
    <div className="page">
      <div class="terms__content">
        <div
          className="loginPage"
          style={{
            position: "fixed",
            margin: "-30% 0%",
            height: "100%",
            width: "90%",
            overflow: "auto",
          }}
        >
          <div className="inputWrap">
            ALOHAROOM 이용약관 제1조 <br />
            (목적) 본 약관은 ALOHAROOM (이하 "회사"라 함)이 제공하는 인터넷 관련
            서비스 (이하 "서비스"라 함)를 이용함에 있어 회사와 이용자의 권리,
            의무 및 책임사항을 규정함을 목적으로 합니다. <br />
            제2조 (용어의 정의) 본 약관에서 사용하는 용어의 정의는 다음과
            같습니다. 이용자 : 회사의 웹사이트에 접속하여 본 약관에 따라
            이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 모든 회원을
            말합니다. 아이디(ID) : 회원의 식별과 서비스 이용을 위하여 회원이
            정하고 회사가 승인하는 문자와 숫자의 조합을 말합니다. 비밀번호 :
            회원이 부여 받은 아이디와 일치되는 회원임을 확인하고 회원의 권익 및
            비밀보호를 위해 회원 자신이 정한 문자와 숫자의 조합을 말합니다.{" "}
            <br />
            제3조 (약관의 게시와 개정) 본 약관의 내용은 회원이 회사의
            웹사이트에서 확인할 수 있습니다. 회사는 합리적인 사유가 발생한
            경우에는 본 약관을 개정할 수 있으며, 개정된 약관은 웹사이트에
            게시함으로써 그 효력이 발생합니다. 회사가 개정된 약관을 공지 또는
            통지할 경우, 회원이 이에 동의하지 않으면 서비스 이용을 중단하고
            이용계약을 해지할 수 있습니다. <br />
            제4조 (이용계약의 체결) 이용계약은 회원이 약관에 동의한 후 회원가입
            신청을 하고, 회사가 이를 승인함으로써 체결됩니다. 회사는 회원가입
            신청에 대하여 승인하거나 거절할 수 있으며, 회원가입 신청이 승인되면
            회원에게 서비스 이용을 위한 아이디와 비밀번호를 부여합니다. 제5조
            (서비스의 이용) 서비스 이용은 회원이 본 약관에 동의한 후 이용신청을
            하면 회사가 승인함으로써 시작됩니다.
          </div>
          <Link to="../RegisterPage">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{
                position: "fixed",
                margin: "2200px 150px",
                width: "30%",
              }}
            >
              확인
              <br />
              <br />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default App;
