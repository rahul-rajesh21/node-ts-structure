"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoint = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const express_1 = require("express");
const todo_controller_1 = __importDefault(require("../controllers/todo.controller"));
// Constants
const router = (0, express_1.Router)();
const { CREATED, OK } = http_status_codes_1.default;
const todoController = new todo_controller_1.default();
// Paths
exports.endpoint = {
    get: '',
    add: '/add',
    update: '/update',
    delete: '/delete/:id',
};
/**
 * Get all users.
 */
router.get('/all', todoController.getAllTodo);
/**
 * Add one user.
 */
// router.post(endpoint.add, async (req: Request, res: Response) => {
//     const { user } = req.body;
//     // Check param
//     if (!user) {
//         throw new ParamMissingError();
//     }
//     // Fetch data
//     await userService.addOne(user);
//     return res.status(CREATED).end();
// });
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
exports.default = router;
