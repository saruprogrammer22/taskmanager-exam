import express from 'express';
import TaskController from '../controller/TaskController';

const router = express.Router();


router.get("/", TaskController.getTasks)
router.post("/", TaskController.createTasks)
// update by id task
router.put("/:taskId", TaskController.updateTask)
// delete by id task
router.delete("/:taskId", TaskController.deleteTask)
export default router