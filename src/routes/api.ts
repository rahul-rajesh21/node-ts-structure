import { Router } from 'express';
import todoRouter from './todo-router';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/todo', todoRouter);

// Export default.
export default baseRouter;
