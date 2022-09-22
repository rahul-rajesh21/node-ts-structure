"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, '../../.env') });
function validateEnvVar() {
    const envVar = {
        port: process.env.NODE_PORT,
        env: process.env.NODE_ENV,
        prisma: {
            "url": process.env.DATABASE_URL,
        }
    };
    if (!envVar.port) {
        throw new Error("application port not defined");
    }
    if (!envVar.env) {
        throw new Error("application env has not been defined");
    }
    if (!envVar.prisma.url) {
        throw new Error("unable to connect to db url not found");
    }
    return envVar;
}
const config = validateEnvVar();
exports.default = config;
