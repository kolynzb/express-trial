const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const productRoutes = require("./Routes/products");
const userRoutes = require("./Routes/users");

app.use(express.json()); //is a method inbuilt in express to recognize the incoming Request Object
app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.status(200).send("welcome to our api");
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
