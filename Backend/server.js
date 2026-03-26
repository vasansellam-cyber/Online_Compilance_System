require("dotenv").config();   
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const blockRequestRoutes = require("./routes/blockRequestRoutes");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/block-requests", blockRequestRoutes);
  
mongoose.connect(process.env.MONGO_URI);
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
