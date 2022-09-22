import { Request, Response, NextFunction} from 'express';
import TodoService from '@services/todo-service';
import { ITodo } from "@models/todo-models";
import { PrismaError } from 'src/utils/errors';
import catchAsync from "../utils/catchAsync";
import StatusCodes from 'http-status-codes';

//constants
const { CREATED, OK, INTERNAL_SERVER_ERROR } = StatusCodes;
export default class TodoController{

    todoService;

    constructor(){
        this.todoService = new TodoService();
    }

    getAllTodo = catchAsync(async (req: Request, res:Response, next:NextFunction):Promise<void> =>{

        try{
            const result:ITodo[] = await this.todoService.getAll();
            res.status(OK)
             res.json(result)
        }catch(err:any){
            throw new PrismaError("unable to connect to server", INTERNAL_SERVER_ERROR)
        }

    })

    postTodo = catchAsync(async (req: Request, res:Response, next:NextFunction):Promise<void> =>{

        const body = req.body;
        const user = {
            title: body.title,
            startDate: body.startDate,
            endDate: body.endDate,        
        }

        try{
            const result:ITodo = await this.todoService.addOne(user);
            
            res.status(200)
             res.json(result)
        }catch(err:any){
            throw new PrismaError("unable to connect to server", INTERNAL_SERVER_ERROR)
        }

    })
    
  
}
