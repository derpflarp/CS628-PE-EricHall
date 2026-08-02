export default function TodoItem({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span>{todo.description}</span>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}