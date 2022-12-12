const { ObjectId } = require("mongodb");
const { db, testAgain, productCollection } = require("../models/models");

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
};
