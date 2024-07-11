/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

type TaskType = {
    taskId: number;
    title: string;
    status: string;
}


const UpdateTask = () => {
    const { taskId } = useParams();
    const navigate = useNavigate()

    const [updated, setUpdated] = useState<TaskType>({
        taskId: 0,
        title: "",
        status: "",
    });

    console.log(updated);

    // get single task
    const getTask = async () => {
        try {
            const response = await axios.get(`http://localhost:8088/task/${taskId}`);
            setUpdated(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getTask();
    }, []);


    // update by id 
    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8088/task/${taskId}`, updated);
            console.log(response.data); // Log the response data
            navigate("/")
        } catch (error) {
            console.error(error); // Log the error
        }
    };


    return (
        <form onSubmit={handleUpdate} className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Update Task</h2>
            <label className="block mb-2" htmlFor="title">
                <span className="text-gray-700">Title:</span>
                <input
                    type="text"
                    id="title"
                    value={updated.title}
                    onChange={(event) => setUpdated({ ...updated, title: event.target.value })}
                    className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
                    placeholder="Enter task title"
                />
            </label>
            <label className="block mb-2" htmlFor="status">
                <span className="text-gray-700">Status:</span>
                <select
                    id="status"
                    onChange={(event) => setUpdated({ ...updated, status: event.target.value })}
                    value={updated?.status as string}
                    className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
                >
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </label>
            <div className="flex justify-end">
                <Link
                    to={'/'}
                    type="button"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                    Go Back
                </Link>
                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                >
                    Update Task
                </button>
            </div>
        </form>
    );
};

export default UpdateTask;