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
const dao_1 = __importDefault(require("../../model/experiences/dao"));
const updateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // hacemos una variable numerica para transformar id de string a numerico utilizando el parseFloat
        const numerico = parseFloat(req.params.id);
        const result = yield dao_1.default.updateExperience(req.body, numerico);
        result
            ? res.json(result)
            : res.status(500).send("Failed to update a new experience.");
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.default = updateController;
