const express = require("express");

const {
  getDb,
  getest,
  addDb,
  deleteTest,
  getALLData1,
  getALLData2,
  addProduct,
  getProducts,
  getProduct,
  deleteProduct,
} = require("../controllers/testControllers");

const testRouter = express.Router();
testRouter.get("/testing", getALLData1);

testRouter.get("/testing2", getALLData2);

testRouter.get("/testing1/:id", getDb);

testRouter.get("/testing2/:id", getest);

testRouter.post("/testing1", addDb);
testRouter.post("/add", addProduct);
testRouter.get("/allitem", getProducts);
testRouter.get("/item/:id", getProduct);
testRouter.delete("/remove/:id", deleteProduct);

testRouter.delete("/testing2/:id", deleteTest);

module.exports = testRouter;
