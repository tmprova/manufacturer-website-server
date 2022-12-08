const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUniFiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const mongoConnenct = async () => {
  try {
    await client.connect();
    console.log("db connected");
  } finally {
    // await client.close();
  }
};

// mongoConnenct().catch(console.dir);

module.exports = mongoConnenct;
