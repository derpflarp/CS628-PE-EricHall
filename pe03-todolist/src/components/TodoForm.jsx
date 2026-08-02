import { useState } from 'react';

export default function TodoForm({ onAddTodo }) {
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedDescription = description.trim();

    if (!trimmedDescription) {
      return;
    }

    onAddTodo(trimmedDescription);
    setDescription('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Enter task description"
        aria-label="Task description"
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}