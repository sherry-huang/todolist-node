import todoDB from '../model/todoDB';

class TodoController {

    static async listTodo(req: any, res: any) {
        try {
            const todoList = await todoDB.listWithQuery({});
            res.status(200).send( {data: todoList} );
        } catch (e: any) {
            res.status(400).send({success: false, message: e.message})
        }
    }

    static async addTodo(req: any, res: any) {
        const { content, done } = req.body
        const data = {
            content,
            done,
            create: new Date()
        }
        try {
            const todoList = await todoDB.create(data);
            res.status(200).send(todoList);
        } catch (e: any) {
            res.status(400).send({success: false, message: e.message})
        }
    }

    static async updateTodo(req: any, res: any) {
        const { id, content, done }  = req.body;
        const data = {
            content,
            done,
            create: new Date()
        }
        try {
            const todoList = await todoDB.update(id, data);
            res.status(200).send(todoList);
        } catch (e: any) {
            res.status(400).send({success: false, message: e.message})
        }
    }

    static async deleteTodo(req: any, res: any) {
        const { id }  = req.body;
        try {
            const todoList = await todoDB.destroy(id);
            res.status(200).send(todoList);
        } catch (e: any) {
            res.status(400).send({success: false, message: e.message})
        }
    }

    static async getTodo(req: any, res: any) {
        const todos = await todoDB.retrieve(req.params.id);
        res.status(200).send( todos ) ;
    }
}

export default TodoController;