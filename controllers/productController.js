const products = [
  {
    id: 1,
    name: "Crystal Mug",
    price: 12.99,
    description: "A shiny mug for your coffee.",
    image: "https://source.unsplash.com/random/300x300/?mug",
  },
  {
    id: 2,
    name: "Leather Wallet",
    price: 24.5,
    description: "Sleek and durable wallet.",
    image: "https://source.unsplash.com/random/300x300/?wallet",
  },
  {
    id: 3,
    name: "Wooden Chair",
    price: 89.0,
    description: "Rustic chair for any room.",
    image: "https://source.unsplash.com/random/300x300/?chair",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 45.75,
    description: "Portable sound solution.",
    image: "https://source.unsplash.com/random/300x300/?speaker",
  },
  {
    id: 5,
    name: "Silk Scarf",
    price: 19.95,
    description: "Elegant accessory for all seasons.",
    image: "https://source.unsplash.com/random/300x300/?scarf",
  },
  {
    id: 6,
    name: "Steel Watch",
    price: 120.0,
    description: "Timeless wristpiece.",
    image: "https://source.unsplash.com/random/300x300/?watch",
  },
  {
    id: 7,
    name: "Canvas Backpack",
    price: 34.99,
    description: "Perfect for travel.",
    image: "https://source.unsplash.com/random/300x300/?backpack",
  },
  {
    id: 8,
    name: "Glass Lamp",
    price: 67.25,
    description: "Warm ambient lighting.",
    image: "https://source.unsplash.com/random/300x300/?lamp",
  },
  {
    id: 9,
    name: "Ceramic Vase",
    price: 28.0,
    description: "Decorative floral holder.",
    image: "https://source.unsplash.com/random/300x300/?vase",
  },
  {
    id: 10,
    name: "Running Shoes",
    price: 79.99,
    description: "Light and fast footwear.",
    image: "https://source.unsplash.com/random/300x300/?shoes",
  },
  {
    id: 11,
    name: "Cotton T-Shirt",
    price: 15.0,
    description: "Casual everyday wear.",
    image: "https://source.unsplash.com/random/300x300/?tshirt",
  },
  {
    id: 12,
    name: "Marble Clock",
    price: 52.5,
    description: "Modern desk accessory.",
    image: "https://source.unsplash.com/random/300x300/?clock",
  },
  {
    id: 13,
    name: "Velvet Cushion",
    price: 22.75,
    description: "Soft and cozy pillow.",
    image: "https://source.unsplash.com/random/300x300/?cushion",
  },
  {
    id: 14,
    name: "Bamboo Mat",
    price: 18.9,
    description: "Eco-friendly floor cover.",
    image: "https://source.unsplash.com/random/300x300/?mat",
  },
  {
    id: 15,
    name: "Copper Pan",
    price: 39.95,
    description: "Non-stick cooking essential.",
    image: "https://source.unsplash.com/random/300x300/?pan",
  },
  {
    id: 16,
    name: "Linen Curtains",
    price: 45.0,
    description: "Light-filtering drapes.",
    image: "https://source.unsplash.com/random/300x300/?curtains",
  },
  {
    id: 17,
    name: "Iron Kettle",
    price: 33.25,
    description: "Classic tea brewer.",
    image: "https://source.unsplash.com/random/300x300/?kettle",
  },
  {
    id: 18,
    name: "Wool Blanket",
    price: 59.99,
    description: "Warm and snug cover.",
    image: "https://source.unsplash.com/random/300x300/?blanket",
  },
  {
    id: 19,
    name: "Oak Table",
    price: 199.0,
    description: "Sturdy dining surface.",
    image: "https://source.unsplash.com/random/300x300/?table",
  },
  {
    id: 20,
    name: "Gold Necklace",
    price: 89.5,
    description: "Dazzling jewelry piece.",
    image: "https://source.unsplash.com/random/300x300/?necklace",
  },
  {
    id: 21,
    name: "Porcelain Plate",
    price: 14.75,
    description: "Elegant dinnerware.",
    image: "https://source.unsplash.com/random/300x300/?plate",
  },
  {
    id: 22,
    name: "Suede Jacket",
    price: 110.0,
    description: "Stylish outerwear.",
    image: "https://source.unsplash.com/random/300x300/?jacket",
  },
  {
    id: 23,
    name: "Clay Pot",
    price: 25.99,
    description: "Rustic plant holder.",
    image: "https://source.unsplash.com/random/300x300/?pot",
  },
  {
    id: 24,
    name: "USB Charger",
    price: 9.95,
    description: "Fast-charging adapter.",
    image: "https://source.unsplash.com/random/300x300/?charger",
  },
  {
    id: 25,
    name: "Pine Shelf",
    price: 47.5,
    description: "Simple storage solution.",
    image: "https://source.unsplash.com/random/300x300/?shelf",
  },
  {
    id: 26,
    name: "Felt Hat",
    price: 29.0,
    description: "Trendy headwear.",
    image: "https://source.unsplash.com/random/300x300/?hat",
  },
  {
    id: 27,
    name: "Brass Frame",
    price: 36.25,
    description: "Photo display piece.",
    image: "https://source.unsplash.com/random/300x300/?frame",
  },
  {
    id: 28,
    name: "Denim Jeans",
    price: 55.0,
    description: "Classic pants.",
    image: "https://source.unsplash.com/random/300x300/?jeans",
  },
  {
    id: 29,
    name: "Paper Notebook",
    price: 7.99,
    description: "For all your notes.",
    image: "https://source.unsplash.com/random/300x300/?notebook",
  },
  {
    id: 30,
    name: "Titanium Ring",
    price: 65.75,
    description: "Sleek finger accessory.",
    image: "https://source.unsplash.com/random/300x300/?ring",
  },
  {
    id: 31,
    name: "Plastic Bin",
    price: 12.5,
    description: "Handy organizer.",
    image: "https://source.unsplash.com/random/300x300/?bin",
  },
  {
    id: 32,
    name: "Silicone Case",
    price: 8.95,
    description: "Phone protection.",
    image: "https://source.unsplash.com/random/300x300/?case",
  },
  {
    id: 33,
    name: "Flannel Shirt",
    price: 32.0,
    description: "Cozy layered top.",
    image: "https://source.unsplash.com/random/300x300/?shirt",
  },
  {
    id: 34,
    name: "Aluminum Bottle",
    price: 16.99,
    description: "Reusable water container.",
    image: "https://source.unsplash.com/random/300x300/?bottle",
  },
  {
    id: 35,
    name: "Rattan Basket",
    price: 27.5,
    description: "Woven storage option.",
    image: "https://source.unsplash.com/random/300x300/?basket",
  },
];

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

exports.createProduct = (req, res) => {
  const { id, name, price, description ,image} = req.body;
  if (!id || !name || !price || !description || !image){
    return res.status(400).json({ message: "Missing required fields" });
  }
  const product = {
    id: id,
    name: name,
    price: price,
    description: description,
  };
  res
    .status(201)
    .json({ message: "Product created successfully", product: product });
};

exports.updateProduct = (req, res) => {
  const { id, name, price, description,image } = req.body;
  if (!id || !name || !price || !description || !image) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const product = {
    id: id,
    name: name,
    price: price,
    description: description,
  };
  res
    .status(201)
    .json({ message: "Product updated successfully", product: product });
};

exports.deleteProduct = (req, res) => {
  res.json({ message: "Product deleted successfully" });
};
