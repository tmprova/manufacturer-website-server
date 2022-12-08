const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoConnect = require("./config/mongoConnenct");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware====>>
app.use(cors());
app.use(express.json());
// mongoDB

// const client = new MongoClient(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUniFiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// async function run() {
//   try {
//     await client.connect();
//     console.log("db connected");
//   } finally {
//     // await client.close();
//   }
// }

// run().catch(console.dir);
// hello world
app.get("/", (req, res) => {
  res.send("nodemon problems");
});

const serverRun = async () => {
  try {
    await mongoConnect();
    app.listen(port, () => {
      console.log(`Manufacturing app Listining to ${port}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};
serverRun();
// app.listen(port, () => {
//   console.log(`Manufacturing app Listining to ${port}`);
// });
