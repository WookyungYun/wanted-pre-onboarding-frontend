import Button from "../common/Button";

function TodoInsert() {
  const handleClick = () => {
    console.log("버튼활용성공");
  };
  return (
    <>
      <label>
        <input type="text" data-testid="new-todo-input" />
      </label>
      <Button
        type="submit"
        testid="new-todo-add-button"
        onClick={handleClick}
        disabled={false}
        text="추가"
      />
    </>
  );
}
export default TodoInsert;
