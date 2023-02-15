import TodoItem from "./TodoItem";

function TodoListView({ items }) {
  return (
    <>
      {items.map((todoItem) => (
        <li key={todoItem.id}>
          <TodoItem item={todoItem} />
        </li>
      ))}
    </>
  );
}
export default TodoListView;
