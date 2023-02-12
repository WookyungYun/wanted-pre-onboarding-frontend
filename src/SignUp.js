import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePw = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpButton = () => {};

  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>회원가입</p>
        </header>
        Email
        <input type="email" value={email} onChange={handleEmail} />
        password
        <input type="password" value={password} onChange={handlePw} />
      </div>
      <button type="submit" onClick={handleSignUpButton} disabled="true">
        회원가입
      </button>
    </>
  );
}

export default SignUp;
