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
const bcrypt_1 = __importDefault(require("bcrypt"));
const userDao_1 = __importDefault(require("../model/user/userDao"));
const encryptPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const saltRounds = 10;
        if (req.body.password) {
            const passwordHash = yield bcrypt_1.default.hash(req.body.password, saltRounds);
            req.body.password = passwordHash;
            // console.log(passwordHash);
            next();
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        res.status(500).send('internal error');
    }
});
const validateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).send('missing some data');
        }
        else {
            const user = yield userDao_1.default.getUser(req.body);
            const passwordCorrect = yield bcrypt_1.default.compare(req.body.password, user.password);
            passwordCorrect ? next() : res.status(400).send('password incorrect');
        }
    }
    catch (error) {
        res.status(400).send('user or password invalid');
    }
});
exports.default = {
    encryptPassword,
    validateUser
};
