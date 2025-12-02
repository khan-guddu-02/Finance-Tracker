const Transaction = require("../models/Transaction");

// Add transaction
exports.addTransaction = async (req, res) => {
  try {
    const { type, reason, amount } = req.body;
    const newTransaction = new Transaction({ type, reason, amount });
    await newTransaction.save();
    res.json(newTransaction);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Get all transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
