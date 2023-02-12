import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
