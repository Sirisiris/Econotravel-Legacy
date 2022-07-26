import { ObjectId } from "mongodb";
import Experience from "../experiences/model";
import UserDTO from "./dto";

export default class User implements UserDTO{
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public experiences:Array<Experience>=[],
        public rol="public",
        ) {};
    }