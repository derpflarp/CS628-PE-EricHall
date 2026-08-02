import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(description) {
    const newTodo = {
      id: crypto.randomUUID(),
      description
    };

    setTodos((currentTodos) => [
      ...currentTodos,
      newTodo
    ]);
  }

  function handleDeleteTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  return (
    <main className="app">
      <section className="todo-card">
        <h1>ToDo List App</h1>

        <TodoForm onAddTodo={handleAddTodo} />

        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
        />
      </section>
    </main>
  );
}