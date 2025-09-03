const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

// Add transaction
router.post("/", async (req, res) => {
  try {
    const { type, reason, amount } = req.body;
    const newTransaction = new Transaction({ type, reason, amount });
    await newTransaction.save();
    res.json(newTransaction);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get all transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
