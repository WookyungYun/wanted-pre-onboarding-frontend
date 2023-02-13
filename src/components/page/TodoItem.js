import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import { api } from "../../api/api";

function TodoItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCheckBox = () => {
    if (item.isCompleted) {
      editTodo(item.todo, false);
    } else {
      editTodo(item.todo, true);
    }
  };

  const handleEditButton = () => {
    setIsOpen((prev) => !prev);
    editTodo(value, item.isCompleted);
  };

  const handleDeleteButton = () => {
    deleteTodo();
  };

  const editTodo = async (value, isCompleted) => {
    try {
      await api.put(`/todos/${item.id}`, {
        todo: value,
        isCompleted,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTodo = async () => {
    try {
      api.delete(`/todos/${item.id}`);
    } catch (e) {
      console.log(e);
    }
  };

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
          <Button onClick={handleDeleteButton} text="삭제" />
        </>
      )}
    </label>
  );
}
export default TodoItem;
