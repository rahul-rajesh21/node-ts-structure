import { ITodo, ITodoInput } from "@models/todo-models";
import { PrismaClient } from "@prisma/client";


export  default class TodoService {
    private prisma;

    constructor() {
        this.prisma = new PrismaClient();
    }

    /**
     * Get all users.
     *
     * @returns
     */
    async  getAll(): Promise<ITodo[]> {
        const data = await this.prisma.todo.findMany();
        return data;
    }

    // /**
    //  * Add one user.
    //  *
    //  * @param user
    //  * @returns
    //  */
    async addOne(user: ITodoInput): Promise<ITodo> {
        const data = await this.prisma.todo.create({data: user});
        return data;
    }

    // /**
    //  * Update one user.
    //  *
    //  * @param user
    //  * @returns
    //  */
    // async updateOne(user: ITodo): Promise<void> {
    //     const persists = await userRepo.persists(user.id);
    //     if (!persists) {
    //         throw new UserNotFoundError();
    //     }
    //     return userRepo.update(user);
    // }

    // /**
    //  * Delete a user by their id.
    //  *
    //  * @param id
    //  * @returns
    //  */
    // async deleteOne(id: number): Promise<void> {
    //     const persists = await userRepo.persists(id);
    //     if (!persists) {
    //         throw new UserNotFoundError();
    //     }
    //     return userRepo.delete(id);
    // }
}
