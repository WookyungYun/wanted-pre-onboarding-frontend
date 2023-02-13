import { useEffect, useState } from "react";
import { api } from "../../api/api";
import TodoInsert from "./TodoInsert";
import TodoListView from "./TodoListView";

function TodoContainer() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  const todoItems = async () => {
    try {
      const result = await api.get("/todos");
      console.log(result);
      setItems(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = async () => {
    try {
      const result = await api.post("/todos", {
        todo,
      });
      console.log(result);
      setTodo("");
      todoItems();
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  useEffect(() => {
    todoItems();
  }, []);
  return (
    <>
      <TodoInsert
        todo={todo}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <TodoListView items={items} />
    </>
  );
}
export default TodoContainer;
