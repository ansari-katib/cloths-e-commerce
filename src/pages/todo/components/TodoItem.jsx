import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
    const [newPriority, setNewPriority] = useState(todo.priority);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        editTodo(todo.id, newText, newPriority);
        setIsEditing(false);
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High':
                return 'bg-red-500';
            case 'Medium':
                return 'bg-yellow-500';
            case 'Low':
                return 'bg-green-500';
            default:
                return 'bg-gray-400';
        }
    };

    return (
        <div className={`flex items-center justify-between p-4 border rounded-md shadow-sm ${todo.completed ? 'bg-gray-200' : 'bg-white'}`}>
            {isEditing ? (
                <form onSubmit={handleEditSubmit} className="flex gap-2 flex-grow">
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className="flex-grow p-2 border border-gray-300 rounded-md"
                    />
                    <select
                        value={newPriority}
                        onChange={(e) => setNewPriority(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md"
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <button 
                        type="submit"
                        className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                        Save
                    </button>
                </form>
            ) : (
                <>
                    <span 
                        onClick={() => toggleComplete(todo.id)} 
                        className={`flex-grow cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
                    >
                        {todo.text}
                    </span>
                    <span className={`text-xs text-white font-bold px-2 py-1 rounded-full ml-2 ${getPriorityColor(todo.priority)}`}>
                        {todo.priority}
                    </span>
                    <div className="flex gap-2 ml-4">
                        <button 
                            onClick={() => setIsEditing(true)}
                            className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                            Edit
                        </button>
                        <button 
                            onClick={() => deleteTodo(todo.id)}
                            className="text-red-500 hover:text-red-700 font-medium"
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default TodoItem;