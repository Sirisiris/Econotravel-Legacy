"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const config = () => {
    const uri = process.env.DB_CONN_STRING || "mongodb://localhost:27017";
    const db = process.env.DB_NAME || "experiences";
    const secret = process.env.SECRET;
    return {
        uri,
        db,
        secret
    };
};
exports.config = config;
