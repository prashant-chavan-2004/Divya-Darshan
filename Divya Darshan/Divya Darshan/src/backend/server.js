const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const templeRoutes = require("./routes/templeRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://prashant21102004_db_user:MtPJYeag67P9dYSF@cluster0.iu1ayam.mongodb.net/templeDB",
).then(() => {
  console.log("MongoDB Connected Successfully");
}).catch((err) => {
  console.log("MongoDB Connection Error:", err);
});

// Routes
app.use("/api/temples", templeRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Temple API is running...");
});

// Server Start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});