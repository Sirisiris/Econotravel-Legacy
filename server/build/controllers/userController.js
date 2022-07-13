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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userDao_1 = __importDefault(require("../model/user/userDao"));
const jwHandler_1 = __importDefault(require("../middleware/jwHandler"));
const userController = {
    saveUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const _a = req.body, { email, password } = _a, user = __rest(_a, ["email", "password"]);
            if (!email || !password) {
                res.status(400).send('email or password missing');
            }
            else {
                const result = yield userDao_1.default.saveUser(Object.assign({ email, password }, user));
                result
                    ? res.status(201).json({ userId: result.insertedId.toString() })
                    : res.status(500).send("Failed to create a new user.");
            }
        }
        catch (error) {
            res.status(400).send(error.message);
        }
    }),
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.send(jwHandler_1.default.generateToken(req.body.email));
    }),
    getAllUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield userDao_1.default.getUsers();
            result
                ? res.status(201).json(result)
                : res.status(500).send("Failed to get data.");
        }
        catch (error) {
            res.status(400).send(error.message);
        }
    })
};
exports.default = userController;
