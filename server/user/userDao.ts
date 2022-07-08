import database from "../services/database.server";
import User from "./model";

class UserDAO {
   collectionName:string;
   constructor(collectionName:string){
      this.collectionName = collectionName;
   }

   async saveUser(user:User){
        const collection = await database.getCollection(this.collectionName)
        return collection.insertOne(user);
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

}

export default new UserDAO('users');