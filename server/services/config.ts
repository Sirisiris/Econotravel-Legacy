import {config as dotenvConfig} from 'dotenv';


dotenvConfig();
// localhost de mongodb
export const config = () =>{
    const uri = process.env.MONGODB_URL ||'localhost:27017';
    return uri
}
