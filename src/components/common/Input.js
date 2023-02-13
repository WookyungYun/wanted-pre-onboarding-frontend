function Input({ email, password, handleEmail, handlePw }) {
  return (
    <>
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
    </>
  );
}

export default Input;
