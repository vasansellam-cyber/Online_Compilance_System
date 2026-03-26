require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const blockRequestRoutes = require("./routes/blockRequestRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/block-requests", blockRequestRoutes);

// MongoDB connection (Mongoose 7+)
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err));

// Test route
app.get("/", (req, res) => res.send("Backend is running ✅"));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));