import { ObjectID } from "bson";
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

  async saveExperience(Experience:Experience){
        const collection = await database.getCollection(this.collectionName)
        return collection.insertOne(Experience);
    }

    async updateExperience (experience:Experience, id:string) {
      const collection = await database.getCollection(this.collectionName)
      const result =await collection.updateOne({_id: id}, {$set: experience});
      console.log(`${result} documents matched the query criteria`);
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