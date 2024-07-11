import express from 'express';
import TaskController from '../controller/TaskController';

const router = express.Router();

//  fetch all the tasks
router.get("/", TaskController.getAllTasks)
// add new task
router.post("/", TaskController.createTasks)
// update by id task
router.put("/:taskId", TaskController.updateTaskById)
// get by id task
router.get("/:taskId", TaskController.getTaskById)
// delete by id task
router.delete("/:taskId", TaskController.deleteTaskById)
export default router