const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://root:example@localhost:27017/digitalbooks?authSource=admin");

async function connectToMongo() {
    try {
     
        await client.connect();
  
        console.log("==== Database MongoDB Connected ====");
  
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
 
exports.install = async function () {

  ROUTE("GET /api/", async function () {
    // console.log(Buku.find())
 
    this.json("Selamat datang di API Digital Books");
  });

  ROUTE("GET /api/buku", async function () {
    const {db} =  await connectToMongo();
    const hasil = await db.collection("books").find({ tahun_terbit: 2022 }).toArray();
    this.json(hasil);
  });

  ROUTE("GET /api/buku/{id}", async function () {
    const {db} =  await connectToMongo();
    const hasil = await db.collection("books").find({ id_buku: this.params.id }).toArray();
    this.json(hasil);
  });

  ROUTE("POST /api/buku", async function () {

    const {db} =  await connectToMongo();
    const hasil = await db.collection("books").insertOne(this.body).toArray();
    
    this.json(hasil);
  });
};
