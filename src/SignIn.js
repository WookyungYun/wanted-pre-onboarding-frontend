import { useState } from "react";
import Input from "./Input";

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
      <button data-testid="signin-button" disabled={handleButton()}>
        로그인
      </button>
    </>
  );
}
export default SignIn;
