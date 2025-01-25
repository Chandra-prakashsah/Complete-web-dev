const { MongoClient } = require("mongodb");

const dbUrl = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(dbUrl);
const dbConnection = async () => {
    await client.connect();
    const db = client.db("MongodbProject");
    return db;
}
module.exports={dbConnection};
