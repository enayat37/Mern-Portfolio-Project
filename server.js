const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

// dotenv configuration
dotenv.config();

// Connect to MongoDB
const connectDB = require("./config/db");
connectDB();

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// static fiels access

app.use(express.static(path.join(__dirname, "./enayat/build")));

// Routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./enayat/build/index.html"));
});

// Port
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
