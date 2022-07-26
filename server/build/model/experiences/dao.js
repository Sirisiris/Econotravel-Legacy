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
const locale_1 = require("date-fns/locale");
const database_service_1 = __importDefault(require("../../services/database.service"));
class ExperienceDAO {
    constructor(collectionName) {
        this.collectionName = collectionName;
    }
    getExperiences() {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(experiences);
            const collection = yield database_service_1.default.getCollection(this.collectionName);
            return collection.find({}).toArray();
        });
    }
    insertExperience(Experience) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield database_service_1.default.getCollection(this.collectionName);
            return collection.insertOne({ id: locale_1.id });
        });
    }
    // id cambio a numerico
    updateExperience(experience, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield database_service_1.default.getCollection(this.collectionName);
            const result = yield collection.updateOne({ id: id }, { $set: experience });
            console.log(`${result} documents matched the query criteria`);
            // console.log(`${collection.modifiedCount} documents were updated`)
            return result;
        });
    }
    deleteExperience(experience, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield database_service_1.default.getCollection(this.collectionName);
            const result = yield collection.deleteOne({ id: id });
            //console.log(`${result} documents matched the query criteria`);
            // console.log(`${collection.modifiedCount} documents were updated`)
            return result;
        });
    }
}
exports.default = new ExperienceDAO('Experiences');
