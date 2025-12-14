"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">
        🎁 Custom Gift Store
      </h1>

      <div className="space-x-6">
        <Link
          href="/"
          className="text-gray-700 hover:text-blue-600"
        >
          Home
        </Link>

        <Link
          href="/admin/orders"
          className="text-gray-700 hover:text-blue-600"
        >
          Admin
        </Link>
      </div>
    </nav>
  );
}
