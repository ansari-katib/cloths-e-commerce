import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
    return (
        <div className="space-y-3">
            {todos.length === 0 ? (
                <p className="text-center text-gray-500">No tasks to display.</p>
            ) : (
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleComplete={toggleComplete}
                        editTodo={editTodo}
                    />
                ))
            )}
        </div>
    );
};

export default TodoList;