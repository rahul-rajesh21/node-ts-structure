import { Request, Response, NextFunction} from 'express';
import TodoService from '@services/todo-service';
import { ITodo } from "@models/todo-models";
import { PrismaError } from 'src/utils/errors';
import catchAsync from "../utils/catchAsync";
import 'express-async-errors';

export default class TodoController{

    todoService;

    constructor(){
        this.todoService = new TodoService();
    }

    getAllTodo = catchAsync(async (req: Request, res:Response, next:NextFunction):Promise<void> =>{

        try{
            const result:ITodo[] = await this.todoService.getAll();
            res.status(200)
             res.json(result)
        }catch(err:any){
            throw new PrismaError(err.message, 500)
        }

    })
    
  
}
