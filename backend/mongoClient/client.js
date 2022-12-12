const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUniFiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
