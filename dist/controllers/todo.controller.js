"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_service_1 = __importDefault(require("@services/todo-service"));
const errors_1 = require("src/utils/errors");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
class TodoController {
    constructor() {
        this.getAllTodo = (0, catchAsync_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.todoService.getAll();
                res.status(200);
                res.json(result);
            }
            catch (err) {
                throw new errors_1.PrismaError("unable to connect to server", 500);
            }
        }));
        this.todoService = new todo_service_1.default();
    }
}
exports.default = TodoController;
