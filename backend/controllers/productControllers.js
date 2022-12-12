const { ObjectId } = require("mongodb");
const productCollection = require("../models/models");
const asyncHandler = require("express-async-handler");
// const productCollection = require("../models/collectionModels");

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

// verifyJwt,verifyAdmin
const addProduct = asyncHandler(async (req, res) => {
  try {
    const products = req.body;
    const result = await productCollection.insertOne(products);
    res.status(200).send(result);
    //   const product = await Product.create(req.body);
    //   res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error.message);
    // console.log(error.message);
  }
});
// console.log(productCollection);
// const addDb = async (req, res) => {
//   try {
//     const newDb = req.body;
//     const result = await db.insertOne(newDb);
//     res.status(200).send(result);
//     //   const product = await Product.create(req.body);
//     //   res.status(201).json(product);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

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

// module.exports = { getProducts, getProduct, addProduct, deleteProduct };
