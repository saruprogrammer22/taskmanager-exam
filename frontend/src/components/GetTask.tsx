import axios from 'axios';
import React, { useEffect, useState } from 'react'

type TaskType = {
    taskId: number;
    title: string;
    status: string;
}

function GetTask() {

    const [tasks, setTasks] = useState<TaskType[]>([]);

    const getTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8088/task');
            setTasks(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(tasks);

    useEffect(() => {
        getTasks();
    }, []);

    const handleDelete = async (taskId: number) => {
        await axios.delete(`http://localhost:8088/task/${taskId}`)
        window.location.reload()
    }


    return (
        <div className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Task List</h2>
            <ul className="list-none mb-4">
                {tasks.map((task) => (
                    <li key={task.taskId} className="flex items-center justify-between py-2">
                        <span className="text-gray-700">{task.title}</span>
                        <span
                            className={`text-xs font-bold ${task.status === 'pending' ? 'text-orange-500' : task.status === 'in_progress' ? 'text-blue-500' : 'text-green-500'
                                }`}
                        >
                            {task.status}
                        </span>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            onClick={() => handleDelete(task.taskId)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GetTask