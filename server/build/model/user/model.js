"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, email, password, name, experiences = [], rol = "public") {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.experiences = experiences;
        this.rol = rol;
    }
    ;
}
exports.default = User;
