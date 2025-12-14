const Order = require("../models/Order");

// CREATE ORDER (CHECKOUT → CONFIRMATION)
exports.createOrder = async (req, res) => {
  try {
    console.log("Incoming order data:", req.body);

    const order = new Order({
      orderId: req.body.orderId,
      product: req.body.product,
      quantity: req.body.quantity || 1,
      totalAmount: Number(req.body.totalAmount), // ✅ ensure number
      paymentStatus: "UNPAID",
      orderStatus: "PENDING",
      address: {
        name: req.body.address.name,
        phone: req.body.address.phone,
        addressLine: req.body.address.addressLine,
        city: req.body.address.city,
        state: req.body.address.state,
        pincode: req.body.address.pincode,
      },
    });

    const savedOrder = await order.save();

    res.status(201).json({
      message: "Order placed successfully",
      orderId: savedOrder._id,
    });
  } catch (error) {
    console.error("ORDER SAVE ERROR:", error.message);

    res.status(500).json({
      message: "Failed to place order",
      error: error.message,
    });
  }
};

// GET ALL ORDERS (ADMIN / FUTURE USE)
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.status(200).json({
      totalOrders: orders.length,
      orders,
    });
  } catch (error) {
    console.error("FETCH ORDERS ERROR:", error.message);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
// UPDATE ORDER STATUS (ADMIN)
exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderStatus } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { orderStatus },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({
      message: "Order status updated",
      order: updatedOrder,
    });
  } catch (error) {
    console.error("UPDATE STATUS ERROR:", error.message);
    res.status(500).json({ message: "Failed to update status" });
  }
};
