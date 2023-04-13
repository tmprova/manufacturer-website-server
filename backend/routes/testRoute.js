const express = require("express");
const jwt = require("jsonwebtoken");
const verifyJwt = require("../middleTier/verifyJWT");

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
  addUser,
  allUser,
  getUser,
  updateUser,
  makeAdmin,
  deleteuser,
  getAdmin,
  verifyAdmin,
  getOrders,
  orders,
  findOrderItem,
  cancelOrder,
} = require("../controllers/testControllers");
// const verifyAdmin = require("../middleTier/verifyAdmin");

const testRouter = express.Router();
testRouter.get("/testing", getALLData1);

testRouter.get("/testing2", getALLData2);

testRouter.get("/testing1/:id", getDb);

testRouter.get("/testing2/:id", getest);

testRouter.post("/testing1", addDb);
//
testRouter.post("/add", verifyJwt, verifyAdmin, addProduct);
testRouter.get("/allitem", getProducts);
testRouter.get("/item/:id", getProduct);
testRouter.delete("/remove/:id", deleteProduct);
//
testRouter.get("/allUsers", verifyJwt, allUser);
testRouter.get("getUser", getUser);
testRouter.put("/user/:email", addUser);
testRouter.put("/update/:email", updateUser);
testRouter.delete("/user/delete/:id", deleteuser);
// admin routes
testRouter.put("/user/admin/:email", verifyJwt, verifyAdmin, makeAdmin);
testRouter.get("/admin/:email", verifyJwt, getAdmin);

// purchase @ orders
testRouter.get("/orders/:id", verifyJwt, getOrders);
testRouter.post("/orders", orders);
testRouter.get("/findItems", findOrderItem);
testRouter.delete("/deleteOrder/:id", cancelOrder);

testRouter.delete("/testing2/:id", deleteTest);

module.exports = testRouter;
