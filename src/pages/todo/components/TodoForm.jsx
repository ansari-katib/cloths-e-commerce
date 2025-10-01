import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');
    const [priority, setPriority] = useState('Low');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Generate a unique ID without an external library
        const newId = Date.now().toString() + Math.random().toString(36).substring(2, 9);

        addTodo({
            id: newId,
            text: input,
            completed: false,
            priority: priority
        });
        setInput('');
        setPriority('Low');
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-5">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task..."
                className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="p-3 border border-gray-300 rounded-md bg-white focus:outline-none"
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <button
                type="submit"
                className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
                Add Task
            </button>
        </form>
    );
};

export default TodoForm;