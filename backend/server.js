const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoConnect = require("./config/mongoConnenct");
const routes = require("./routes/testRoute");

const { MongoClient, ServerApiVersion } = require("mongodb");
const verifyJwt = require("./middleTier/verifyJWT");
const app = express();
const port = process.env.PORT || 5000;

// middleware====>>
app.use(cors());
app.use(express.json());
app.use("/api", routes);

//
// hello world
app.get("/", (req, res) => {
  res.send("Express App");
});

// mongoDB
const serverRun = async () => {
  try {
    await mongoConnect();
    // console.log(mongoConnect);

    app.listen(port, () => {
      // verifyJwt();
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
