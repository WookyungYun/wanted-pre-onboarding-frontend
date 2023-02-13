function Input({ type, id, testid, value, onChange, text }) {
  return (
    <label htmlFor={id}>
      {text}
      <input
        type={type}
        id={id}
        data-testid={testid}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default Input;
