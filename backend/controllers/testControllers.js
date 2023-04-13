const { ObjectId } = require("mongodb");
const {
  db,
  testAgain,
  productCollection,
  userCollection,
  orderCollection,
  reviewCollection,
} = require("../models/models");
const jwt = require("jsonwebtoken");

// verifyAdmin middletier
const verifyAdmin = async (req, res, next) => {
  const requester = req.decoded.email;
  const requestedAccount = await userCollection.findOne({ email: requester });
  if (requestedAccount.role === "Admin") {
    next();
  } else res.status(403).send({ message: "Forbidden Access" });
};

//
const getALLData1 = async (req, res) => {
  try {
    const query = {};

    const cursor = await db.find(query);
    const result = await cursor.toArray();
    res.status(200).send(result);
    //   const allData = await Product.find();
    //   res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getALLData2 = async (req, res) => {
  try {
    const query = {};

    const cursor = await testAgain.find(query);
    const result = await cursor.toArray();
    res.status(200).send(result);
    //   const allData = await Product.find();
    //   res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getDb = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const testkit = await db.findOne(query);
    res.status(200).send(testkit);
    //   const product = await Product.findById(req.params.id);
    //   res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getest = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const testKitSec = await testAgain.findOne(query);
    res.status(200).send(testKitSec);
    //   const product = await Product.findById(req.params.id);
    //   res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

const addDb = async (req, res) => {
  try {
    const newDb = req.body;
    const result = await db.insertOne(newDb);
    res.status(200).send(result);
    //   const product = await Product.create(req.body);
    //   res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTest = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const result = await testAgain.deleteOne(query);
    res.status(200).send(result);
    // const product = await Product.findByIdAndDelete(req.params.id);
    // res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

const addProduct = async (req, res) => {
  try {
    const products = req.body;
    const result = await productCollection.insertOne(products);
    res.status(200).send(result);
    // const product = await Product.create(req.body);
    // res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error.message);
    // console.log(error.message);
  }
};

const getProducts = async (req, res) => {
  try {
    const query = {};

    const cursor = await productCollection.find(query);
    const result = await cursor.toArray();
    res.status(200).send(result);
    //   res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const product = await productCollection.findOne(query);
    res.status(200).send(product);
    //   const product = await Product.findById(req.params.id);
    //   res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const result = await productCollection.deleteOne(query);
    res.status(200).send(result);
    // const product = await Product.findByIdAndDelete(req.params.id);
    // res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};
// user controller
const allUser = async (req, res) => {
  try {
    const result = await userCollection.find().toArray();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json(error.message);
    // console.log(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    const result = await userCollection.findOne(query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error.message);
  }
};

const addUser = async (req, res) => {
  try {
    const email = req.params.email;
    const user = req.body;
    const filter = { email: email };
    const options = { upsert: true };
    const updateDoc = {
      $set: user,
    };
    const result = await userCollection.updateOne(filter, updateDoc, options);
    const token = jwt.sign({ email: email }, process.env.ACCES_TOKEN_SECRET, {
      expiresIn: "3d",
    });
    res.status(200).send({ result, token });
  } catch (error) {
    res.status(500).json(error.message);
    // console.log(error.message);
  }
};
const updateUser = async (req, res) => {
  try {
    const email = req.params.email;
    const user = req.body;
    const filter = { email: email };
    const options = { upsert: true };
    const updateDoc = {
      $set: user,
    };
    const result = await userCollection.updateOne(filter, updateDoc, options);

    res.status(200).send({ result, token });
  } catch (error) {
    res.status(500).json(error.message);
    // console.log(error.message);
  }
};
// delete user
const deleteuser = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const result = await userCollection.deleteOne(query);
    res.status(200).send(result);
    // const product = await Product.findByIdAndDelete(req.params.id);
    // res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

// make admin controller

const makeAdmin = async (req, res) => {
  try {
    const email = req.params.email;
    // const user = req.body;
    const filter = { email: email };
    // const options = { upsert: true };
    const updateDoc = {
      $set: { role: "Admin" },
    };
    const result = await userCollection.updateOne(filter, updateDoc);

    res.status(200).send(result);
  } catch (error) {
    res.status(500).json(error.message);
    // console.log(error.message);
  }
};
const getAdmin = async (req, res) => {
  try {
    const email = req.params.email;

    const user = await userCollection.findOne({ email });
    const isAdmin = user?.role === "Admin";

    res.status(200).send({ admin: isAdmin });
  } catch (error) {
    res.status(500).json(error.message);
    // console.log(error.message);
  }
};

// purchase & order controllers

const getOrders = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const result = await productCollection.findOne(query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const orders = async (req, res) => {
  try {
    const order = req.body;
    const result = await orderCollection.insertOne(order);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const findOrderItem = async (req, res) => {
  try {
    const query = { email: req.query.email };
    const result = await orderCollection.find(query).toArray();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const cancelOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const result = await orderCollection.deleteOne(query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// review controller

const postReview = async (req, res) => {
  try {
    const review = req.body;
    const result = await reviewCollection.insertOne(review);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const getReview = async (req, res) => {
  try {
    const result = await reviewCollection.find().toArray();
    res.status(200).send(result.reverse());
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getALLData1,
  getALLData2,
  getDb,
  getest,
  addDb,
  deleteTest,
  addProduct,
  getProducts,
  getProduct,
  deleteProduct,
  allUser,
  getUser,
  addUser,
  updateUser,
  deleteuser,
  makeAdmin,
  getAdmin,
  verifyAdmin,
  getOrders,
  orders,
  findOrderItem,
  cancelOrder,
  postReview,
  getReview,
};
