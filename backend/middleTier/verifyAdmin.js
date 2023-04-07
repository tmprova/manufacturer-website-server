// const userCollection = require("../models/models");
// const asyncHandler = require("express-async-handler");
// const { MongoClient, ServerApiVersion } = require("mongodb");
// const client = require("../mongoClient/client");

// const verifyAdmin = asyncHandler(async (req, res, next) => {
//   const requester = req.decoded.email;
//   const requestedAccount = await userCollection.findOne({ email: requester });
//   if (requestedAccount.role === "Admin") {
//     next();
//   } else res.status(403).send({ message: "Forbidden Access" });
// });

// module.exports = verifyAdmin;
