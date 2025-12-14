exports.getProducts = (req, res) => {
  res.json([
    { id: 1, name: "Photo Mug", price: 599 },
    { id: 2, name: "Custom T-Shirt", price: 799 },
    { id: 3, name: "Photo Frame", price: 999 }
  ]);
};
