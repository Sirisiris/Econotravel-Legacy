import users from "../data/users";
import iUser from "./interfaces/iUser";
import { connection } from "../services/database.service";


class User {
    async getUser(user:iUser){
        const client:any = await connection("users");
            return client.findOne(user);
    }
    async saveUser(user:iUser){ 
        const client:any = await connection("users");
        return client.insertOne(user);
             }
}
export default new User();

//trae conexion entre mongo y el server