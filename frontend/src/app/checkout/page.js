"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

// 👇 Inner component that uses useSearchParams
function CheckoutContent() {
  const searchParams = useSearchParams();

  const productName = searchParams.get("name");
  const productPrice = searchParams.get("price");

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    addressLine: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      orderId: "ORD" + Date.now(),
      product: productName,
      quantity: 1,
      totalAmount: Number(productPrice),
      address: address,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      }
    );

    const data = await res.json();

    if (data.orderId) {
      window.location.href = `/order-confirmation?id=${data.orderId}`;
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Checkout
      </h1>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ORDER SUMMARY */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Order Summary
          </h2>
          <p><strong>Product:</strong> {productName}</p>
          <p><strong>Price:</strong> ₹{productPrice}</p>
          <p className="mt-4 font-bold">
            Total: ₹{productPrice}
          </p>
        </div>

        {/* ADDRESS FORM */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Shipping Address
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              name="name"
              placeholder="Full Name"
              className="w-full border p-2"
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              placeholder="Phone Number"
              className="w-full border p-2"
              onChange={handleChange}
              required
            />

            <textarea
              name="addressLine"
              placeholder="Full Address"
              className="w-full border p-2"
              onChange={handleChange}
              required
            />

            <input
              name="city"
              placeholder="City"
              className="w-full border p-2"
              onChange={handleChange}
              required
            />

            <input
              name="state"
              placeholder="State"
              className="w-full border p-2"
              onChange={handleChange}
              required
            />

            <input
              name="pincode"
              placeholder="Pincode"
              className="w-full border p-2"
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

// 👇 Wrapper with Suspense (THIS FIXES THE BUILD ERROR)
export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
