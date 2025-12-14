import "./globals.css";
import Navbar from "../components/navbar";

export const metadata = {
  title: "Custom Gift Store",
  description: "Professional E-commerce Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
