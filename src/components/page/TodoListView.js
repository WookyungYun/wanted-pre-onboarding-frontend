function TodoListView({ items }) {
  console.log(items);
  const handleCheckBox = () => {
    console.log("클릭");
  };
  return (
    <>
      {items.map((todoItem) => (
        <li key={todoItem.id}>
          <label>
            <input type="checkbox" onChange={handleCheckBox} />
            <span>{todoItem.todo}</span>
          </label>
        </li>
      ))}
    </>
  );
}
export default TodoListView;
