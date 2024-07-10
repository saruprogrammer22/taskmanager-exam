import { Request, Response } from 'express';
import con from '../config/db';


type Task = {
    id: number;
    title: string;
    status: string;
}

const createTasks = async (req: Request, res: Response) => {
    try {
        const { title, status } = req.body
        const sql = "INSERT INTO `tasks`(`title`, `status`) VALUES (?, ?)"
        con.query(sql, [title, status], (err, result) => {
            if (err) return res.json({ Status: false, Error: "Query error", err: err })
            return res.json({ Status: true, Result: result })
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Something went wrong" })
    }
}


const getTasks = async (req: Request, res: Response) => {
    try {
        const sql = "SELECT * FROM `tasks`";
        con.query(sql, (err, result) => {
            if (err) return res.json({ Status: false, Error: "query error" })
            return res.json(result)
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}


const updateTask = (req: Request, res: Response) => {
    try {
        const id = req.params.taskId;
        const sql = "UPDATE tasks set title = ?, status = ?  WHERE taskId = ?"
        const values = [
            req.body.title,
            req.body.status,
            id
        ]
        con.query(sql, values, (err, result) => {
            if (err) return res.json({ Status: false, Error: "Query error", err: err })
            return res.json(result)
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong" })
    }
}

const deleteTask = (req: Request, res: Response) => {
    try {
        const id = req.params.taskId;
        const sql = "DELETE FROM tasks WHERE taskId =?";
        con.query(sql, [id], (err, result) => {
            if (err) return res.json({ Status: false, Error: "Query error", err: err })
            return res.json({ Status: true, Result: result.affectedRows === 1 ? "Task deleted successfully" : "Task not found" })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong" })
    }
}

export default { createTasks, getTasks, updateTask, deleteTask }