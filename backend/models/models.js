const client = require("../mongoClient/client");

const db = client.db("dbName").collection("people");
const testAgain = client.db("test").collection("testdata");
const productCollection = client.db("adminDb").collection("products");
const orderCollection = client.db("adminDb").collection("orders");
const userCollection = client.db("adminDb").collection("users");
const reviewCollection = client.db("userDb").collection("reviews");
const paymentCollection = client.db("userDb").collection("payments");
const profileCollection = client.db("userDb").collection("profile");
module.exports = {
  db,
  testAgain,
  productCollection,
  orderCollection,
  userCollection,
  reviewCollection,
  paymentCollection,
  profileCollection,
};
