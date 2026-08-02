import TodoItem from './TodoItem';

export default function TodoList({ todos, onDeleteTodo }) {
  if (todos.length === 0) {
    return <p className="empty-message">No tasks yet</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDeleteTodo}
        />
      ))}
    </ul>
  );
}