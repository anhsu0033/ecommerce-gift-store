let productName = "Photo Mug";
let productPrice = 499;
let inStock = true;

console.log(productName);
console.log(productPrice);
console.log(inStock);

productPrice = 599;
console.log("Updated Price:", productPrice);

let quantity = 2;
let totalAmount = productPrice * quantity;
console.log("Total Amount:", totalAmount);

// Stock check
if (inStock) {
  console.log("Product is available. You can place the order.");
} else {
  console.log("Sorry, product is out of stock.");
}

// Payment check
let paymentSuccess = true;

if (paymentSuccess) {
  console.log("Payment successful. Order placed.");
} else {
  console.log("Payment failed. Try again.");
}

// Free delivery logic
if (totalAmount >= 999) {
  console.log("You got FREE delivery 🎉");
} else {
  console.log("Delivery charges applied");
}

// FUNCTION
function placeOrder(productName, price, quantity) {
  let total = price * quantity;
  console.log("Order placed for:", productName);
  console.log("Quantity:", quantity);
  console.log("Total amount:", total);
}

// FUNCTION CALL
placeOrder("Photo Mug", 599, 2);
let cart = [
  "Photo Mug",
  "Custom T-Shirt",
  "Photo Frame"
];

console.log("Cart Items:", cart);
console.log("First Item:", cart[0]);
console.log("Total Items in Cart:", cart.length);
let cartItems = [
  { name: "Photo Mug", price: 599 },
  { name: "Custom T-Shirt", price: 799 },
  { name: "Photo Frame", price: 999 }
];

let cartTotal = 0;

for (let item of cartItems) {
  cartTotal += item.price;
}

console.log("Cart Total:", cartTotal);
let user = {
  name: "Rahul Sharma",
  email: "rahul@example.com",
  phone: "9876543210",
  isLoggedIn: true
};

console.log("User Name:", user.name);
console.log("User Email:", user.email);
let product = {
  id: 101,
  name: "Photo Mug",
  price: 599,
  category: "Customized Gifts"
};

console.log("Product:", product.name);
console.log("Category:", product.category);
let order = {
  orderId: "ORD12345",
  user: user,
  items: cartItems,
  totalAmount: cartTotal,
  paymentStatus: "SUCCESS",
  orderStatus: "PLACED"
};

console.log("Order ID:", order.orderId);
console.log("Order Total:", order.totalAmount);
console.log("Order Status:", order.orderStatus);
