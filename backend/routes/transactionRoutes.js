const express = require("express");
const transactionRoutes = require("./routes/transactionRoutes");
const { addTransaction, getTransactions } = require("../controllers/transactionController");

const router = express.Router();

router.post("/", addTransaction);
router.get("/", getTransactions);


app.use("/api/transactions", transactionRoutes);


module.exports = router;
