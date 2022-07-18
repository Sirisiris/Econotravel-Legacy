"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = require("./route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(route_1.experienceRoute);
app.use(route_1.userRoute);
app.get('/', (req, res) => {
    res.json('hello world');
});
exports.default = app;