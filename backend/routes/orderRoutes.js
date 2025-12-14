const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

// CREATE ORDER (Checkout)
router.post("/orders", createOrder);

// GET ALL ORDERS (Admin)
router.get("/orders", getOrders);

// UPDATE ORDER STATUS (Admin)
router.put("/orders/:id/status", updateOrderStatus);

module.exports = router;
