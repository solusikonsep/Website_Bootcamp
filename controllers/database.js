const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://root:examle@localhost:27017/digitalbooks");

async function connectToMongo() {
  try {
   
      await client.connect();

      // console.log("==== Database MongoDB Connected ====");

      const db = client.db();
      const collections = await db.collections();

      return {
        db,
        collections,
        client, 
      };

  } catch (err) {
      console.error("Failed to connect to MongoDB", err);
      throw err;
    }
};

exports = connectToMongo;