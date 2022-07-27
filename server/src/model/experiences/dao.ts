import { ObjectID } from "bson";
import id  from "./model";
import { Collection } from "mongodb";
import database from "../../services/database.service";
import Experience from "./model";

class ExperienceDAO {
   collectionName:string;
   constructor(collectionName:string){
      this.collectionName = collectionName;
   }
   async getExperiences(){
      // console.log(experiences);
      const collection = await database.getCollection(this.collectionName);
      return collection.find({}).toArray();
  }

  async insertExperience(Experience:Experience){
   const collection = await database.getCollection(this.collectionName)
   return collection.insertOne({id: id});
    }
    
      // id cambio a numerico
    async updateExperience (experience:Experience, id:number) {
      const collection = await database.getCollection(this.collectionName)
      const result =await collection.updateOne({id: id}, {$set: experience});
      console.log(`${result} documents matched the query criteria`);
     // console.log(`${collection.modifiedCount} documents were updated`)
      return result
    }

    async deleteExperience (experience:Experience, id:number) {
      const collection = await database.getCollection(this.collectionName)
      const result = await collection.deleteOne({id: id});
      //console.log(`${result} documents matched the query criteria`);
     // console.log(`${collection.modifiedCount} documents were updated`)
      return result
    }
/*
   async updateExperience(Experience:Experience){
      const collection = await database.getCollection(this.collectionName)
      return collection.updateOne({}, Experience);
   }

   async deleteExperience(Experience:Experience){
      const collection = await database.getCollection(this.collectionName)
      return collection.deleteOne(Experience)
   }
*/
}

export default new ExperienceDAO('Experiences');