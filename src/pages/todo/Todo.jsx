import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });

  console.log(todos);
  const [searchTerm, setSearchTerm] = useState('');
  // console.log("search item : " , searchTerm);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText, newPriority) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText, priority: newPriority } : todo
      )
    );
  };

  const priorityOrder = {
    'High': 1,
    'Medium': 2,
    'Low': 3
  };

  const sortTodos = (tasks) => {
    return tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredTodos);

  const sortedAndFilteredTodos = sortTodos([...filteredTodos]);
  // console.log("sorted todo : " , sortedAndFilteredTodos);

  return (
    <div className="mx-auto w-full max-w-xl p-5 bg-white rounded-lg shadow-md mt-10">
      <Header />
      <TodoForm addTodo={addTodo} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TodoList
        todos={sortedAndFilteredTodos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  );
};

export default Todo;