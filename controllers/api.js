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
    const {db} =  await connectToMongo();
    const hasil = await db.collection("books").find().toArray();
    this.json(hasil);
  });

  ROUTE("GET /api/buku", function () {
    this.json(buku);
  });

  ROUTE("GET /api/buku/{id}", function () {
    console.log("Ini adalah id yang dikirim dari URL client ", this.params.id);
    buku.map((value, key) => {
      if (value.id_buku == this.params.id) {
        this.json(value);
      }
    });
    // this.json(buku[this.params.id]);
  });

  ROUTE("POST /api/buku", function () {
    buku.push(this.body);

    this.json(buku);
  });
};
