import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {

    const [task, setTask] = useState({
        title: "",
        status: "pending"
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8088/task", task);
            console.log(response.data); // Log the response data
            window.location.reload()
        } catch (error) {
            console.error(error); // Log the error
        }
    };


    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Create Task</h2>
            <label className="block mb-2" htmlFor="title">
                <span className="text-gray-700">Title:</span>
                <input
                    type="text"
                    id="title"
                    onChange={(event) => setTask({ ...task, title: event.target.value })}
                    className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
                    placeholder="Enter task title"
                />
            </label>
            <label className="block mb-2" htmlFor="status">
                <span className="text-gray-700">Status:</span>
                <select
                    id="status"
                    value={task.status}
                    onChange={(event) => setTask({ ...task, status: event.target.value })}
                    className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
                >
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </label>
            <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
                Create Task
            </button>
        </form>
    );
};

export default TaskForm;