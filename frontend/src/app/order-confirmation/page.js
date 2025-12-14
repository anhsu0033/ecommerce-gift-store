"use client";

import { useSearchParams } from "next/navigation";

export default function OrderConfirmation() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id");

  const whatsappNumber = "919876543210"; // replace later

  const message = `Hello,
I have placed an order.

Order ID: ${orderId}

I am sending customization details.`;

  const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">
          🎉 Order Confirmed
        </h1>

        <p className="mb-2">
          <strong>Order ID:</strong> {orderId}
        </p>

        <p className="mb-6 text-gray-600">
          Your order is placed successfully.
          Our team will process it after receiving customization details.
        </p>

        <a
          href={whatsappURL}
          target="_blank"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Send Customization on WhatsApp
        </a>
      </div>
    </main>
  );
}
