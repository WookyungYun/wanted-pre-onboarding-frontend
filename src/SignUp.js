import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

function SignUp() {
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
      <Link to={"/signin"}>
        <button
          type="submit"
          data-testid="signup-button"
          disabled={handleButton()}
        >
          회원가입
        </button>
      </Link>
    </>
  );
}

export default SignUp;
