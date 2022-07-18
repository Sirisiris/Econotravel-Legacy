"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../services/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, (0, config_1.config)().secret);
};
const getTokenFrom = (request) => {
    const authorization = request.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7);
    }
    else {
        return null;
    }
};
const tokenVerify = (token) => jsonwebtoken_1.default.verify(token, (0, config_1.config)().secret);
const validateToken = (req, res, next) => {
    try {
        const token = getTokenFrom(req);
        console.log(token);
        let payload;
        if (token) {
            payload = tokenVerify(token);
            next();
        }
        else {
            throw new Error('token invalid or missing');
        }
    }
    catch (error) {
        res.status(400).send(error.message);
    }
};
exports.default = {
    generateToken,
    validateToken,
    jwt: jsonwebtoken_1.default
};
