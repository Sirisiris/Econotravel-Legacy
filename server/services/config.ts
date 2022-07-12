import {config as dotenvConfig} from 'dotenv';

dotenvConfig();

export const config = ():any => {
    const uri:string = process.env.DB_CONN_STRING || "mongodb://localhost:27017";
    const db:string = process.env.DB_NAME || "experiences";
    const secret = process.env.SECRET;

    return {
        uri,
        db,
        secret
    }
}