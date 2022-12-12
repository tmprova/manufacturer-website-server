const client = require("../mongoClient/client");

const mongoConnenct = async () => {
  try {
    await client.connect();
    console.log("db connected");
  } finally {
    // await client.close();
  }
};

mongoConnenct().catch(console.dir);

module.exports = mongoConnenct;
