const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

const booksRoutes = require("./books/book.route");
const orderRoutes = require("./orders/order.route");
const port = process.env.PORT || 5000;
const userRoute = require("./users/user.route");
const adminRoute = require("./stats/admin.stats");

app.get("/", (req, res) => {
  res.send("hello world");
});

//routes
app.use("/api/books", booksRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoute);
app.use("/api/admin", adminRoute);

const main = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected"));
};
main();
app.listen(port, () => {
  console.log("server connected");
});
