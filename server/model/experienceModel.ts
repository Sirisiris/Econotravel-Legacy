// import movies from '../data/movies';
import {connection} from './../services/database.service'
import iMovie from './interfaces/iExperience';

class Experience{

   async getExperiences(){
        const queryStr = 'SELECT * FROM Experience'
        // console.log(movies);
        const client = await connection();
        const result = await client.query(queryStr);
        return result.rows;

    }
async getOneExperience(id){
    const queryStr = 'SELECT * FROM experience where id=$1'

    // console.log(movies);
    const client = await connection();
    const result = await client.query(queryStr,[id]);
    return result.rows;
}
    getExperiencesByDuration(){
    }
}

export default new Experience();