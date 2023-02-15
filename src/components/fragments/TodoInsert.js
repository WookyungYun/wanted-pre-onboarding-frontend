import Button from "../common/Button";
import Input from "../common/Input";

function TodoInsert({ todo, handleChange, handleClick }) {
  return (
    <>
      <Input
        type="text"
        id="todo-input"
        testid="new-todo-input"
        value={todo}
        onChange={handleChange}
      />

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
