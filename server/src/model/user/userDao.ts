import { id } from "date-fns/locale";
import database from "../../services/database.service";
import User from "./model";

class UserDAO {
   collectionName:string;
   constructor(collectionName:string){
      this.collectionName = collectionName;
   }

   async saveUser(user:User){
        const userTest = new User(user.email, user.password, user.name);
        const collection = await database.getCollection(this.collectionName)
        return collection.insertOne(userTest);
    }
    async getUser(user: User) {
      console.log(user);
      const collection = await database.getCollection(this.collectionName)
      const result = await collection.findOne({email:user.email});
      return result;
    }
    async getUsers(){
      const collection = await database.getCollection(this.collectionName)
      const result = await collection.find({}).project({"_id":0,"email":1,"name":1}).toArray();
      return result;
    }
    async updateUserExp(){
      const collection = await database.getCollection(this.collectionName)
      const user = await collection.findOneAndUpdate({"_id":0} , {$set: {"experiences":["62bc6437db1cb2d9803488e4"]}})
      //Mirar mongoshell que esta cerca la cosa
      return user;
    }

}

export default new UserDAO('users');