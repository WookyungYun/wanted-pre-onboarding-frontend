function Button({ type, testid, onClick, disabled, text }) {
  return (
    <button
      type={type}
      data-testid={testid}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
export default Button;
