import {Router} from 'express';
import userService from '@services/user-service';
import { ParamMissingError } from 'src/utils/errors';
import TodoController  from '../controllers/todo.controller';



// Constants
const router = Router();
const todoController = new TodoController();


/**
 * Get all users.
 */
router.get('/all', todoController.getAllTodo);


/**
 * Add one user.
 */
    router.post('/', todoController.postTodo);


// /**
//  * Update one user.
//  */
// router.put(endpoint.update, async (req: Request, res: Response) => {
//     const { user } = req.body;
//     // Check param
//     if (!user) {
//         throw new ParamMissingError();
//     }
//     // Fetch data
//     await userService.updateOne(user);
//     return res.status(OK).end();
// });


// /**
//  * Delete one user.
//  */
// router.delete(endpoint.delete, async (req: Request, res: Response) => {
//     const { id } = req.params;
//     // Check param
//     if (!id) {
//         throw new ParamMissingError();
//     }
//     // Fetch data
//     await userService.delete(Number(id));
//     return res.status(OK).end();
// });


// Export default
export default router;
