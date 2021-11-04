import todo from './todoSchema';
const DBModel = {
    async create(data: any) {
        return await todo
        .create({
            content: data.content || '',
            done: data.done || 0,
            create: data.create,
        })
    },
    // 取得某項
    async retrieve(pkId: number) {
        return await todo
        .findByPk( pkId, {
            attributes: [
            ['content', 'content'],
            ['done', 'done'],
            ['create', 'create'],
            ['update_time', 'updateTime'],
            ['uid', 'id'],
            ]
        })
        .then((todo: any) => {
            const unitObj = JSON.parse(JSON.stringify(todo));
            const data = {
            ...unitObj,
            default: unitObj.default === 1 ? true : false 
            } 

            return data;
        });  
    },
    // 更新
    async update(pkId: number, data: any) {
        return await todo
        .findByPk(pkId, {
        })
        .then((todo: any) => {
            if (!todo) {
            throw (new Error(`Todo ${pkId} data not found!`));
            }
            return todo
            .update({
                content: data.content || todo.content,
                done: data.done,
                create: data.create || todo.create,
            })
        })
        .catch((error: any) => {
            throw (new Error(error));
        });
    },
    // 刪除
    async destroy(pkId: number) {
        return await todo
        // .findByPk(req.params.id)
        .findByPk(pkId)
        .then((todo: any) => {
            if (!todo) {
            throw (new Error(`Todo ${pkId} data not found!`));
            }
            return todo
            .destroy()
        })
        .catch((error: any) => {
            throw (new Error(error));
        });
    },
    // 列表項
    async listWithQuery(query: any, order = ['update_time', 'DESC']) {
        return await todo
        .findAll({
            attributes: [
            ['content', 'content'],
            ['done', 'done'],
            ['create', 'create'],
            ['update_time', 'updateTime'],
            ['uid', 'id'],
            ],
            order: [
            order,
            ],
            where: query
        });
    },
};

export default DBModel;