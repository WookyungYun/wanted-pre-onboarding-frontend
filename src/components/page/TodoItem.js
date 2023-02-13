import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import { api } from "../../api/api";

function TodoItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleEditButton = () => {
    setIsOpen((prev) => !prev);
    editTodo(value, isChecked);
  };
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCheckBox = () => {
    setIsChecked((prev) => !prev);
    editTodo(item.todo, isChecked);
  };

  const editTodo = async (value, isCompleted) => {
    try {
      await api.put(`/todos/${item.id}`, {
        todo: value,
        isCompleted: isCompleted,
      });
    } catch {}
  };

  console.log(item);
  return (
    <label>
      {item.isCompleted ? (
        <input type="checkbox" onChange={handleCheckBox} defaultChecked />
      ) : (
        <input type="checkbox" onChange={handleCheckBox} />
      )}

      {isOpen ? (
        <>
          <Input
            type="text"
            id={item.id}
            value={value}
            onChange={handleChange}
          />
          <Button onClick={handleEditButton} text="제출" />
          <Button onClick={handleToggle} text="취소" />
        </>
      ) : (
        <>
          <span>{item.todo}</span>
          <Button onClick={handleToggle} text="수정" />
          <Button text="삭제" />
        </>
      )}
    </label>
  );
}
export default TodoItem;
