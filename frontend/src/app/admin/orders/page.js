"use client";

import { useEffect, useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  // Fetch all orders
  const fetchOrders = async () => {
    const res = await fetch("http://localhost:5000/api/orders");
    const data = await res.json();
    setOrders(data.orders || []);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Update order status
  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:5000/api/orders/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderStatus: status }),
    });

    // Refresh list after update
    fetchOrders();
  };

  return (
    <main className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        Admin – Orders
      </h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-6 rounded shadow"
            >
              <p><strong>Order ID:</strong> {order.orderId}</p>
              <p><strong>Product:</strong> {order.product}</p>
              <p><strong>Total:</strong> ₹{order.totalAmount}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className="font-semibold">
                  {order.orderStatus}
                </span>
              </p>

              {/* ADDRESS (SAFE RENDERING) */}
              <p className="mt-3 font-semibold">Address:</p>

              {order.address ? (
                <>
                  <p>{order.address.name}</p>
                  <p>{order.address.addressLine}</p>
                  <p>
                    {order.address.city}, {order.address.state}
                  </p>
                  <p>{order.address.pincode}</p>
                  <p>Phone: {order.address.phone}</p>
                </>
              ) : (
                <p className="text-red-500">
                  Address not available (old order)
                </p>
              )}

              {/* STATUS BUTTONS */}
              <div className="mt-4 flex gap-2 flex-wrap">
                <button
                  onClick={() => updateStatus(order._id, "CONFIRMED")}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Confirm
                </button>

                <button
                  onClick={() => updateStatus(order._id, "SHIPPED")}
                  className="bg-yellow-600 text-white px-3 py-1 rounded"
                >
                  Ship
                </button>

                <button
                  onClick={() => updateStatus(order._id, "DELIVERED")}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Deliver
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
