"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const experienceController_1 = __importDefault(require("../controllers/experiences/experienceController"));
const updateController_1 = __importDefault(require("../controllers/experiences/updateController"));
const insertController_1 = __importDefault(require("../controllers/experiences/insertController"));
const deleteController_1 = __importDefault(require("../controllers/experiences/deleteController"));
const router = (0, express_1.Router)();
router.get('/experiences', experienceController_1.default);
router.get('/experiences/:id', experienceController_1.default);
router.put('/experiences/:id', updateController_1.default);
router.post('/experiences', insertController_1.default);
router.delete('/experiences/:id', deleteController_1.default);
exports.default = router;
