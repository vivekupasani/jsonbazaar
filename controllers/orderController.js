const orders = [
  { id: 1, user_id: 42, product_id: 101, quantity: 2, status: "Pending" },
  { id: 2, user_id: 13, product_id: 102, quantity: 1, status: "Shipped" },
  { id: 3, user_id: 27, product_id: 103, quantity: 3, status: "Delivered" },
  { id: 4, user_id: 5, product_id: 104, quantity: 4, status: "Pending" },
  { id: 5, user_id: 19, product_id: 105, quantity: 1, status: "Cancelled" },
  { id: 6, user_id: 34, product_id: 106, quantity: 5, status: "Shipped" },
  { id: 7, user_id: 8, product_id: 107, quantity: 2, status: "Delivered" },
  { id: 21, user_id: 31, product_id: 121, quantity: 3, status: "Delivered" },
  { id: 22, user_id: 12, product_id: 122, quantity: 1, status: "Pending" },
  { id: 23, user_id: 49, product_id: 123, quantity: 4, status: "Shipped" },
  { id: 32, user_id: 46, product_id: 132, quantity: 2, status: "Pending" },
  { id: 33, user_id: 18, product_id: 133, quantity: 5, status: "Cancelled" },
  { id: 34, user_id: 33, product_id: 134, quantity: 3, status: "Shipped" },
  { id: 35, user_id: 7, product_id: 135, quantity: 1, status: "Delivered" },
  { id: 37, user_id: 39, product_id: 102, quantity: 2, status: "Shipped" },
  { id: 38, user_id: 11, product_id: 103, quantity: 3, status: "Delivered" },
  { id: 39, user_id: 45, product_id: 104, quantity: 1, status: "Pending" },
  { id: 40, user_id: 16, product_id: 105, quantity: 5, status: "Cancelled" },
  { id: 41, user_id: 30, product_id: 106, quantity: 2, status: "Shipped" },
  { id: 48, user_id: 43, product_id: 113, quantity: 1, status: "Shipped" },
  { id: 49, user_id: 15, product_id: 114, quantity: 4, status: "Delivered" },
  { id: 50, user_id: 32, product_id: 115, quantity: 2, status: "Pending" },
  { id: 51, user_id: 8, product_id: 116, quantity: 3, status: "Shipped" },
  { id: 52, user_id: 22, product_id: 117, quantity: 1, status: "Delivered" },
  { id: 54, user_id: 19, product_id: 119, quantity: 2, status: "Cancelled" },
  { id: 55, user_id: 35, product_id: 120, quantity: 4, status: "Shipped" },
  { id: 56, user_id: 10, product_id: 121, quantity: 3, status: "Delivered" },
  { id: 57, user_id: 27, product_id: 122, quantity: 1, status: "Pending" },
  { id: 58, user_id: 41, product_id: 123, quantity: 2, status: "Shipped" },
  { id: 59, user_id: 6, product_id: 124, quantity: 5, status: "Delivered" },
  { id: 60, user_id: 23, product_id: 125, quantity: 3, status: "Pending" },
  { id: 61, user_id: 38, product_id: 126, quantity: 1, status: "Cancelled" },
  { id: 62, user_id: 14, product_id: 127, quantity: 4, status: "Shipped" },
  { id: 63, user_id: 29, product_id: 128, quantity: 2, status: "Delivered" },
  { id: 77, user_id: 11, product_id: 107, quantity: 3, status: "Delivered" },
  { id: 78, user_id: 28, product_id: 108, quantity: 1, status: "Pending" },
  { id: 79, user_id: 45, product_id: 109, quantity: 5, status: "Shipped" },
  { id: 80, user_id: 16, product_id: 110, quantity: 2, status: "Delivered" },
  { id: 81, user_id: 30, product_id: 111, quantity: 4, status: "Pending" },
  { id: 82, user_id: 4, product_id: 112, quantity: 3, status: "Cancelled" },
  { id: 83, user_id: 21, product_id: 113, quantity: 1, status: "Shipped" },
  { id: 84, user_id: 37, product_id: 114, quantity: 2, status: "Delivered" },
  { id: 85, user_id: 50, product_id: 115, quantity: 5, status: "Pending" },
  { id: 86, user_id: 13, product_id: 116, quantity: 3, status: "Shipped" },
  { id: 87, user_id: 26, product_id: 117, quantity: 1, status: "Delivered" },
  { id: 88, user_id: 42, product_id: 118, quantity: 4, status: "Pending" },
  { id: 89, user_id: 18, product_id: 119, quantity: 2, status: "Cancelled" },
  { id: 90, user_id: 34, product_id: 120, quantity: 3, status: "Shipped" },
  { id: 91, user_id: 5, product_id: 121, quantity: 1, status: "Delivered" },
  { id: 92, user_id: 39, product_id: 122, quantity: 5, status: "Pending" },
  { id: 93, user_id: 15, product_id: 123, quantity: 2, status: "Shipped" },
  { id: 97, user_id: 47, product_id: 127, quantity: 2, status: "Shipped" },
  { id: 98, user_id: 19, product_id: 128, quantity: 5, status: "Delivered" },
  { id: 99, user_id: 35, product_id: 129, quantity: 3, status: "Pending" },
  { id: 100, user_id: 10, product_id: 130, quantity: 1, status: "Shipped" },
];

// Get all orders
exports.getAllOrders = (req, res) => {
  res.json(orders);
};

// Get a single order by ID
exports.getOrderById = (req, res) => {
  const order = orders.find((o) => o.id === parseInt(req.params.id));
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
};

// Create a new order
exports.createOrder = (req, res) => {
  const { id, user_id, product_id, quantity, status } = req.body;
  if (!id || !product_id || !quantity || !status || !user_id) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const order = {
    id: id,
    user_id: user_id,
    product_id: product_id,
    quantity: quantity,
    status: status,
  };
  res.status(201).json({ message: "Order created successfully", order: order });
};

// Update an order
exports.updateOrder = (req, res) => {
  const { id, user_id, product_id, quantity, status } = req.body;
  if (!id || !product_id || !quantity || !status || !user_id) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const order = {
    id: id,
    user_id: user_id,
    product_id: product_id,
    quantity: quantity,
    status: status,
  };
  res.status(201).json({ message: "Order updated successfully", order: order });
};

// Delete an order
exports.deleteOrder = (req, res) => {
  res.json({ message: "Order deleted successfully" });
};
