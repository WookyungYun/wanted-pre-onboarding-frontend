import { useEffect, useState } from "react";

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

  const handleSignUpButton = () => {};

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
      <div className="App">
        <header className="App-header">
          <p>회원가입</p>
        </header>
        Email
        <input
          type="text"
          data-testid="email-input"
          autoComplete="off"
          value={email}
          onChange={handleEmail}
        />
        password
        <input
          type="text"
          data-testid="password-input"
          autoComplete="off"
          value={password}
          onChange={handlePw}
        />
      </div>
      <button
        type="submit"
        data-testid="signup-button"
        onClick={handleSignUpButton}
        disabled={handleButton()}
      >
        회원가입
      </button>
    </>
  );
}

export default SignUp;
