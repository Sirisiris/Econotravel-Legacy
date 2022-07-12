import { ObjectId } from "mongodb";
import Experience from "../experiences/model";
import UserDTO from "./dto";

export default class User implements UserDTO{
    constructor(
        public email: string,
        public password: string,
        public title?: string,
        public id?: ObjectId,
        public experience?:Array<Experience>
        ) {};
    }
