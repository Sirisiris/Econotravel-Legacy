import { MongoClient } from 'mongodb'
import { config } from './config'

const uri = config()
const client = new MongoClient(uri);
const dbName = 'experiences';

export const connection = async (col:string) => {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection(col);
        return collection;
	} catch(error){
		console.log(error);
	}
    }

    // de database - model - controller/middelware - router