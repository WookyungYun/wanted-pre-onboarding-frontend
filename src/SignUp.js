import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./api/api";
import Input from "./Input";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const handleClick = async () => {
    try {
      await api.post("/auth/signup", {
        email,
        password,
      });
      navigate("/signin");
    } catch {
      alert("동일한 이메일 있음");
    }
  };

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

  useEffect(() => {
    //값 초기화
    setIsEmail(false);
    setIsPassword(false);
  }, []);

  return (
    <>
      <header className="App-header">
        <p>회원가입</p>
      </header>
      <Input
        email={email}
        password={password}
        handleEmail={handleEmail}
        handlePw={handlePw}
      />
      <button
        type="submit"
        data-testid="signup-button"
        onClick={handleClick}
        disabled={handleButton()}
      >
        회원가입
      </button>
    </>
  );
}

export default SignUp;
