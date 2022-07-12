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