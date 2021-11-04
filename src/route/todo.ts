import express from 'express';
import TodoController from '../controller/todoController';
const router = express.Router();

router.route('/todolist')
    .post((req: any, res) => { TodoController.addTodo(req, res) })
    .put((req: any, res) => { TodoController.updateTodo(req, res) })
    .delete((req: any, res) => { TodoController.deleteTodo(req, res) })
    .get((req, res) => {  TodoController.listTodo(req, res) });

router.route('/:id')
    .get((req: any, res) => {  TodoController.getTodo(req, res) });

export default router;