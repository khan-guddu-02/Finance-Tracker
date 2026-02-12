const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const transactionRoutes = require('./routes/transactionRoutes');


const app = express();

// DB Connection
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/transactions", transactionRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
