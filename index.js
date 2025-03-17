const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors")
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Import routes
const userRoutes = require("./routes/userRoute");
const productRoutes = require("./routes/productRoute");
const postRoutes = require("./routes/postRoute");
const todoRoutes = require("./routes/todoRoute");
const commentRoutes = require("./routes/commentRoute");
const orderRoutes = require("./routes/orderRoute");

// Define routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/todos", todoRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/orders", orderRoutes);

// Index route
app.get("/", (req, res) => {
  res.render("index");
});

// Other valid routes
app.get("/documentation", (req, res) => {
  res.render("documentation");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// 404 PAGE NOT FOUND
app.use((req, res) => {
  res.status(404).render("noroute");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
