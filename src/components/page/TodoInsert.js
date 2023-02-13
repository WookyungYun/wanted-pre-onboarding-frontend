import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

function TodoInsert() {
  const [newTodo, setNewTodo] = useState("");
  const handleClick = () => {
    console.log("버튼활용성공");
  };
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  return (
    <>
      <Input
        type="text"
        id="todo-input"
        testid="new-todo-input"
        value={newTodo}
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
