import { useState } from "react";
import { api } from "../../api/api";
import Input from "../common/Input";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.includes("@")) {
      setIsEmail(true);
    }
  };
  const handlePw = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) {
      setIsPassword(true);
    }
  };
  const handleButton = () => {
    if (isEmail && isPassword) {
      return false;
    } else return true;
  };

  const handleClick = async () => {
    try {
      const result = await api.post("/auth/signin", {
        email,
        password,
      });
      console.log(result);
      alert("로그인 성공");
      localStorage.setItem("token", result.data.access_token);
    } catch (error) {
      if (error) {
        alert("이메일이 없거나 비밀번호가 일치하지 않습니다.");
      } else if (error.response.status === 404) {
        alert("존재하지않는 이메일입니다.");
      }
    }
  };
  return (
    <>
      <div>
        <h1>로그인</h1>
      </div>
      <Input
        email={email}
        password={password}
        handleEmail={handleEmail}
        handlePw={handlePw}
      />
      <button
        data-testid="signin-button"
        onClick={handleClick}
        disabled={handleButton()}
      >
        로그인
      </button>
    </>
  );
}
export default SignIn;
