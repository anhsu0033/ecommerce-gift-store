console.log("server.js file is running");

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = 5000;

// ✅ Connect Database
connectDB();

// ✅ Enable CORS (THIS FIXES YOUR ERROR)
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Middleware
app.use(express.json());

// Routes
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api", productRoutes);
app.use("/api", orderRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend server running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
