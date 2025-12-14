const mongoose = require("mongoose");

console.log("Trying to connect to MongoDB...");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Ecom1:Akshat12345@cluster0.wncylye.mongodb.net/?appName=Cluster0"
    );

    console.log("MongoDB Connected Successfully ✅");
  } catch (error) {
    console.error("MongoDB Connection Failed ❌");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
